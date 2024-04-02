import { UserData } from "../../Globals";
import "./Profile.scss";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="main-profile">
      <div className="bg-cover" />
      <div className="container">
        <div className="middle">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile-img"
            className="user-pic"
          />
          <h4 className="name font-weight-bold">{UserData.value.name}</h4>
          <h4 className="work font-weight-bold">
            1300 Comment | 4.5 <span className="text-warning">&#x2B50;</span>|
            Test
          </h4>
        </div>
        <div className="footer">
          <Link to="/edit" className="btn-follow">
            Edit
          </Link>
          <br />
          <i className="fa fa-lock" />
          <br />
          <h4 className="profile-status">This profile is hidden</h4>
        </div>
      </div>
    </div>
  );
}
