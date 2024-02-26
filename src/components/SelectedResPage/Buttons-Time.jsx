import "./Buttons-SideBar.scss";
import ClockIcon from "../../Icons/ClockIcon";

const ButtonsTime = () => {
  const btns = [
    { string: "Menu" },
    { string: "About" },
    { string: "Branches" },
  ];
  return (
    <section className="btns-time">
      <div className="btns-time d-flex justify-content-between flex-wrap">
        <form>
          {btns.map((data) => (
            <input
              type="button"
              className="btn mx-2 my-btn"
              value={data.string}
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
      {/* SidBar */}
    </section>
  );
};

export default ButtonsTime;
