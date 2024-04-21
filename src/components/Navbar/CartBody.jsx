import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../../Globals";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import EmptyOrders from "./../Orders/EmptyOrdersPage";
import { toast } from "react-toastify";
import "./CartBody.scss";

export default function CartBody() {
  const navigate = useNavigate();

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
      style={{ transform: "scale(0.75)" }}
    >
      <div className="products-container">
        <h3 className="title">My Products</h3>
        <div className="box-container">
          {
            !m.isError &&
            !m.isLoading &&
              Cart.value.meals?.map((meal, index) => (
                <div className="box" key={index}>
                  <FaTimes className="fas fa-times" />
                  {console.log("meal data", meal)}
                  {/* // meal.mealImg || */}
                  <img src={meal.mealImg} alt="meal-img" />
                  <div className="content">
                    {/* meal.name || */}
                    <h3>{meal.name}</h3>
                    <span> quantity : </span>
                    {/* meal.quantity || */}
                    <input type="number" defaultValue={meal.quantity} />
                    <br />
                    <span> price : </span>
                    {/* meal.price || */}
                    <span className="price"> {meal.price} </span>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
      <div className="cart-total">
        <h3 className="title"> cart total </h3>
        <div className="box">
          <h3 className="subtotal">
            subtotal : <span>$200</span>
          </h3>
          <h3 className="total">
            total : <span>$200</span>
          </h3>
          <Link
            className="btn"
            onClick={() => {
              createOrder();
            }}
          >
            Buy
          </Link>
        </div>
      </div>
    </section>
  );
}
