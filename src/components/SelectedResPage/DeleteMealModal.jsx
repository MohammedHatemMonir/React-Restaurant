import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { toast } from "react-toastify";

function DeleteMealModal({ mealId, mealName, openModal, closeModal }) {
  console.log("hemaMeal", mealId);
  const queryClient = useQueryClient();
  const m = useMutation({
    mutationKey: ["deleteMeal"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/deleteMeal/${mealId}`;
      console.log("posting to ", url);
      return await apiClient.delete(url, params);
    },
  });

  const onSubmit = async function () {
    const result = await m.mutateAsync();

    closeModal();
    queryClient.invalidateQueries({ mutationKey: ["deleteMeal"] });
    queryClient.refetchQueries(["deleteMeal"]);

    if (!result?.data) {
      toast.error("Error deleting meal", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Meal deleted successfully", {
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
          Delete Meal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>
          Are you sure you want to delete
          <span className="text-danger font-weight-bold"> {mealName} </span>
          Meal
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

export default DeleteMealModal;
