import { Form } from "react-bootstrap";
import AddIcon from "../../Icons/AddIcon";
import CustomModal from "../Prototypes/CustomModal";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signal, useSignal } from "@preact/signals-react";
import LeafletMap from "./../Map/LeafletMap";

export default function AddRestaurantButton() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const ShowSignal = useSignal();

  function submit(data) {
    console.log("submit!");
    //Handle add restaurant logic here

    ShowSignal.value = false;
    reset();
  }
  const showMap = useSignal(false);
  const myBtn = useSignal(true);

  function handleBtnClick() {
    showMap.value = !showMap.value;
    myBtn.value = !myBtn.value;
  }
  return (
    <>
      <CustomModal
        ButtonText={<AddIcon />}
        Show={ShowSignal}
        Header={"Add new restaurant"}
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
                    name="ResName"
                    placeholder="Restaurant Name"
                    {...register("ResName", {
                      required: "Please add restaurant name",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["ResName"] && errors["ResName"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={null}
                    {...register("Category", {
                      required: "Please select a category",
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
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="resImg"
                    placeholder="Restaurant Image "
                    {...register("resImg", {
                      required: "Please add restaurant image",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["resImg"] && errors["resImg"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Banner</Form.Label>
                  <Form.Control
                    type="file"
                    name="resBanner"
                    placeholder="Restaurant Banner"
                    {...register("resBanner", {
                      required: "Please add restaurant banner",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["resBanner"] && errors["resBanner"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={8}>
                <Form.Group className="mb-2 mb-sm-0">
                  {/* <Form.Label>Location</Form.Label> */}
                  <Form.Control
                    type="text"
                    name="resLocation"
                    placeholder="Restaurant Location"
                    {...register("resLocation", {
                      required: "Please enter restaurant location",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["resLocation"] && errors["resLocation"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <input
                  type="button"
                  value={myBtn.value ? "Open Map" : "Close Map"}
                  // ${myBtn.value ? "bg-primary" : "bg-danger"}
                  className={`btn ${
                    myBtn.value ? "btn-primary" : " btn-danger"
                  }  text-light`}
                  onClick={handleBtnClick}
                  style={{ transition: "all", direction: "2s" }}
                />
              </Col>
              {showMap.value == true && (
                <Col sm={12}>
                  <div style={{ transition: "all", direction: "2s" }}>
                    <LeafletMap />
                  </div>
                </Col>
              )}
            </Row>
          </Form>
        </>
      </CustomModal>
    </>
  );
}
