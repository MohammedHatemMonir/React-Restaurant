import "./PinCodeAuth.scss";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useNavigate, useParams } from "react-router-dom";
import { useSignal } from "@preact/signals-react";

import { Link } from "react-router-dom";
const PinCodeAuth = () => {
  const msg = useSignal();
  const navigate = useNavigate();
  const { email, phoneNumber } = useParams();

  const m = useMutation({
    mutationKey: ["reset-password-pinCode"],
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/reset-password-sms";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const pins = useSignal(Array(6).fill(""));
  const message = useSignal("");

  const handleChange = (index, value) => {
    const newPins = [...pins.value];
    newPins[index] = value;
    pins.value = newPins;

    // Focus the next input
    if (value && index < 5) {
      document.getElementById(`pin-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredPin = pins.value.join("");

    const result = await m.mutateAsync({
      resetCode: enteredPin,
      email: email,
      phoneNumber: phoneNumber,
    });
    pins.value = Array(6).fill("");
    console.log("reset-password-sms", result.data?.data);
    if (result.data?.success) {
      message.value = "PIN code is correct!";
      navigate("/resetAfterCode");
    } else {
      message.value = "Invalid PIN code.";
    }
  };

  console.log("My Code", pins.value.join(""));

  return (
    <>
      <div className="pin-auth-container" style={{ marginTop: "25vh" }}>
        <h2 className="text-center">Enter PIN Code</h2>

        <Form onSubmit={handleSubmit} className="pin-form">
          <FormGroup className="pin-inputs">
            {pins.value.map((pin, index) => (
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
        <div className="mt-3 d-flex justify-content-center">
          <Link
            to="/"
            className="text-decoration-none r font-weight-bold"
            style={{ color: "#795d9a" }}
          >
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default PinCodeAuth;
