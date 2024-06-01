import "./PinCodeAuth.scss";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const PinCodeAuth = () => {
  const [pins, setPins] = useState(Array(6).fill(""));
  const [message, setMessage] = useState("");

  const handleChange = (index, value) => {
    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    // Focus the next input
    if (value && index < 5) {
      document.getElementById(`pin-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPin = pins.join("");
    if (enteredPin === "123456") {
      setMessage("PIN code is correct!");
    } else {
      setMessage("Invalid PIN code.");
    }
  };

  return (
    <div className="pin-auth-container" style={{ marginTop: "25vh" }}>
      <h2 className="text-center">Enter PIN Code</h2>
      <Form onSubmit={handleSubmit} className="pin-form">
        <FormGroup className="pin-inputs">
          {pins.map((pin, index) => (
            <Input
              key={index}
              id={`pin-${index}`}
              type="text"
              value={pin}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength="1"
              className="pin-input"
            />
          ))}
        </FormGroup>
        <Button type="submit" className="btn-orange btn-block">
          Submit
        </Button>
      </Form>
      {message && <p className="text-center message">{message}</p>}
    </div>
  );
};

export default PinCodeAuth;
