import { Container, Row, Col } from "reactstrap";
import Reviews from "../Reviews/Reviews";

const AboutTap = () => {
  return (
    <div>
      <Row>
        <Col md={9} className="bg-success">
          <h1>About goes here</h1>
        </Col>
        <Col md={3}>
          <div className="Reviews-Zoom">
            <Reviews />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutTap;
