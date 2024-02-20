import { Link } from "react-router-dom";

export default function ForgotPass() {
  return (
    <div
      className="container text-center "
      style={{ maxWidth: "500px", minWidth: "200px", marginTop: "200px" }}
    >
      <h2>Forgot your Password?</h2>
      <p>Enter your email below and we will send you a reset link</p>
      <form>
        <div className="row justify-content-center mb-3">
          <div className="col-9">
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" type="submit">
              Send
            </button>
          </div>
        </div>
        <div>
          <Link
            href="https://www.google.com/?hl=ar"
            style={{ textDecoration: "none" }}
          >
            Still having problems ?
          </Link>
        </div>
      </form>
    </div>
  );
}
