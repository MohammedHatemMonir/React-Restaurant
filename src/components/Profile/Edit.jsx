import "./Edit.scss";
import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div className="edit-profile">
      <div className="container form__wrapper">
        <h2>Edit Your Profile</h2>
        <form id="myForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First name"
                required
              />
            </div>
            {/* /form-group */}
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last name"
                required
              />
            </div>
            {/* /form-group */}
          </div>
          {/* /form-row */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="dineMe@example.com"
              required
              id="email"
            />
            <br />
            <div className="form-group">
              <label htmlFor="pass">Password</label>
              <input
                name="pass"
                type="password"
                className="form-control"
                id="pass"
                placeholder="*******"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-pass">Confirm Password</label>
              <input
                name="confirm-pass"
                type="password"
                className="form-control"
                id="confirm-pass"
                placeholder="*******"
                required
              />
            </div>
          </div>
          {/* /form-group */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                name="city"
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
              />
            </div>
            {/* /form-group */}
            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <input
                name="state"
                type="text"
                className="form-control"
                id="state"
                placeholder="State"
              />
            </div>
            {/* /form-group */}
            <div className="form-group col-md-2">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                name="zipCode"
                type="text"
                className="form-control"
                id="zipCode"
                placeholder="Zip code"
              />
            </div>
            {/* /form-group */}
          </div>
          {/* /form-row */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="homeNumber">Home Number</label>
              <input
                name="homeNumber"
                type="tel"
                className="form-control"
                id="homeNumber"
                placeholder="Home number"
              />
            </div>
            {/* /form-group */}
            <div className="form-group col-md-6">
              <label htmlFor="faxNumber">Fax Number</label>
              <input
                name="faxNumber"
                type="tel"
                className="form-control"
                id="faxNumber"
                placeholder="Fax number"
              />
            </div>
            {/* /form-group */}
          </div>
          {/* /form-row */}
          <div className="form-row form__comments">
            <div id="form__comments-by" className="form-group col-md-6" />
            <div id="form__comments-txt" className="form-group col-md-6" />
          </div>
          {/* /form-row */}
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

export default Edit;
