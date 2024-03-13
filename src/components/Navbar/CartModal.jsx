import { signal, useSignal } from "@preact/signals-react";
// import "./Modal.scss";
import React from "react";

import { Button, Modal } from "react-bootstrap";

export default function CartModal({
  children = <></>,
  Header = <></>,
  onCancel = () => {},
  submit = () => {},
  Show = useSignal(),
  show,
}) {
  // const Show = useSignal(false);

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          Show.value = false;
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
              submit();
            }}
          >
            Submit
          </Button>

          <Button
            variant="outline-primary"
            onClick={() => {
              onCancel();
              //   show = false;
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
