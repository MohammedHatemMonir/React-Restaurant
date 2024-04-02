import "./HemaTest.scss";
import logo from "../../images/DineMeLogo-modified.png";
export default function HemaTest() {
  return (
    <div className="my-login">
      <div className="sidenav">
        <div className="login-main-text  d-flex justify-content-center align-items-center">
          <img
            src={logo}
            style={{
              // display: "block",
              // margin: "-30px auto",
              transform: "scale(0.6)",
              // marginRight:"-20px"
            }}
          />
        </div>
      </div>
      <div className="main ">
        <div
          className="col-md-6 col-sm-12"
          style={{ marginLeft: 60, paddingBottom: 30 }}
        >
          <br />
          <h2>Login Form</h2>
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-check mt-2 mb-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                />
                <label className="form-check-label " htmlFor="inlineCheckbox1">
                  Remember Me
                </label>
              </div>
              <section>
                <a href="#" style={{ textDecoration: "none" }}>
                  Forgot Password
                </a>
              </section>
              <button type="submit" className="btn btn-black mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
