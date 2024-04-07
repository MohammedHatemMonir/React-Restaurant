import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import LeafletMap from "./../Map/LeafletMap";
import { useMutation } from "react-query";
import { apiClient } from "./../../Data/apiclient";

function EditModal({ openModal, closeModal, resName, resId }) {
  const {
    register,
    formState: { errors },
  } = useForm();
  const currentLocation = useSignal();
  const showMap = useSignal(false);
  const myBtn = useSignal(true);

  function handleBtnClick() {
    showMap.value = !showMap.value;
    myBtn.value = !myBtn.value;
  }

  const m = useMutation({
    mutationKey: ["updateRestaurant"],
    mutationFn: async (params) => {
      try {
        const { resId, data } = params;
        const url = `/updateRestaurant/${resId}`;
        const response = await apiClient.put(url, data);
        return response.data;
      } catch (error) {
        console.error("Error updating restaurant:", error);
        throw new Error("Failed to update restaurant."); // Throw a generic error message
      }
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      alert(data.msg); // For example, showing a message from the response
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
      alert("Failed to update restaurant.");
    },
  });
  async function onSubmit(data) {
    try {
      data.location = currentLocation.value;
      if (data.resImg) data.resImg = await convertBase64(data.resImg);
      if (data.resBanner) data.resBanner = await convertBase64(data.resBanner);

      console.log("NEW DATA", data);

      const ret = await m.mutateAsync({ resId: data.resId, data });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit restaurant data.");
    }
  }

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
          Edit Restaurant
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Name</Form.Label>
                <Form.Control
                  type="text"
                  s
                  name="resName"
                  defaultValue={resName}
                  placeholder="Restaurant Name"
                  {...register("resName", {
                    // required: "Please add new restaurant name",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["resName"] && errors["resName"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>New Category</Form.Label>
                <Form.Select
                  value={null}
                  {...register("Category", {
                    // required: "Please select a category",
                  })}
                >
                  <option value="">Please Select ...</option>
                  <option value="American">American</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Desserts">Desserts</option>
                </Form.Select>
                <span className="error" style={{ color: "red" }}>
                  {errors["Category"] && errors["Category"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Image</Form.Label>
                <Form.Control
                  type="file"
                  name="resImg"
                  placeholder="Restaurant Image"
                  {...register("resImg", {
                    // required: "Please add new restaurant image",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["resImg"] && errors["resImg"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Banner</Form.Label>
                <Form.Control
                  type="file"
                  name="resBanner"
                  placeholder="Meal description"
                  {...register("resBanner", {
                    // required: "Please add new restaurant banner",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["resBanner"] && errors["resBanner"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={10}>
              <Form.Group className="mb-2 my-sm-3">
                <Form.Control
                  type="text"
                  name="resLocation"
                  placeholder="Restaurant Location"
                  value={currentLocation.value}
                  {...register("resLocation", {
                    // required: "Please enter restaurant location",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["resLocation"] && errors["resLocation"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button
                className={`${
                  myBtn.value
                    ? "bg-primary my-sm-3 text-end"
                    : " bg-danger my-sm-3 text-end"
                }`}
                onClick={handleBtnClick}
              >
                {myBtn.value ? "Open Map" : "Close Map"}
              </Button>
            </Col>
            {showMap.value == true && (
              <Col sm={12}>
                <div>
                  <LeafletMap currentLocation={currentLocation} />
                </div>
              </Col>
            )}
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  return <MyVerticallyCenteredModal onHide={() => closeModal} />;
}

export default EditModal;
