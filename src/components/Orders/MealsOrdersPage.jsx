import OrdersData from "./OrdersData.json";
import EmptyOrders from "./EmptyOrders";

const MealsOrdersPage = () => {
  return (
    <div className="container">
      <h2 className="text-center font-weight-bold my-4">Order Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Order Number</th>
              <th>Restaurant Name</th>
              <th>Meal Name</th>
              {/* <th>Order Data</th> */}
              <th>Meal Image</th>
              <th>Quantity</th>
              <th>Price</th>
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

export default MealsOrdersPage;
