import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import LeafletMap from "../Map/LeafletMap";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { convertBase64 } from "../../Globals";

function EditResModal({ openModal, closeModal, resName, resId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const currentLocation = useSignal();
  const showMap = useSignal(false);
  const showCategoryInput = useSignal(false);
  const myMapBtn = useSignal(true);
  const myCategoryBtn = useSignal(true);
  const newCategory = useSignal("");

  // Display or Hide Map
  function handleMap() {
    showMap.value = !showMap.value;
    myMapBtn.value = !myMapBtn.value;
  }
  // Display or Hide Categories Input
  function handleCategoryInput() {
    showCategoryInput.value = !showCategoryInput.value;
    myCategoryBtn.value = !myCategoryBtn.value;
  }
  function handleCategoriesChange(e) {
    newCategory.value = e.target.value;
    console.log("New Category", newCategory.value);
  }

  const addCategory = useMutation({
    mutationKey: ["addNewCategory"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/category";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const uploadCategory = async function () {
    const result = await addCategory.mutateAsync({
      Categoery: newCategory.value,
    });
    newCategory.value = "";
    showCategoryInput.value = false;
    // queryClient.invalidateQueries({ queryKey: ["addNewCategory"] });
  };
  // Edit restaurant in db
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
    console.log("new data", data);
    let ResImg;
    let ResBanner;

    if (data.ResImg[0]) ResImg = await convertBase64(data.resImg[0]);
    if (data.ResBanner[0]) ResBanner = await convertBase64(data.resBanner[0]);

    if (ResImg) data.ResImg = resImg64;
    if (ResBanner) data.ResBanner = resBanner64;
    const result = await m.mutateAsync(data);
    // console.log(result)
    // alert(result)
    closeModal();
    queryClient.invalidateQueries({ mutationKey: ["updateRestaurant"] });
    queryClient.refetchQueries(["updateRestaurant"]);
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
            <Col sm={12}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>Search user</Form.Label>
                <Form.Control
                  type="text"
                  name="search-user"
                  placeholder="Search User"
                  {...register("search-user", {
                    // required: "Please enter user name to search",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["search-user"] && errors["search-user"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Name</Form.Label>
                <Form.Control
                  type="text"
                  name="ResName"
                  defaultValue={resName}
                  placeholder="Restaurant Name"
                  {...register("ResName")}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["ResName"] && errors["ResName"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>New Category</Form.Label>
                <Form.Select
                  value={null}
                  {...register("Category", {
                    // required: "Please select a category",
                  })}
                >
                  <option disabled>Please Select ...</option>
                  <option value="American">American</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Desserts">Desserts</option>
                </Form.Select>
                <span className="error" style={{ color: "red" }}>
                  {errors["Category"] && errors["Category"].message}
                </span>
              </Form.Group>
            </Col>
            {/* category btn */}
            <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-end">
              <Button
                className={`${
                  myCategoryBtn.value
                    ? "bg-primary  w-100 mt-3"
                    : "bg-danger w-100 mt-3"
                }`}
                onClick={handleCategoryInput}
              >
                {myCategoryBtn.value ? "Add new category" : "Add new category"}
              </Button>
            </div>
            {showCategoryInput.value && (
              <Col sm={10} className="d-flex justify-content-center">
                <Form.Control
                  className="mt-3 mb-3 bg-warning"
                  type="text"
                  onChange={handleCategoriesChange}
                  value={newCategory.value}
                  placeholder="Add new category"
                />
              </Col>
            )}
            {showCategoryInput.value && (
              <div className="form-group col-sm-12 col-md-2 d-flex justify-content-center align-items-end">
                <Button className="w-100" onClick={uploadCategory}>
                  Submit
                </Button>
              </div>
            )}
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Image</Form.Label>
                <Form.Control
                  type="file"
                  name="ResImg"
                  placeholder="Restaurant Image"
                  {...register("ResImg", {
                    // required: "Please add new restaurant image",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["ResImg"] && errors["ResImg"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Banner</Form.Label>
                <Form.Control
                  type="file"
                  name="ResBanner"
                  placeholder="Meal description"
                  {...register("ResBanner", {
                    // required: "Please add new restaurant banner",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["ResBanner"] && errors["ResBanner"].message}
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
                className={`${
                  myMapBtn.value ? "bg-primary w-100" : " bg-danger w-100"
                }`}
                onClick={handleMap}
              >
                {myMapBtn.value ? "Open Map" : "Close Map"}
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

export default EditResModal;
