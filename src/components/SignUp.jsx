import React, { useState } from "react";
import { useSignal } from "@preact/signals-react";
import { Link } from "react-router-dom";
export default function SignUp() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPass, setconfirmPass] = useState("");
  //   const [errors, setErrors] = useState({});

  const name = useSignal("");
  const email = useSignal("");
  const password = useSignal("");
  const confirmPass = useSignal("");
  const errors = useSignal({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Simple User Name validation
    if (!name.value || name.value.length < 5) {
      validationErrors.name = "User Name must be at least 5 characters";
    }

    // Simple email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    // Simple password validation
    if (!password.value || password.value.length < 7) {
      validationErrors.password = "Password must be at least 7 characters";
    }

    // Simple Confirm Password validation
    if (confirmPass.value != password.value) {
      validationErrors.confirmPass = "Passwords do not match";
    }
    // If there are validation errors, set them in state
    if (Object.keys(validationErrors).length > 0) {
      errors.value = validationErrors;
    } else {
      validationErrors = {}; // Clear errors
      errors.value = validationErrors;
      // If no errors, proceed with SingUP logic
      console.log("Login SingUP goes here...");
    }
    // required
  };
  return (
    <>
      <div
        className="row justify-content-center"
        style={{ marginLeft: 0, marginRight: 0 }}
      >
        <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
          <a className="d-flex flex-center text-decoration-none mb-4">
            <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
              <img src="../../Icons/hxh.jpg" alt="phoenix" width="58" />
            </div>
          </a>
          <div className="text-center mb-7">
            <h3 className="text-1000">Sign Up</h3>
            <p className="text-700">Create your account today</p>
          </div>
          <button className="btn btn-phoenix-secondary w-100 mb-3">
            <svg
              className="svg-inline--fa fa-google text-danger me-2 fs--1"
              ariaHidden="true"
              focusable="false"
              dataPrefix="fab"
              dataIcon="google"
              role="img"
              width={17}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            {/* Add your Sign up logic or link here */}
            Sign up with Google
          </button>

          <button className="btn btn-phoenix-secondary w-100">
            <svg
              className="svg-inline--fa fa-facebook text-primary me-2 fs--1"
              ariaHidden="true"
              focusable="false"
              dataPrefix="fab"
              dataIcon="facebook"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={17}
            >
              <path
                fill="currentColor"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
              ></path>
            </svg>
            {/* Add your Sign up logic or link here */}
            Sign up with Facebook
          </button>
          <div className="position-relative mt-4">
            <hr className="bg-200" />
            <div className="divider-content-center  text-center">
              OR Use Email
            </div>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-3 text-start">
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Name"
                required
                value={name.value}
                onChange={(e) => (name.value = e.target.value)}
              />
              {errors.value.name && (
                <p
                  style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}
                >
                  {errors.value.name}
                </p>
              )}
            </div>
            <div className="mb-3 text-start">
              <label className="form-label" for="email">
                Email address
              </label>
              <input
                className="form-control"
                id="email"
                type="text"
                placeholder="name@example.com"
                required
                value={email.value}
                onChange={(e) => (email.value = e.target.value)}
              />
              {errors.value.email && (
                <p
                  style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}
                >
                  {errors.value.email}
                </p>
              )}
            </div>
            <div className="row g-3 mb-3">
              <div className="col-sm-6">
                <label className="form-label" for="password">
                  Password
                </label>
                <input
                  class="form-control form-icon-input"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password.value}
                  onChange={(e) => (password.value = e.target.value)}
                />
                {errors.value.password && (
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {errors.value.password}
                  </p>
                )}
              </div>
              <div className="col-sm-6">
                <label className="form-label" for="confirmPassword">
                  Confirm Password
                </label>
                <input
                  class="form-control form-icon-input"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPass.value}
                  onChange={(e) => (confirmPass.value = e.target.value)}
                />
                {errors.value.confirmPass && (
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {errors.value.confirmPass}
                  </p>
                )}
              </div>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                id="termsService"
                type="checkbox"
                required
              />
              <label class="form-label fs--1 text-none" for="termsService">
                I accept the{" "}
                <a
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  href="#!"
                >
                  terms{" "}
                </a>
                and{" "}
                <a
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  href="#!"
                >
                  privacy policy
                </a>
              </label>
            </div>
            <button className="btn btn-primary w-100 mb-3">Sign up</button>
            <div className="text-center">
              <Link to="/Login"
                style={{ textDecoration: "none", cursor: "pointer" }}
                className="fs--1 fw-bold"
              >
                Sign in to an existing account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
