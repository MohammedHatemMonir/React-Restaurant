import { Form } from "react-bootstrap";
import AddIcon from "../../Icons/AddIcon";
import CustomModal from "../Prototypes/CustomModal";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";
import LeafletMap from "./../Map/LeafletMap";
import { Button } from "reactstrap";
import { convertBase64 } from "../../Globals";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import SearchUser from "./../SearchUser/SearchUser";
import { toast } from "react-toastify";

export default function AddRestaurantButton() {
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const queryClient = useQueryClient();
  const ShowSignal = useSignal();
  const currentLocation = useSignal();
  const showMap = useSignal(false);
  const showCategoryInput = useSignal(false);
  const myMapBtn = useSignal(true);
  const newCategory = useSignal("");
  const myCategoryBtn = useSignal(true);

  if (currentLocation.value) setValue("location", currentLocation.value);
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

  // Handle categories change
  function handleCategoriesChange(e) {
    newCategory.value = e.target.value;
    // console.log("New Category", newCategory.value);
  }

  const getCategoryiesQuery = useQuery({
    queryKey: ["getAllCategory"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    queryFn: async () => {
      let url = `/getAllCategory`;
      const result = await apiClient.get(url);
      // console.log("hemaaaa", result);
      return result;
    },
  });
  console.log("getAllCategory", getCategoryiesQuery.data?.data);

  // Add new category in db
  const addCategory = useMutation({
    mutationKey: ["addNewCategory"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/addCategory";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });
  console.log("addCategory", addCategory.data?.data);

  const uploadCategory = async function () {
    const result = await addCategory.mutateAsync({
      categoryName: newCategory.value,
    });
    newCategory.value = "";
    showCategoryInput.value = false;
    console.log("New Category", result.data);
    queryClient.invalidateQueries({ queryKey: ["getAllCategory"] });
    queryClient.refetchQueries({ queryKey: ["getAllCategory"] });
    getCategoryiesQuery.refetch();

    if (!result?.data) {
      toast.error("Error adding category", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Category added successfully", {
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

  // Add new restaurant in db
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
  console.log("add new res", m.data?.data);
  async function submit(data) {
    console.log("submit! ADD RESTAURANT", data);
    let resImg64;
    let resBanner64;
    data.location = currentLocation.value;
    if (data.resImg[0]) resImg64 = await convertBase64(data.resImg[0]);
    if (data.resBanner[0]) resBanner64 = await convertBase64(data.resBanner[0]);

    if (resImg64) data.resImg = resImg64;
    if (resBanner64) data.resBanner = resBanner64;

    console.log("NEW DATA", data);

    const ret = await m.mutateAsync(data);
    //Handle add restaurant logic herea

    // Toaster here
    if (ret) {
      ShowSignal.value = false;
      queryClient.invalidateQueries(["getAllresturant"]);
      queryClient.refetchQueries(["getAllresturant"]);
      reset();

      if (!ret?.data) {
        toast.error("Error adding restaurant", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Restaurant added Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  return (
    <>
      <CustomModal
        ButtonText={<AddIcon />}
        Show={ShowSignal}
        Header={"Add new restaurant"}
        submit={() => {
          !m.isLoading && handleSubmit(submit)();
        }}
        onCancel={() => {
          ShowSignal.value = false;
        }}
      >
        <>
          <Form>
            <Row>
              <SearchUser setValue={setValue} setError={setError} />
              <span className="error" style={{ color: "red" }}>
                {errors["ownerId"] && errors["ownerId"].message}
              </span>
              <Col sm={6}>
                <Form.Label>Name</Form.Label>
                <Form.Group className="mb-2 mb-sm-0">
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
              <Col sm={6} lg={3}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    // value={null}
                    {...register("category", {
                      required: "Please select a category",
                    })}
                  >
                    <option disabled>Please Select ...</option>
                    {ShowSignal.value &&
                      !getCategoryiesQuery.isLoading &&
                      getCategoryiesQuery.data?.data?.categories?.map(
                        (category, index) => (
                          <option
                            key={`${index}+${category._id}`}
                            value={category._id}
                          >
                            {category.category}
                          </option>
                        )
                      )}
                  </Form.Select>
                  <span className="error" style={{ color: "red" }}>
                    {errors["category"] && errors["category"].message}
                  </span>
                </Form.Group>
              </Col>
              <Col sm={12} lg={3}>
                <Form.Label>Add Category</Form.Label>
                <Button
                  className={`${
                    myCategoryBtn.value
                      ? "bg-primary  w-100"
                      : "bg-danger w-100"
                  }`}
                  onClick={handleCategoryInput}
                >
                  {myCategoryBtn.value
                    ? "Add new category"
                    : "Add new category"}
                </Button>
              </Col>
              {showCategoryInput.value && (
                <Col sm={12} lg={10} className="d-flex justify-content-center">
                  <Form.Control
                    className="mt-3 mb-3 bg-warning"
                    type="text"
                    placeholder="Add new category"
                    value={newCategory.value}
                    onChange={handleCategoriesChange}
                  />
                </Col>
              )}
              {showCategoryInput.value && (
                <div className="form-group col-sm-12 col-lg-2 d-flex justify-content-center align-items-end">
                  <Button className="w-100" onClick={uploadCategory}>
                    Submit
                  </Button>
                </div>
              )}
              <Col sm={6}>
                <Form.Group className="mb-2 mb-sm-0">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="resImg"
                    placeholder="Restaurant Image"
                    {...register("resImg", {
                      required: "Please add restaurant Image",
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
                      required: "Please add restaurant Banner",
                    })}
                  />
                  <span className="error" style={{ color: "red" }}>
                    {errors["resBanner"] && errors["resBanner"].message}
                  </span>
                </Form.Group>
              </Col>
              <label htmlFor="location">Location</label>
              <div className="form-group col-lg-10">
                <input
                  {...register("location", {
                    required: "Location is required",
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
                <span className="error" style={{ color: "red" }}>
                  {errors["location"] && errors["location"].message}
                </span>
              </div>
              {/* map btn */}
              <div className="col-sm-12 col-lg-2">
                <Button
                  className={`${
                    myMapBtn.value ? "bg-primary  w-100" : " bg-danger w-100"
                  }`}
                  onClick={handleMap}
                >
                  {myMapBtn.value ? "Open Map" : "Close Map"}
                </Button>
              </div>
              {showMap.value == true && (
                <Col sm={12}>
                  <div>
                    <LeafletMap
                      currentLocation={currentLocation}
                      setValue={setValue}
                    />
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
