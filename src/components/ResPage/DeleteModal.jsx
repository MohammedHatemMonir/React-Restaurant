import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditModal({ openModal, closeModal ,resName}) {
  const MyVerticallyCenteredModal = () => (
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
          Delete Restaurant
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Are you sure you want to delete <span className="text-danger font-weight-bold">{resName}</span> restaurant</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit">Yes</Button>
        <Button onClick={closeModal}>No</Button>
      </Modal.Footer>
    </Modal>
  );

  return <MyVerticallyCenteredModal onHide={() => closeModal} />;
}

export default EditModal;
