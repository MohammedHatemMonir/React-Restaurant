import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useSignal } from "@preact/signals-react";

export default function ForgotPass() {
  const email = useSignal("");

  const handleChange = (e) => {
    email.value = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your email.js service ID
    const serviceID = "service_br4sfq8";
    // Your email.js template ID
    const templateID = "template_lt8ewd1";
    // Your email.js user ID
    const userID = "AAE4MZLVDGqWZN8gj";

    emailjs
      .send(serviceID, templateID, { to_email: email }, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully");
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Email sending failed");
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-center" style={{ marginTop: "30vh" }}>
        <div className="col-md-6">
          <h2>Forgot Your Password?</h2>
          <p>Enter your email below and we will send you a reset link</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Send
            </button>
          </form>
          <div className="mt-3">
            <Link style={{ textDecoration: "none" }}>
              Still having problems?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
