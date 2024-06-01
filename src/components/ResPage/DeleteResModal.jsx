import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { toast } from "react-toastify";

function DeleteResModal({ resId, resName, openModal, closeModal }) {
  const queryClient = useQueryClient();
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/deleteresturant/${resId}`;
      console.log("posting to ", url);
      return await apiClient.delete(url, params);
    },
  });

  const onSubmit = async function () {
    const result = await m.mutateAsync();

    closeModal();
    queryClient.invalidateQueries({ queryKey: ["getAllresturant"] });

    if (!result?.data) {
      toast.error("Error in deleting restaurant", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Deleted Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

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
}

export default DeleteResModal;
