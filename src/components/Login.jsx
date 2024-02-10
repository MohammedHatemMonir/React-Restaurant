import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useSignal } from "@preact/signals-react";

const Login = () => {
  const email = useSignal("");
  const password = useSignal("");
  const errors = useSignal({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    var validationErrors = {};

    // Simple email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      validationErrors.email = "Please enter a valid email address";
    }

    // Simple password validation
    if (!password.value || password.value.length < 7) {
      validationErrors.password = "Password must be at least 7 characters";
    }

    // If there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      errors.value = validationErrors;
    } else {
      validationErrors = {}; // Clear errors
      errors.value = validationErrors;
      // If no errors, proceed with SingUP logic
      console.log("Login SingUP goes here...");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form1">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            className="form-control"
            id="Email"
            placeholder="Enter Email"
            value={email.value}
            onChange={(e) => (email.value = e.target.value)}
            required
          />
          {errors.value.email && (
            <p style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>
              {errors.value.email}
            </p>
          )}
        </div>
        <div className="form1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password.value}
            onChange={(e) => (password.value = e.target.value)}
            required
          />
          {errors.value.password && (
            <p style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>
              {errors.value.password}
            </p>
          )}
        </div>
        <button type="submit" className="button">
          Login
        </button>
        <Link to="/ForgotPass" style={{ textDecoration: "none" }}>
          Forgot Password ?
        </Link>
      </form>
    </div>
  );
};

export default Login;
