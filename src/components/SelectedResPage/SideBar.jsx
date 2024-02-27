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
      targetId: "offers-section", // Add targetId to specify the target element's id
    },
    {
      id: 2,
      string: "Top Dishes",
      icon: <InfoIcon />,
      targetId: "top-dishes-section",
    },
    { id: 3, string: "Value Meals", targetId: "value-meals-section" },
    { id: 4, string: "Munchies", targetId: "munchies-section" },
    { id: 5, string: "Beef & Dogs", targetId: "beef-dogs-section" },
  ];

  function goToType(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="my-res-sidebar">
      <ul>
        {sideBarData.map((data) => (
          <Link
            className="nav-link"
            key={data.id}
            onClick={() => goToType(data.targetId)}
          >
            <li>{data.string}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
