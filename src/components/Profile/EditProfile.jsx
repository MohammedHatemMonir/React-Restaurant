import { useForm } from "react-hook-form";
import { UserData } from "../../Globals";
import "./Edit.scss";
import { useSignal } from "@preact/signals-react";
import { Button, Col } from "reactstrap";
import LeafletMap from "./../Map/LeafletMap";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentLocation = useSignal("");
  const showMap = useSignal(false);
  const myBtn = useSignal(true);

  function handleBtnClick() {
    showMap.value = !showMap.value;
    myBtn.value = !myBtn.value;
  }

  const onSubmit = () => {};

  return (
    <div className="edit-profile">
      <div className="container form__wrapper">
        <h2 className="">Edit Your Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} id="myForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Name</label>
              <input
                {...register("firstName", {
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
              {errors.firstName && (
                <span className="text-danger ">{errors.firstName.message}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="my-img">Profile Image</label>
              <input
                {...register("userImage", {
                  // required: "Profile image is required",
                })}
                type="file"
                // required
                className="form-control"
                id="my-img"
              />
              {errors.userImage && (
                <span className="text-danger ">{errors.userImage.message}</span>
              )}
            </div>
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
                {...register("newPass", {
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
              {errors.newPass && (
                <span className="text-danger ">{errors.newPass.message}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-5">
              <label htmlFor="phone">Phone Number</label>
              <input
                {...register("phone", {
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
              {errors.phone && (
                <span className="text-danger ">{errors.phone.message}</span>
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
              <button
                type="button"
                id="cancel"
                className="btn btn-outline-primary col-sm-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
