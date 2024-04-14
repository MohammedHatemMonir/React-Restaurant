import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import LeafletMap from "../Map/LeafletMap";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { convertBase64 } from "../../Globals";

function EditMealModal({ openModal, closeModal, mealName, mealId }) {
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
      let url = `/updateRestaurant/${mealId}`;
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
          Edit Meal
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
                  name="MealName"
                  defaultValue={mealName}
                  placeholder="Meal Name"
                  {...register("MealName", {
                    // required: "Please add new meal name",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["MealName"] && errors["MealName"].message}
                </span>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>New Image</Form.Label>
                <Form.Control
                  type="file"
                  name="Meal Image"
                  placeholder="Restaurant Image"
                  {...register("MealImg", {
                    // required: "Please add new meal image",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["MealImg"] && errors["MealImg"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  placeholder="Meal description"
                  {...register("Description", {
                    // required: "Please add meal description",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["Description"] && errors["Description"].message}
                </span>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-2 mb-sm-0">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="Price"
                  placeholder="Meal Price"
                  {...register("Price", {
                    // required: "Please enter meal price",
                  })}
                />
                <span className="error" style={{ color: "red" }}>
                  {errors["Price"] && errors["Price"].message}
                </span>
              </Form.Group>
            </Col>
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

export default EditMealModal;
