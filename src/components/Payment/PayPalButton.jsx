import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ totalPrice, createOrder }) {
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
                  value: totalPrice,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            // alert(`Transaction completed by ${name}`);
            console.log("Transaction completed successfully");
            createOrder();
          });
        }}
        onError={(err) => {
          // Handle errors
          console.log(err);
          toast.error(err, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
