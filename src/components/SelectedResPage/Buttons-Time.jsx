import "./Buttons-Time.scss";
import ClockIcon from "../../Icons/ClockIcon";
import SideBar from "./SideBar";
import { Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import Reviews from "./../Reviews/Reviews";

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

      {/* <SideBar /> */}

      <Row>
        <Col>
          <SideBar />
        </Col>
        <Col>
          <Container>Menu</Container>
        </Col>
        <Col >
          <div className="Reviews-Zoom">
            <Reviews />
          </div>
        </Col>
      </Row>
      {/* <div className="Reviews-Zoom">
        <Reviews />
      </div> */}
    </section>
  );
};

export default ButtonsTime;
