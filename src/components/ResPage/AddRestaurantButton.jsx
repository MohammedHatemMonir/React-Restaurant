import { Form } from "react-bootstrap";
import AddIcon from "../../Icons/AddIcon";
import CustomModal from "../Prototypes/CustomModal";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signal, useSignal } from "@preact/signals-react";
import LeafletMap from "./../Map/LeafletMap";
import { Button } from "reactstrap";
import { convertBase64 } from "../../Globals";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";

export default function AddRestaurantButton() {
  const currentLocation = useSignal();
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const ShowSignal = useSignal();

  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {

      console.log("trying to load");
      let url = "/Addresturant";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  async function submit(data) {

    // console.log("submit! ADD RESTAURANT", data);
    const resImg64 =  await convertBase64(data.resImg[0]);
    const resBanner64 =  await convertBase64(data.resBanner[0]);
  

    data.resImg = resImg64;
    data.resBanner = resBanner64;

    console.log("NEW DATA", data)

    const ret = await m.mutateAsync(data);
    //Handle add restaurant logic herea
    
    if(ret){
    ShowSignal.value = false;
    reset();
    }
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
            <Col sm={12}>
              <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Search user</Form.Label>
                  <Form.Control
                    type="text"
                    name="search-user"
                    placeholder="Search User"
                    {...register("search-user", {
                      required: "Please enter user name to search",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["search-user"] && errors["search-user"].message}
                  </span>
                </Form.Group>
              </Col>
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
                    value={currentLocation.value}
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
                <Button
                  className={`${myBtn.value ? "bg-primary" : " bg-danger"}`}
                  onClick={handleBtnClick}
                >
                  {myBtn.value ? "Open Map" : "Close Map"}
                </Button>
              </Col>
              {showMap.value == true && (
                <Col sm={12}>
                  <div style={{ transition: "all", direction: "2s" }}>
                    <LeafletMap currentLocation={currentLocation} />
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
