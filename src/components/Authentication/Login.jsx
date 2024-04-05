import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { UserData } from "../../Globals";
import "./Login.scss";
import logo from "../../images/DineMeLogo-modified.png";
import { useSignal } from "@preact/signals-react";
import { Button } from "reactstrap";

const Login = () => {
  const m = useMutation({
    mutationKey: [],
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/signin";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async function (data) {
    console.log("Data to send", data);
    const result = await m.mutateAsync(data);

    console.log("login", result.data);

    if (!result.data.success) {
      alert("Invalid Email or Password");
    } else {
      UserData.value = {
        name: result.data.name,
        email: result.data.email,
        role: result.data.role,
        id: result.data.id,
        userImg: result.data.userImg,
        loggedIn: result.data.loggedIn,
      };
      if (result.data.role === "ADMIN") {
        navigate("/tutorials");
      } else {
        navigate("/");
      }
    }
  };

  const showPass = useSignal(false);
  function handlePass() {
    showPass.value = !showPass.value;
  }
  return (
    <div className="my-login">
      <div className="sidenav">
        <div className="login-main-text  d-flex justify-content-center align-items-center">
          <img
            src={logo}
            style={{
              transform: "scale(0.6)",
            }}
          />
        </div>
      </div>
      <div className="main ">
        <div
          className="col-md-6 col-sm-12"
          style={{ marginLeft: 60, paddingBottom: 30 }}
        >
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Button
                variant="secondary"
                className="w-100 my-3"
                onClick={() => {
                  window.location.href = "http://localhost:5001/auth/google";
                }}
              >
                Sign in with Google
              </Button>
              <p className="text-center font-weight-bold my-2">OR</p>
              <h2>Login</h2> <br />
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors["email"] && (
                  <span className="text-danger">{errors["email"].message}</span>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type={showPass.value ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must have at least 5 characters",
                    },
                  })}
                />
                {errors["password"] && (
                  <span className="text-danger">
                    {errors["password"].message}
                  </span>
                )}
              </div>
              <div className="form-check mt-2 mb-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                  onChange={handlePass}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Show Password
                </label>
              </div>
              <section>
                <Link className="text-decoration-none" to="/forget">
                  Forgot Password
                </Link>
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
};

export default Login;

{
  /* <div style={{ marginTop: "10px" }}>
<Link
  to="/signup"
  style={{ textDecoration: "none", marginRight: "10px" }}
>
  SignUp
</Link>

<Link
  to="/forget"
  style={{ textDecoration: "none", marginRight: "10px" }}
>
  Forgot password?
</Link>
<Button variant="primary" type="submit">
  Login
</Button>
</div> */
}
