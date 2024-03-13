import { Form } from "react-bootstrap"
import AddIcon from "../../Icons/AddIcon";
import CustomModal from "../Prototypes/CustomModal";
import { Col,Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signal, useSignal } from "@preact/signals-react";



export default function AddRestaurantButton(){

    const {
        handleSubmit,
        register,
        formState: { errors, isDirty },
        reset,
      } = useForm();

    const ShowSignal = useSignal();

      function submit(data){


        console.log("submit!")
        //Handle add restaurant logic here
        ShowSignal.value = false;
        reset();
      }
return(<>


        <CustomModal ButtonText={<AddIcon />} Show={ShowSignal} Header={"Add restaurant"} submit={() => {handleSubmit(submit)();}} onCancel={()=>{}} >

            <>
                <Form>
                    <Row>
                    <Col sm={6}>
                        <Form.Group className="mb-2 mb-sm-0">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" name="ResName" placeholder="Restaurant Name"  {...register("ResName", {required:"Please choose a restaurant name"})} />
                            <span className="error" style={{ color: "red" }}>
                                {errors["ResName"] && errors["ResName"].message}
                            </span>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={null}{...register("Category", {required: "Please select a category"})}>
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
                    </Row>
                </Form>
            </>
        </CustomModal>

</>)
}