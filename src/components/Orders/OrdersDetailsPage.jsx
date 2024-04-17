import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrdersPage";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const MealsOrdersPage = () => {
  const allData = useSignal([]);
  const queryClient = useQueryClient();
  const { orderId } = useParams();
  // console.log("orderId", orderId); worked
  // Get Order Details
  const m1 = useMutation({
    mutationKey: ["orderDetails"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      // console.log("trying to load");
      let url = `/getOrderDetails/${orderId}`;
      // console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit1 = async function () {
    const result = await m1.mutateAsync();
    allData.value = result.data;
    // console.log(allOrders.value.data.orders);
    queryClient.invalidateQueries({ mutationKey: ["orderDetails"] });
    queryClient.refetchQueries(["orderDetails"]);
  };

  useEffect(() => {
    onSubmit1();
  }, []);



  
  return (
    <div className="container">
      <h2 className="text-center font-weight-bold my-4">Order Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th>Order Number</th>
              <th>Restaurant Name</th>
              <th>Meal Name</th>
              <th>Meal Image</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {m1.data && console.log(allData.value.ResName)} */}
{/* 
            {m1.status = "success" &&
              allData.value.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.ResName}</td>
                  <td>{order.MealName}</td>
                  <td>
                    <img
                      src={order.MealImg}
                      alt="Meal"
                      className="img-thumbnail"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </td>
                  <td>{order.Quantity}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                </tr>
              ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OrdersPage = () => {
  return <div>{OrdersData.length > 0 ? <OrdersTable /> : <EmptyOrders />}</div>;
};

export default MealsOrdersPage;
