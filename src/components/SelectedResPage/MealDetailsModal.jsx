import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MealDetailsModal({ showModal, closeModal }) {



  const MyVerticallyCenteredModal = () => (
    <Modal
      show={showModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <MyVerticallyCenteredModal onHide={() => closeModal} />
    </>
  );
}

export default MealDetailsModal;
