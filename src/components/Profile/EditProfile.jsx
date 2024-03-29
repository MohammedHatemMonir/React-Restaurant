import { UserData } from "../../Globals";
import "./Edit.scss";


const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="container form__wrapper">
        <h2 className="font-weight-bold">Edit Your Profile</h2>
        <form id="myForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Name</label>
              <input
                name="firstName"
                type="text"
                defaultValue={UserData.value.name}
                className="form-control"
                id="firstName"
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="my-img">Profile Image</label>
              <input
                name="user-image"
                type="file"
                className="form-control"
                id="my-img"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              defaultValue={UserData.value.email}
              id="email"
              className="form-control"
              placeholder="dineMe@example.com"
              required
            />
            <br />
            <div className="form-group">
              <label htmlFor="old-pass">Old Password</label>
              <input
                name="old-pass"
                type="password"
                className="form-control"
                id="old-pass"
                placeholder="*******"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-pass">New Password</label>
              <input
                name="new-pass"
                type="password"
                className="form-control"
                id="new-pass"
                placeholder="*******"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="state">Phone Number</label>
              <input
                name="phone"
                type="number"
                className="form-control"
                id="state"
                placeholder="01*********"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="location">Location</label>
              <input
                name="location"
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="form__btns row text-center">
            <div>
              <button id="save" className="btn btn-primary col-sm-4 mr-5">
                Save
              </button>
              <button id="cancel" className="btn btn-outline-primary col-sm-4">
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
