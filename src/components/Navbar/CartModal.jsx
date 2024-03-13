import "../Prototypes/Modal.scss";
import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function CartModal({
  children = <></>,
  Header = <></>,
  onCancel,
  // submit = () => {},
  display,
}) {
  // const Show = useSignal(false);

  return (
    <>
      <Modal
        show={display}
        onHide={() => {
          onCancel();
          console.log("Hide triggered");
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{Header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </Button>

          <Button variant="outline-primary" onClick={onCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
