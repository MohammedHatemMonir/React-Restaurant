import { Link } from "react-router-dom";

export default function ResetPass() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center" style={{ marginTop: "30vh" }}>
        <div className="col-md-6">
          <h2>Reset Your Password?</h2>
          <p>Enter your new password</p>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="email"
                placeholder="*******"
                required
              />
            </div>

            <button className="btn btn-primary btn-block" type="submit">
            Submit   <Link to="/"> </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
