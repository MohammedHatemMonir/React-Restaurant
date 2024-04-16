import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrders";
import { useQueryClient, useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";

const AllOrdersPage = () => {
  const allOrders = useSignal([]);
  const queryClient = useQueryClient();
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
    console.log(allOrders.value.data.orders);
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
            {console.log(allOrders.value.data?.orders)}
            {/* {allOrders.value.data.orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>{order.productName}</td>
                <td>{order.orderStatus}</td>
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

export default AllOrdersPage;
