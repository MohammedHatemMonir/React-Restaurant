import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrders";
import { useQueryClient, useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";

const AllOrdersPage = () => {
  const allOrders = useSignal([]);
  const queryClient = useQueryClient();

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

  // Convert date to 1 day ago etc...
  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 1 && diffDays <= 9) {
      return `${diffDays} day ago`;
    } else {
      return `${diffDays} days ago`;
    }
  }

  useEffect(() => {
    onSubmit1();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center font-weight-bold my-4">All Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th>Order Number</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.value.data?.orders &&
              allOrders.value.data.orders.map((order, index) => (
                <tr key={order._id} className=" text-center">
                  <td>{index + 1}</td>
                  <td>{order.totalPrice.toFixed(2)} $</td>
                  <td>{timeAgo(order.dateOrdered)}</td>
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
