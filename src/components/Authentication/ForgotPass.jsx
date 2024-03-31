import { Link } from "react-router-dom";

export default function ForgotPass() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="container text-center">
      <div className="row justify-content-center" style={{ marginTop: "30vh" }}>
        <div className="col-md-6">
          <h2>Forgot Your Password?</h2>
          <p>Enter your email below and we will send you a reset link</p>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={handleClick}
            >
              Send
            </button>
          </form>
          <div className="mt-3">
            <Link
              // to="/"
              style={{ textDecoration: "none" }}
            >
              Still having problems?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
