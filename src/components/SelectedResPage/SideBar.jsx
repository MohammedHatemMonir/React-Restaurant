import OfficeLogoIcon from "./../../Icons/OfficeLogoIcon";
import InfoIcon from "./../../Icons/InfoIcon";
import { Link } from "react-router-dom";
import "./SideBar.scss";
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

  // function goToType(targetId) {
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  function handleClicked(e) {
    const inputs = document.getElementsByTagName("li");
    // Loop through input elements to toggle class "my-btn"
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].key === e.target.key) {
        inputs[i].classList.add("res-bg");
      } else {
        inputs[i].classList.remove("res-bg");
      }
    }
  }
  // bg-[#e32207]
  return (
    <div className="my-res-sidebar mx-2 text-white font-bold">
      <ul className="list-none">
        {sideBarData.map((data) => (
          <li key={data.id} className="mb-2 bg-[#ccc] rounded-lg">
            <Link
              to=""
              className="nav-link flex items-center"
              onClick={handleClicked}
              id={data.id}
            >
              {<span className="mr-2">{data.icon}</span>}
              <p>{data.string}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
