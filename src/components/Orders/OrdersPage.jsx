import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrders";

const OrdersTable = () => {
  return (
    <div className="container">
      <h2 className="text-center font-weight-bold my-4">Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Meal Image</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {OrdersData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.productName}</td>
                <td>
                  <img
                    src={order.mealImage}
                    alt="Meal"
                    className="img-thumbnail"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </td>
                <td>{order.quantity}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>{order.orderStatus}</td>
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

export default OrdersPage;
