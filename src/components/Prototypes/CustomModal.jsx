import { signal, useSignal } from "@preact/signals-react";

import { Button, Modal } from "react-bootstrap";

export default function CustomModal({
  children = <></>,
  Header = <></>,
  ButtonText = <></>,
  onCancel = () => {},
  submit = () => {},
  Show = useSignal(),
}) {
  // const Show = useSignal(false);

  return (
    <>
      <Button className="bg-primary" onClick={() => (Show.value = true)}>
        {ButtonText}
      </Button>

      <Modal
        show={Show.value}
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
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
