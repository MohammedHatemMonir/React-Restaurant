import { useForm } from "react-hook-form";
import { UserData } from "../../Globals";
import "./Edit.scss";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // useEffect(() => {
  //   // Reset form fields to default values when UserData changes
  //   reset({
  //     firstName: UserData.value.name,
  //     email: UserData.value.email,
  //   });
  // }, [reset, UserData.value]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-profile">
      <div className="container form__wrapper">
        <h2 className="font-weight-bold">Edit Your Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} id="myForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Name</label>
              <input
                // {...register("firstName", { required: "Name is required" })}
                type="text"
                className="form-control"
                defaultValue={UserData.value.name}
                required
                id="firstName"
                placeholder="Name"
              />
              {errors.firstName && (
                <span className="text-danger font-weight-bold">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="my-img">Profile Image</label>
              <input
                {...register("userImage", {
                  required: "Profile image is required",
                  minLength: {
                    value: 3,
                    message: "Name must have at least 3 characters",
                  },
                })}
                type="file"
                required
                className="form-control"
                id="my-img"
              />
              {errors.userImage && (
                <span className="text-danger font-weight-bold">
                  {errors.userImage.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              required
              defaultValue={UserData.value.email}
              className="form-control"
              id="email"
              placeholder="dineMe@example.com"
            />
            {errors.email && (
              <span className="text-danger font-weight-bold">
                {errors.email.message}
              </span>
            )}
            <br />

            <div className="form-group">
              <label htmlFor="old-pass">Old Password</label>
              <input
                {...register("oldPass", {
                  required: "Old password is required",
                  minLength: {
                    value: 7,
                    message: "Password must have at least 7 characters",
                  },
                })}
                type="password"
                defaultValue={UserData.value.password}
                required
                className="form-control"
                id="old-pass"
                placeholder="*******"
              />
              {errors.oldPass && (
                <span className="text-danger font-weight-bold">
                  {errors.oldPass.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="new-pass">New Password</label>
              <input
                {...register("newPass", {
                  required: "New password is required",
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                })}
                type="password"
                className="form-control"
                id="new-pass"
                required
                placeholder="*******"
              />
              {errors.newPass && (
                <span className="text-danger font-weight-bold">
                  {errors.newPass.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="state">Phone Number</label>
              <input
                {...register("phone")}
                type="number"
                className="form-control"
                required
                id="state"
                placeholder="01*********"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="location">Location</label>
              <input
                {...register("location")}
                type="text"
                className="form-control"
                required
                id="location"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="form__btns row text-center">
            <div>
              <button
                type="submit"
                id="save"
                className="btn btn-primary col-sm-4 mr-5"
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
