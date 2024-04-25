import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function HemaTest() {
  const clientId =
    "AfVlkPHMVLVRZjih6wQ8jQIzqfZJOmdV2MbLq96wWHR1GeQBeqbh8Lwl3ixqdGjGaSkc9o3Frmb0luKy";

  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "555",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
