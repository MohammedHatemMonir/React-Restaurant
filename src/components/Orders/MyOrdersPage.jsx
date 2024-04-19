import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrdersPage";
import { useQueryClient, useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { LinkContainer } from "react-router-bootstrap";

const AllOrdersPage = () => {
  const myOrders = useSignal([]);
  const queryClient = useQueryClient();

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

  // Convert date to 1 day ago etc...
  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    // Set both dates to the start of the day (midnight)
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const startOfDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffTime = Math.abs(startOfToday - startOfDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Ordered Today";
    } else if (diffDays >= 1 && diffDays <= 9) {
      return `${diffDays} day ago`;
    } else {
      return `${diffDays} days ago`;
    }
  }

  if (q.data?.data.message == "No orders found") {
    return <EmptyOrders />;
  } else
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
              </tr>
            </thead>
            <tbody>
              {myOrders.value.data?.orders &&
                myOrders.value.data.orders.map((order, index) => (
                  <LinkContainer
                    to={`/mealdetails/${order._id}`}
                    key={order._id}
                    style={{ cursor: "pointer" }}
                  >
                    <tr style={{ cursor: "pointer" }}>
                      <td>{index + 1}</td>
                      <td>{order.totalPrice.toFixed(2)} $</td>
                      <td>{timeAgo(order.dateOrdered)}</td>
                      <td>{order.status}</td>
                    </tr>
                  </LinkContainer>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

// const OrdersPage = () => {
//   return <div>{OrdersData.length > 0 ? <OrdersTable /> : <EmptyOrders />}</div>;
// };

export default AllOrdersPage;
