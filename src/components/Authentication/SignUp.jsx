import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  InputGroup,
  FormControl,
  FormGroup,
  FormCheck,
} from "react-bootstrap";
import logo from "../../images/DineMeLogo-modified.png";
import "./Login&Signup.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Link } from "react-router-dom";
import { useSignal } from "@preact/signals-react";
export default function SignUp() {
  const {
    handleSubmit,
    register,
    watch,
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

  const googleMutation = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/google";
      console.log("posting to ", url);
      return await apiClient.get(url);
    },
  });
  const onSubmit = async function (data) {
    console.log("Form submitted", data);
    const result = await m.mutateAsync(data);

    if (!result.data.success) {
      alert(result.data?.msg);
    } else {
      alert(result.data?.msg);
      navigate("/login");
    }

    console.log("result", result?.data);
  };
  const showPass = useSignal(false);
  function handlePass() {
    showPass.value = !showPass.value;
  }
  return (
    <div className="my-login-my-singup">
      <div className="sidenav">
        <div className="login-main-text d-flex justify-content-center align-items-center">
          <img
            src={logo}
            style={{
              transform: "scale(0.6)",
            }}
          />
        </div>
      </div>
      <div className="main" style={{ width: "100%" }}>
        <Container>
          <Row>
            <Col xs={12} sm={10} md={8} lg={5} xl={5} xxl={4}>
              <div className="text-center login-form">
                <h3>Sign Up</h3>
                <p>Create your account today</p>
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
                <div className="text-center font-weight-bold">Use Email</div>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="mb-3">
                  <Form.Label>Name</Form.Label>
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
                  <Form.Label>Email address</Form.Label>
                  <FormControl
                    type="email"
                    placeholder="name@example.com"
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
                      <Form.Label>Password</Form.Label>
                      <FormControl
                        type="password"
                        placeholder="Password"
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
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup>
                      <Form.Label>Confirm Password</Form.Label>
                      <FormControl
                        type="password"
                        placeholder="Confirm Password"
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
                    </FormGroup>
                  </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Sign up
                </Button>

                <div className="text-center">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    className="fs--1 fw-bold"
                  >
                    Sign in to an existing account
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
