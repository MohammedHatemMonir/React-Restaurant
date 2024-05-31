import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../Globals";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import EmptyOrders from "./../Orders/EmptyOrdersPage";
import { toast } from "react-toastify";
import "./CartBody.scss";
import { useSignal } from "@preact/signals-react";
import DeliveryModal from "./DeliveryModal";
import PaypalModal from "./PaypalModal";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CircleLoader from "./../Loaders/CircleLoader";
export default function CartBody() {
  const navigate = useNavigate();
  const showDeliveryModal = useSignal(false);
  const showPaypalModal = useSignal(false);

  // Create Order
  const m = useMutation({
    mutationKey: [""],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/createOrder";
      console.log("posting to ", url);
      return await apiClient.post(url, Cart.value);
    },
  });

  async function createOrder() {
    const result = await m.mutateAsync();

    if (!result.data.success) {
      // alert(result.data?.msg);
      toast.error(result.data?.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      navigate("/myorders");
      // alert(result.data?.msg);
      toast.success(result.data?.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    navigate("/myorders");
    Cart.value.meals = [];
    console.log(result);
  }

  console.log("carttttttttt", Cart.value.meals);
  function AddQuantity({ quantity, mealId }) {
    let tempCart = Cart.value;

    if (
      !tempCart.meals.some((meal) =>
        meal.id == mealId ? (meal.quantity = quantity) : false
      )
    ) {
      console.log("meal not found");
    }
    Cart.value = {};
    Cart.value = tempCart;
    console.log("Cart", Cart.value, "temp cart", tempCart);
    getTotalPrice();
  }

  function DeleteMeal(id) {
    let tempCart = Cart.value;
    tempCart.meals = tempCart.meals.filter((meal) => meal.id != id);
    Cart.value = {};
    Cart.value = tempCart;
    console.log("Cart", Cart.value, "temp cart", tempCart);
    getTotalPrice();
  }

  function getTotalPrice() {
    let price = 0;
    Cart.value?.meals?.map((meal) => {
      price = price + meal.price * meal.quantity;
    });

    return price;
  }
  // console.log("carttttttttt", Cart.value.meals);
  if (m.isLoading) {
    return <CircleLoader />;
  }
  if (Cart.value?.meals?.length <= 0) {
    return <EmptyOrders />;
  } else
    return (
      <section className="shopping-cart-container">
        <div
          className="products-container"
          style={{ transform: "scale(0.80)" }}
        >
          <h3 className="title font-weight-bold ">My Products</h3>
          <div className="box-container">
            <div className="row">
              {!m.isError &&
                !m.isLoading &&
                Cart.value.meals?.map((meal, index) => (
                  <div
                    style={{ transform: "scale(0.95)" }}
                    className="box col-sm-12 col-md-6 col-lg-4 mb-3 "
                    key={index + meal.id}
                  >
                    <FaTimes
                      className="fas fa-times"
                      onClick={() => {
                        DeleteMeal(meal.id);
                      }}
                    />
                    {console.log("meal data", meal)}

                    <img src={meal.mealImg} alt="meal-img" />
                    <div className="content">
                      <h3>{meal.name}</h3>
                      <span> quantity : </span>

                      <input
                        type="number"
                        min="1"
                        onChange={(e) =>
                          AddQuantity({
                            quantity: e.target.value,
                            mealId: meal.id,
                          })
                        }
                        defaultValue={meal.quantity}
                      />
                      <br />
                      <span> price : </span>
                      <span className="price">
                        {meal.price * meal.quantity}$
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="cart-total">
            <h3 className="title font-weight-bold"> Payment </h3>
            <div className="box">
              <h3 className="total font-weight-bold text-center">
                Total:
                <span className="ml-2">
                  {new Intl.NumberFormat().format(getTotalPrice())}$
                </span>
              </h3>

              <div className="row text-center mt-3">
                <div className="col-12">
                  <Button
                    onClick={() => (showDeliveryModal.value = true)}
                    className="btn btn-primary col-sm-4 my-3 mr-4"
                  >
                    Delivery
                  </Button>
                  <Button
                    type="button"
                    id="cancel"
                    onClick={() => (showPaypalModal.value = true)}
                    className="btn btn-outline-primary col-sm-4 my-3"
                  >
                    Online
                  </Button>
                </div>
              </div>

              {/* <div className="d-flex justify-content-between align-items-center">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => (showDeliveryModal.value = true)}
              >
                Cash On Delivery
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => (showPaypalModal.value = true)}
              >
                Payment Getway
              </button>
            </div> */}
            </div>
          </div>
        </div>

        {showDeliveryModal.value == true && (
          <DeliveryModal
            createOrder={() => {
              createOrder();
            }}
            openModal={() => (showDeliveryModal.value = true)}
            closeModal={() => (showDeliveryModal.value = false)}
          />
        )}

        {showPaypalModal.value == true && (
          <PaypalModal
            totalPrice={getTotalPrice()}
            createOrder={() => {
              createOrder();
            }}
            openModal={() => (showPaypalModal.value = true)}
            closeModal={() => (showPaypalModal.value = false)}
          />
        )}
      </section>
    );
}
