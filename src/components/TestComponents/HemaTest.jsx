import React from "react";
import axios from "axios";
import { useSignal } from "@preact/signals-react";

function ForgetPasswordForm() {
  const email = useSignal("");

  console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/forget-password",
        {
          email: email,
        }
      );

      console.log("Password reset email sent successfully:", response.data);
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("('Error Sending Email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => (email.value = e.target.value)}
          required
        />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ForgetPasswordForm;
