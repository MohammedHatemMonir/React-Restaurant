import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSignal } from "@preact/signals-react";
import { Spinner } from "react-bootstrap";
export default function PayPalButton({ totalPrice, createOrder }) {
  const loading = useSignal(true);
  const clientId =
    "AfVlkPHMVLVRZjih6wQ8jQIzqfZJOmdV2MbLq96wWHR1GeQBeqbh8Lwl3ixqdGjGaSkc9o3Frmb0luKy";

  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      {loading.value && (
        <div className="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
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
        onInit={() => (loading.value = false)}
      />
    </PayPalScriptProvider>
  );
}
