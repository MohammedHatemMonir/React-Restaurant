import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import DineMeLogo from "../../images/DineMeLogo.png";
import DineMeLogoModified from "../../images/DineMeLogo-modified.png";
import "./Login&Signup.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Link } from "react-router-dom";
import { useSignal } from "@preact/signals-react";
import { toast } from "react-toastify";
import LeafletMap from "./../Map/LeafletMap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignUp() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/signup";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const onSubmit = async function (data) {
    // console.log("Form submitted", data);
    const result = await m.mutateAsync(data);

    if (!result.data.success) {
      // alert(result.data?.msg);
      toast.error("Error in adding email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // alert(result.data?.msg);
      toast.success("Added Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    }
    // console.log("result", result?.data);
  };

  const showPass = useSignal(false);
  const showConfirmPass = useSignal(false);
  function handlePass() {
    showPass.value = !showPass.value;
  }
  function handleConfirmPass() {
    showConfirmPass.value = !showConfirmPass.value;
  }
  const currentLocation = useSignal("");
  const showMap = useSignal(false);
  const myBtn = useSignal(true);

  function handleBtnClick() {
    showMap.value = !showMap.value;
    myBtn.value = !myBtn.value;
  }

  return (
    <div className="my-login-my-singup ">
      {/* Image here */}
      <div className="sidenav"></div>

      <div className="main" style={{ width: "100%" }}>
        <div>
          <Row style={{ overflow: "hidden" }}>
            <Col xs={12} sm={10} md={8} lg={5} xl={5} xxl={4}>
              <div className="text-center">
                <div>
                  <img
                    src={DineMeLogo}
                    alt="logo"
                    className="img-fluid mb-4"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <h3 className="font-weight-bold" style={{ color: "#ff4500" }}>
                  Welcome to Dine Me
                </h3>
                <p className="text-muted" style={{ color: "#795d9a" }}>
                  Welcome back! Please sign in to your account
                </p>
              </div>
              <Button
                variant="secondary"
                className="w-100 mb-3"
                onClick={() => {
                  window.location.href = "http://localhost:5001/auth/google";
                }}
              >
                Sign up with Google
              </Button>
              <div className="position-relative mt-4">
                <hr className="bg-200" />
                {/* <div className="text-center font-weight-bold">Use Email</div> */}
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="mb-3">
                  <Form.Label style={{ color: "#ff4500" }}>Name</Form.Label>
                  <FormControl
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be 3 or more characters",
                      },
                    })}
                  />
                  <span className="text-danger">
                    {errors["name"] && errors["name"].message}
                  </span>
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Label style={{ color: "#ff4500" }}>
                    Email address
                  </Form.Label>
                  <FormControl
                    type="email"
                    placeholder="dineMe@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <span className="text-danger  ">
                    {errors["email"] && errors["email"].message}
                  </span>
                </FormGroup>
                <Row className="g-3 mb-3">
                  <Col sm={6}>
                    <FormGroup>
                      <Form.Label style={{ color: "#ff4500" }}>
                        Password
                      </Form.Label>
                      <FormControl
                        type={showPass.value ? "text" : "password"}
                        placeholder="*******"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 5,
                            message: "Password must have at least 5 characters",
                          },
                        })}
                      />
                      <span className="text-danger  ">
                        {errors["password"] && errors["password"].message}
                      </span>
                      <button
                        onClick={handlePass}
                        type="button"
                        style={{
                          border: "none",
                          background: "transparent",
                          position: "absolute",
                          top: 51,
                          right: 20,
                          transform: "translate(0, -50%)",
                        }}
                      >
                        {showPass.value ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </button>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup>
                      <Form.Label style={{ color: "#ff4500" }}>
                        Confirm Password
                      </Form.Label>
                      <FormControl
                        type={showConfirmPass.value ? "text" : "password"}
                        placeholder="*******"
                        {...register("confirmPassword", {
                          required: "Confirm Password is required",
                          validate: (val) => {
                            if (watch("password") != val) {
                              return "Your passwords do no match";
                            }
                          },
                        })}
                      />
                      <span className="text-danger">
                        {errors["confirmPassword"] &&
                          errors["confirmPassword"].message}
                      </span>
                      <button
                        onClick={handleConfirmPass}
                        type="button"
                        style={{
                          border: "none",
                          background: "transparent",
                          position: "absolute",
                          top: 51,
                          right: 20,
                          transform: "translate(0, -50%)",
                        }}
                      >
                        {showConfirmPass.value ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </button>
                    </FormGroup>
                  </Col>

                  <div className="form-group col-md-5">
                    <label style={{ color: "#ff4500" }} htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      {...register("phoneNumber", {
                        required: "Phone is required",
                        minLength: {
                          value: 11,
                          message: "Phone number must have at least 11 digits",
                        },
                      })}
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="01*********"
                    />
                    {errors.phoneNumber && (
                      <span className="text-danger">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group col-md-5">
                    <label style={{ color: "#ff4500" }} htmlFor="location">
                      Location
                    </label>
                    <input
                      {...register("location", {
                        required: "Location is required",
                        minLength: {
                          value: 3,
                          message: "Location must have at least 3 characters",
                        },
                      })}
                      type="text"
                      className="form-control"
                      id="location"
                      defaultValue={currentLocation}
                      placeholder="Location"
                    />
                    {errors.location && (
                      <span className="text-danger">
                        {errors.location.message}
                      </span>
                    )}
                  </div>
                  <div
                    className="form-group col-sm-12 col-md-2 text-center"
                    style={{ marginTop: "50px" }}
                  >
                    <Button
                      className={`${
                        myBtn.value
                          ? "bg-primary btn-color"
                          : "bg-danger btn-color"
                      } w-100`}
                      onClick={handleBtnClick}
                    >
                      {/* {myBtn.value ? "Open Map" : "Close Map"} */} Map
                    </Button>
                  </div>
                  {showMap.value && (
                    <Col sm={12}>
                      <div>
                        <LeafletMap
                          currentLocation={currentLocation}
                          setValue={setValue}
                        />
                      </div>
                    </Col>
                  )}
                </Row>
                <button
                  variant="primary"
                  type="submit"
                  className="btn btn-color text-light mb-3 w-100 hover:text-dark"
                >
                  Sign up
                </button>

                <div className="text-center mb-3">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    className="font-weight-bold text-color"
                  >
                    Sign in to an existing account
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
