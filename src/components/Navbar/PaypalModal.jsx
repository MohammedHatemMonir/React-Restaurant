import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PayPalButton from "../Payment/PayPalButton";

function PaypalModal({ openModal, closeModal, totalPrice, createOrder }) {
  return (
    <Modal
      show={openModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="font-weight-bold"
        >
          Payment Gateway
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center mb-4">
          Please Choose Your
          <span className="text-danger font-weight-bold"> Payment </span>
          Method
        </h3>
        <PayPalButton
          totalPrice={totalPrice}
          createOrder={() => {
            createOrder();
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaypalModal;
