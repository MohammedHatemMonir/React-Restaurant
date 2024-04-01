import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMutation } from "react-query";
import { apiClient } from "./../../Data/apiclient";

function EditModal({ resId, resName, openModal, closeModal }) {
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/deleteresturant/${resId}`;
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const onSubmit = async function (data) {
    const result = await m.mutateAsync({ ResName: data.ResName });
    alert(result.data.msg);
  };

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
        <h3>
          Are you sure you want to delete
          <span className="text-danger font-weight-bold"> {resName} </span>
          restaurant
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={onSubmit}>
          Yes
        </Button>
        <Button onClick={closeModal}>No</Button>
      </Modal.Footer>
    </Modal>
  );

  return <MyVerticallyCenteredModal onHide={() => closeModal} />;
}

export default EditModal;
