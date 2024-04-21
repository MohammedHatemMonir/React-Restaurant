import "./Edit.scss";
import { useForm } from "react-hook-form";
import { UserData } from "../../Globals";
import { useSignal } from "@preact/signals-react";
import { Button, Col } from "reactstrap";
import LeafletMap from "./../Map/LeafletMap";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
const EditProfile = () => {
  const queryClient = useQueryClient();
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
    mutationKey: ["editProfile"],
    mutationFn: async (params) => {
      let url = "/editProfile";
      return await apiClient.put(url, params);
    },
  });

  const onSubmit = async (data) => {
    console.log("new data", data); // this new data from registers in useForm hook
    const result = await m.mutateAsync(data);
    console.log("data added", result);

    queryClient.invalidateQueries({ mutationKey: ["editProfile"] });
    queryClient.refetchQueries(["editProfile"]);
    reset();
    // let ResImg;
    // let ResBanner;

    // if (data.ResImg[0]) ResImg = await convertBase64(data.resImg[0]);
    // if (data.ResBanner[0]) ResBanner = await convertBase64(data.resBanner[0]);

    // if (ResImg) data.ResImg = resImg64;
    // if (ResBanner) data.ResBanner = resBanner64;

    // console.log(result)
    // alert(result)
  };
  // const onSubmit = () => {};

  return (
    <div className="edit-profile">
      <div className="container form__wrapper">
        <h2>Edit Your Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} id="myForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Name</label>
              <input
                {...register("name", {
                  // { required: "Name is required" }
                  minLength: {
                    value: 3,
                    message: "Name must have at least 3 characters",
                  },
                })}
                type="text"
                className="form-control"
                defaultValue={UserData.value.name}
                // required
                id="firstName"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </div>
            {/* <div className="form-group col-md-6">
              <label htmlFor="my-img">Profile Image</label>
              <input
                {...register("userImg", {
                  // required: "Profile image is required",
                })}
                type="file"
                // required
                className="form-control"
                id="my-img"
              />
              {errors.userImg && (
                <span className="text-danger ">{errors.userImg.message}</span>
              )}
            </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                // required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              // required
              defaultValue={UserData.value.email}
              className="form-control"
              id="email"
              placeholder="dineMe@example.com"
            />
            {errors.email && (
              <span className="text-danger ">{errors.email.message}</span>
            )}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="old-pass">Old Password</label>
              <input
                {...register("oldPass", {
                  // required: "Old password is required",
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                })}
                type="password"
                defaultValue={UserData.value.password}
                // required
                className="form-control"
                id="old-pass"
                placeholder="*******"
              />
              {errors.oldPass && (
                <span className="text-danger ">{errors.oldPass.message}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="new-pass">New Password</label>
              <input
                {...register("password", {
                  // required: "New password is required",
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                })}
                type="password"
                className="form-control"
                id="new-pass"
                // required
                placeholder="*******"
              />
              {errors.password && (
                <span className="text-danger ">{errors.password.message}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-5">
              <label htmlFor="phone">Phone Number</label>
              <input
                {...register("phoneNumber", {
                  minLength: {
                    value: 11,
                    message: "Phone must have at least 11 digits",
                  },
                })}
                type="tel"
                className="form-control"
                id="phone"
                placeholder="01*********"
              />
              {errors.phoneNumber && (
                <span className="text-danger ">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            <div className="form-group col-md-5">
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
                <span className="text-danger ">{errors.location.message}</span>
              )}
            </div>
            <div
              className="form-group col-sm-12 col-md-2 text-center"
              style={{ marginTop: "30px" }}
            >
              <Button
                className={`${myBtn.value ? "bg-primary" : "bg-danger"} w-100`}
                onClick={handleBtnClick}
              >
                {myBtn.value ? "Open Map" : "Close Map"}
              </Button>
            </div>
            {showMap.value && (
              <div className="form-group col-md-12">
                <div>
                  <LeafletMap currentLocation={currentLocation} />
                </div>
              </div>
            )}
          </div>

          <div className="form__btns row text-center mt-3">
            <div>
              <button
                type="submit"
                id="save"
                className="btn btn-primary col-sm-4 my-3 mr-4"
              >
                Save
              </button>
              <Link
                to="/profile"
                type="button"
                id="cancel"
                className="btn btn-outline-primary col-sm-4"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
