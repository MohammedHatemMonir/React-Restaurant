import "./SideBar.scss";
import OfficeLogoIcon from "./../../Icons/OfficeLogoIcon";
import InfoIcon from "./../../Icons/InfoIcon";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarData = [
    {
      string: "Offers",
      icon: <OfficeLogoIcon />,
    },
    {
      string: "Top Dishes",
      icon: <InfoIcon />,
    },
    {
      string: "Value Meals",
    },
    {
      string: "Munchies",
    },
    {
      string: "Beef & Dogs",
    },
  ];

  return (
    <div className="my-res-sidebar">
      <ul>
        {sideBarData.map((data) => (
          <Link className="nav-link">
            <li>{data.string}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
