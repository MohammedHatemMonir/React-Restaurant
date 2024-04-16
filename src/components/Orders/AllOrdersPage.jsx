import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrders";
import { useQueryClient, useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";

const AllOrdersPage = () => {
  const allOrders = useSignal([]);
  const queryClient = useQueryClient();

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays === 1) {
      return '1 day ago';
    } else {
      return `${diffDays} days ago`;
    }
  }
  
  const dateStr = "2024-04-16T09:56:06.936Z";
  console.log(timeAgo(dateStr)); // Output: e.g., "1 day ago", "2 days ago", etc.
  




  // Get All Orders
  const m1 = useMutation({
    mutationKey: ["allOrders"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      // console.log("trying to load");
      let url = `/getOrder`;
      // console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit1 = async function () {
    const result = await m1.mutateAsync();
    allOrders.value = result;
    // console.log(allOrders.value.data.orders);
    queryClient.invalidateQueries({ mutationKey: ["allOrders"] });
    queryClient.refetchQueries(["allOrders"]);
  };



  useEffect(() => {
    onSubmit1();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center font-weight-bold my-4">All Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Order Number</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.value.data?.orders &&
              allOrders.value.data.orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>{order.dateOrdered}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OrdersPage = () => {
  return <div>{OrdersData.length > 0 ? <OrdersTable /> : <EmptyOrders />}</div>;
};

export default AllOrdersPage;
