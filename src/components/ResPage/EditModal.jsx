import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import LeafletMap from "./../Map/LeafletMap";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "./../../Data/apiclient";

function EditModal({ openModal, closeModal, resName, resId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const currentLocation = useSignal("");
  const showMap = useSignal(false);
  const myBtn = useSignal(true);

  function handleBtnClick() {
    showMap.value = !showMap.value;
    myBtn.value = !myBtn.value;
  }

  const m = useMutation({
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationKey: ["updateRestaurant"],
    mutationFn: async (params) => {
      let url = `/updateRestaurant/${resId}`;
      return await apiClient.put(url, params);
    },
  });

  const onSubmit = async (data) => {
    // console.log("new data", data); // this new data from registers in useForm hook
    const result = await m.mutateAsync(data);
    // console.log(result)
    // alert(result)
    closeModal();
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
          Edit Restaurant
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Name</Form.Label>
                <Form.Control
                  type="text"
                  name="resName"
                  defaultValue={resName}
                  placeholder="Restaurant Name"
                  {...register("resName")}
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
            <div className="form-group col-md-10">
              <label htmlFor="location">Location</label>
              <input
                {...register("location", {
                  minLength: {
                    value: 3,
                    message: "Location must have at least 3 characters",
                  },
                })}
                type="text"
                className="form-control"
                id="location"
                value={currentLocation}
                placeholder="Location"
              />
              {errors.location && (
                <span className="text-danger font-weight-bold">
                  {errors.location.message}
                </span>
              )}
            </div>

            <div className="form-group col-sm-12 col-md-2 d-flex justify-content-center align-items-end">
              <Button
                className={`${myBtn.value ? "bg-primary" : " bg-danger"}`}
                onClick={handleBtnClick}
              >
                {myBtn.value ? "Open Map" : "Close Map"}
              </Button>
            </div>
            {showMap.value && (
              <Col sm={12}>
                <div>
                  <LeafletMap currentLocation={currentLocation} />
                </div>
              </Col>
            )}
          </Row>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
