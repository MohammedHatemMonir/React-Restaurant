import EmptyOrders from "./EmptyOrdersPage";
import { useQueryClient, useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";

const AllOrdersPage = () => {
  const myOrders = useSignal([]);
  const queryClient = useQueryClient();
  let originalDate = "";
  let formattedDate = "";
  // Get All Orders
  const q = useQuery({
    queryKey: ["myOrders"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    queryFn: async () => {
      let url = `/getOrder`;
      const result = await apiClient.get(url);
      // console.log("hemaaaa", result);
      myOrders.value = result;
      queryClient.invalidateQueries({ queryKey: ["myOrders"] });
      queryClient.refetchQueries(["myOrders"]);
      return result;
    },
  });
  // console.log("query data", q.data?.data);
  if (q.isLoading) {
    return <>Loading...</>;
  }
  if (q.data?.data.message == "No orders found") {
    return <EmptyOrders />;
  }
  return (
    <div className="container">
      <h2 className="text-center font-weight-bold my-4">My Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th>Order Number</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {!q.isError &&
              !q.isLoading &&
              myOrders.value.data?.orders?.map((order, index) => {
                // Format the date for each order
                originalDate = moment(order.dateOrdered);
                formattedDate = originalDate.format("MMM D, YYYY");
                return (
                  <LinkContainer
                    to={`/mealdetails/${order._id}`}
                    key={order._id}
                    style={{ cursor: "pointer" }}
                  >
                    <tr className="text-center">
                      <td>{index + 1}</td>
                      <td>{order.totalPrice.toFixed(2)} $</td>
                      <td>{formattedDate}</td>
                      <td>{order.status}</td>
                      <td>PayPal</td>
                    </tr>
                  </LinkContainer>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrdersPage;
