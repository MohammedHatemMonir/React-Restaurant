import { useEffect } from "react";

export default function PayPalButton({ totalPrice }) {
  // console.log("mytotal ", totalPrice);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          // Set up the transaction details
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalPrice, // Change this to the amount you want to charge
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function (details) {
            // Handle successful payment
            console.log(details);
          });
        },
        onError: function (err) {
          // Handle errors
          console.error(err);
        },
      })
      .render("#paypal-button-container");
  }, [totalPrice]);

  return <div id="paypal-button-container" style={{ width: "100%" }}></div>;
}
