import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { UserData } from "../../Globals";
import "./Login&Signup.scss";
import logo from "../../images/DineMeLogo-modified.png";
import { useSignal } from "@preact/signals-react";
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async function (data) {
    console.log("Data to send", data);
    const result = await m.mutateAsync(data);

    console.log("login", result.data);

    if (!result.data.success) {
      // alert("Invalid Email or Password");
      toast.error("Invalid Email or Password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    <div className="my-login-my-singup">
      <div className="sidenav ">
        <div className="login-main-text  d-flex justify-content-center align-items-center">
          <img
            src={logo}
            style={{
              transform: "scale(0.6)",
            }}
          />
        </div>
      </div>
      <div className="main">
        <div
          className="col-md-6 col-sm-12 "
          style={{
            //  marginLeft: 60,
            paddingBottom: 30,
          }}
        >
          <div className="login-form ">
            <div className="text-center">
              <h3>Login</h3>
              <p>Welcome back! Please sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Button
                variant="secondary"
                className="w-100 mb-3"
                onClick={() => {
                  window.location.href = "http://localhost:5001/auth/google";
                }}
              >
                Sign in with Google
              </Button>
              <div className="position-relative mt-4">
                <hr className="bg-200" />
                <div className="text-center font-weight-bold">Use Email</div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="dineMe@example.com"
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
              <div className="form-group" style={{ position: "relative" }}>
                <label>Password</label>
                <input
                  type={showPass.value ? "text" : "password"}
                  className="form-control"
                  placeholder="*****"
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
                <button
                  onClick={handlePass}
                  type="button"
                  style={{
                    border: "none",
                    background: "transparent",
                    position: "absolute",
                    top: 51,
                    right: 15,
                    transform: "translate(0, -50%)",
                  }}
                >
                  {showPass.value ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </button>
              </div>

              <div style={{ marginTop: "5px" }}>
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
                  Forgot password ?
                </Link>
              </div>
              <button type="submit" className="btn btn-black text-light mt-3">
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
