import { FaGrin } from "react-icons/fa";
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
            src={
              UserData.value.userImg ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU"
            }
            alt="profile-img"
            className="user-pic"
          />
          <h4 className="name font-weight-bold">{UserData.value.name}</h4>
          <h4 className="work font-weight-bold">
            1300 Comment | 4.5 <span className="text-warning">&#x2B50;</span> |
            <span> <FaGrin  /> </span>
          </h4>
        </div>
        <div className="footer">
          <Link to="/edit" className="btn-follow text-decoration-none">
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
