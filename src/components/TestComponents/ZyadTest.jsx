import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function ForgotPass() {
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_br4sfq8", "template_mhi7szm", form.current, {
        publicKey: "AAE4MZLVDGqWZN8gj",
      })
      .then((result) => {
        console.log(result.text);
        setShowAlert(true); // Show success alert
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle error (show error message, etc.)
      });
  };

  return (
    <div
      className="container text-center "
      style={{ maxWidth: "500px", minWidth: "200px", marginTop: "200px" }}
    >
      <h2>Forgot your Password?</h2>
      <p>Enter your email below and we will send you a reset link</p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="row justify-content-center mb-3">
          <div className="col-9">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email" // Added name attribute for email input
              placeholder="Enter Your Email"
              required // Added required attribute for email input
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" type="submit">
              Send
            </button>
          </div>
        </div>
        {showAlert && (
          <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Password reset instructions sent successfully!
          </Alert>
        )}
      </form>
      <div>
        <Link to="https://www.google.com/?hl=ar" style={{ textDecoration: "none" }}>
          Still having problems ?
        </Link>
      </div>
    </div>
  );
}
