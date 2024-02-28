import "./Buttons-Time.scss";
import ClockIcon from "../../Icons/ClockIcon";
import { useState } from "react";
import MealTap from "./MealTap";
import AboutTap from "./AboutTap";
import BranchesTap from "./BranchesTap";

const btns = [
  { id: 1, string: "Menu" },
  { id: 2, string: "About" },
  { id: 3, string: "Branches" },
];

const ButtonsTime = () => {
  const [activeElement, setActiveElement] = useState(<MealTap />); // Initial state can be null too

  function handleClicked(e) {
    const buttonValue = e.target.value;
    switch (buttonValue) {
      case "About":
        setActiveElement(<AboutTap />);
        break;
      case "Branches":
        setActiveElement(<BranchesTap />);
        break;
      default:
        setActiveElement(<MealTap />);
        break;
    }
  }

  return (
    <section className="btns-time">
      <div className="btns-time d-flex justify-content-between flex-wrap">
        <form>
          {btns.map((data) => (
            <input
              key={data.id}
              type="button"
              className="btn mx-2 my-btn"
              value={data.string}
              onClick={handleClicked}
            />
          ))}
        </form>
        <div className="d-flex gap-2 px-3">
          <div>
            <ClockIcon />
          </div>
          <p>12:00 PM - 02:00 AM</p>
        </div>
      </div>
      <div>{activeElement}</div>
    </section>
  );
};

export default ButtonsTime;
