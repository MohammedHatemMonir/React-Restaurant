import { Form } from "react-bootstrap";

import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import CustomModal from "./../../Prototypes/CustomModal";
import AddIcon from "./../../../Icons/AddIcon";

export default function AddMealButton() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const ShowSignal = useSignal();

  function submit(data) {
    console.log("submit!", data);
    //Handle add meals logic here
    ShowSignal.value = false;
    reset();
  }
  return (
    <>
      <CustomModal
        ButtonText={<AddIcon />}
        mealPage={true}
        Show={ShowSignal}
        Header={"Add new meal"}
        submit={() => {
          handleSubmit(submit)();
        }}
        onCancel={() => {
          ShowSignal.value = false;
        }}
      >
        <>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="mealName"
                    placeholder="Meal Name"
                    {...register("mealName", {
                      required: "Please add meal name",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["mealName"] && errors["mealName"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="mealImg"
                    placeholder="Restaurant Name"
                    {...register("mealImg", {
                      required: "Please add meal image",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["mealImg"] && errors["mealImg"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="mealDesc"
                    placeholder="Meal description"
                    {...register("mealDesc", {
                      required: "Please add meal description",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["mealDesc"] && errors["mealDesc"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="mealPrice"
                    placeholder="Meal price"
                    {...register("mealPrice", {
                      required: "Please enter meal price",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["mealPrice"] && errors["mealPrice"].message}
                  </span>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </>
      </CustomModal>
    </>
  );
}
