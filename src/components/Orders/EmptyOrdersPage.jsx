import { Link } from "react-router-dom";

export default function EmptyOrders() {
  return (
    <div className="my-orders-page container">
      <div className="text-center" style={{ marginTop: "100px" }}>
        <h1 className="font-weight-bold ">My Orders</h1>
        <img
          src="https://elmenus.com/public/img/svg-icons/no-orders.svg"
          alt="no-orders-img"
          className="mt-4"
        />
        <h3 className="font-weight-bold mt-3">
          You're missing out! You haven't placed any orders yet
        </h3>
        <h6 className="mt-3">
          Discover the best dishes around you and place your first order now
        </h6>
        <Link to="/" className="btn btn-primary mt-3">
          I want to discover and order now
        </Link>
      </div>
    </div>
  );
}
