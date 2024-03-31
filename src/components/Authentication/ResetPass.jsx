import { Link } from "react-router-dom";

export default function ResetPass() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="container text-center" style={{ marginTop: "30vh" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Reset Your Password?</h2>
          <p>Enter your new password</p>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="pass"
                placeholder="*******"
                required
              />
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={handleClick}
            >
              Submit
            </button>
            <div className="mt-3">
              <Link to="/" className="text-decoration-none">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
