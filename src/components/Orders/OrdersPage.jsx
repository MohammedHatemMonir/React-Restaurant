const OrdersTable = ({ orders }) => {
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
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.productName}</td>
                <td><img src={order.mealImage} alt="Meal" className="img-thumbnail" style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
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
}

// Example orders data
const orders = [
  {
    id: 1,
    customerName: 'John Doe',
    productName: 'Product A',
    mealImage: 'url_to_your_image1.jpg',
    quantity: 2,
    totalPrice: 25.99,
    orderStatus: 'In Progress'
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    productName: 'Product B',
    mealImage: 'url_to_your_image2.jpg',
    quantity: 1,
    totalPrice: 15.49,
    orderStatus: 'Delivered'
  },
  {
    id: 3,
    customerName: 'Michael Johnson',
    productName: 'Product C',
    mealImage: 'url_to_your_image3.jpg',
    quantity: 3,
    totalPrice: 35.75,
    orderStatus: 'Pending'
  }
];

const OrdersPage = () => {
  return (
    <div>
      <OrdersTable orders={orders} />
    </div>
  );
}

export default OrdersPage;
