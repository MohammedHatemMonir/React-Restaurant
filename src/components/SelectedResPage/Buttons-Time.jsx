import "./Buttons-Time.scss";
import ClockIcon from "../../Icons/ClockIcon";
import MenuTap from "./MenuTap";
import AboutTap from "./AboutTap";
import BranchesTap from "./BranchesTap";
import { useSignal } from "@preact/signals-react";

const btns = [
  { id: 1, string: "Menu" },
  { id: 2, string: "About" },
  { id: 3, string: "Branches" },
];

const ButtonsTime = () => {
  const activeElement = useSignal(<MenuTap />); // Initial value can be null too

  function handleClicked(e) {
    const buttonValue = e.target.value;
    switch (buttonValue) {
      case "About":
        activeElement.value = <AboutTap />;
        break;
      case "Branches":
        activeElement.value = <BranchesTap />;
        break;
      default:
        activeElement.value = <MenuTap />;
        break;
    }
  }

  return (
    <section className="btns-time my-3">
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
      <div className="my-4">{activeElement}</div>
    </section>
  );
};

export default ButtonsTime;
