import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeliveryModal({ openModal, closeModal, createOrder }) {
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
          Cash On Delivery
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>
          Are you sure you want to
          <span className="text-danger font-weight-bold">
           
            cash on delivery
          </span>
          restaurant
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={createOrder()}>
          Yes
        </Button>
        <Button onClick={closeModal}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}
