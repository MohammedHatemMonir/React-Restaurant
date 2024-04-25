import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../../Globals";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import EmptyOrders from "./../Orders/EmptyOrdersPage";
import { toast } from "react-toastify";
import "./CartBody.scss";
import { useSignal } from "@preact/signals-react";
import PayPalButton from "./../Payment/PayPalButton";

export default function CartBody() {
  const navigate = useNavigate();

  const totalPrice = useSignal(0);
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
    Cart.value.meals.map((meal) => {
      price = price + meal.price * meal.quantity;
    });

    return price;
  }
  // console.log("carttttttttt", Cart.value.meals);
  if (m.isLoading) {
    return <>Loading...</>;
  }
  if (Cart.value.meals.length == 0) {
    return <EmptyOrders />;
  }
  return (
    <section
      // key={index}
      className="shopping-cart-container"
    >
      <div className="products-container" style={{ transform: "scale(0.75)" }}>
        <h3 className="title font-weight-bold">My Products</h3>
        <div className="box-container">
          {!m.isError &&
            !m.isLoading &&
            Cart.value.meals?.map((meal, index) => (
              <div className="box" key={index + meal.id}>
                <FaTimes
                  className="fas fa-times"
                  onClick={() => {
                    DeleteMeal(meal.id);
                  }}
                />
                {console.log("meal data", meal)}
                {/* // meal.mealImg || */}
                <img src={meal.mealImg} alt="meal-img" />
                <div className="content">
                  {/* meal.name || */}
                  <h3>{meal.name}</h3>
                  <span> quantity : </span>
                  {/* meal.quantity || */}
                  <input
                    type="number"
                    min="0"
                    onChange={(e) =>
                      AddQuantity({ quantity: e.target.value, mealId: meal.id })
                    }
                    defaultValue={meal.quantity}
                  />
                  <br />
                  <span> price : </span>
                  {/* meal.price || */}
                  <span className="price"> {meal.price * meal.quantity} </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="cart-total">
        <h3 className="title font-weight-bold"> Payment </h3>
        <div className="box">
          <h3 className="total font-weight-bold text-center">
            total : <span>{getTotalPrice()}</span>
          </h3>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                createOrder();
              }}
            >
              Cash On Delivery
            </button>
            <PayPalButton totalPrice={getTotalPrice()} />
          </div>
        </div>
      </div>
    </section>
  );
}
