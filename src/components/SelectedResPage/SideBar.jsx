import "./SideBar.scss";
import OfficeLogoIcon from "./../../Icons/OfficeLogoIcon";
import InfoIcon from "./../../Icons/InfoIcon";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarData = [
    {
      id: 1,
      string: "Offers",
      icon: <OfficeLogoIcon />,
    },
    { id: 2, string: "Top Dishes", icon: <InfoIcon /> },
    { id: 3, string: "Value Meals" },
    { id: 4, string: "Munchies" },
    { id: 5, string: "Beef & Dogs" },
  ];

  return (
    <div className="my-res-sidebar">
      <ul>
        {sideBarData.map((data) => (
          <Link className="nav-link" key={data.id}>
            <li>{data.string}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
