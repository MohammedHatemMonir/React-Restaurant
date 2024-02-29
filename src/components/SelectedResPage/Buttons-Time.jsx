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
  const myMenu = (
    <div className="my-btn">
      <MenuTap />
    </div>
  );
  const myInput = document.getElementById("Menu");
  // myInput.classList.add("my-btn");
  const activeElement = useSignal(<MenuTap />); // Initial value can be null too
  // if (activeElement === <MenuTap />) {
  //   myInput.classList.add("my-btn");
  // }
  function handleClicked(e) {
    const buttonValue = e.target.value;

    // Set active element based on the button clicked
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

    const inputs = document.getElementsByTagName("input");
    // Loop through input elements to toggle class "my-btn"
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].id === e.target.id) {
        inputs[i].classList.add("my-btn");
      } else {
        inputs[i].classList.remove("my-btn");
      }
    }
  }

  return (
    <section className="btns-time my-3">
      <div className="btns-time flex justify-between flex-wrap ">
        <form>
          {btns.map((data) => {
            return (
              <input
                key={data.id}
                id={data.string}
                type="button"
                className="px-3 py-2 mx-2 font-bold rounded-full hover:bg-[#eee] duration-150"
                value={data.string}
                onClick={handleClicked}
              />
            );
          })}
        </form>
        <div className="flex gap-2 px-3">
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
