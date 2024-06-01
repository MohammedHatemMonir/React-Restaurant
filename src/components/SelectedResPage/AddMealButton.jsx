import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import CustomModal from "../Prototypes/CustomModal";
import AddIcon from "../../Icons/AddIcon";
import { useMutation, useQueryClient } from "react-query";
import { convertBase64 } from "../../Globals";
import { apiClient } from "../../Data/apiclient";
import { toast } from "react-toastify";

export default function AddMealButton({ Resid }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const ShowSignal = useSignal();
  const queryClient = useQueryClient();

  const m = useMutation({
    mutationKey: ["addNewMeal"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/Addmeal";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  async function submit(data) {
    console.log("submit!", data);

    data.Resid = Resid;
    data.MealImg = await convertBase64(data.MealImg[0]);

    const result = await m.mutateAsync(data);
    console.log("added meal", result);
    //Handle add meals logic here

    ShowSignal.value = false;
    queryClient.invalidateQueries({ mutationKey: ["addNewMeal"] });
    queryClient.refetchQueries(["addNewMeal"]);
    reset();
    // Toaster here
    if (!result?.data) {
      // alert(result.data?.msg);
      toast.error("Error in adding meal", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // alert(result.data?.msg);
      toast.success("Added Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
                    {...register("MealName", {
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
                    {...register("MealImg", {
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
                    {...register("Description", {
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
                    min="1"
                    name="mealPrice"
                    placeholder="Meal price"
                    {...register("Price", {
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
