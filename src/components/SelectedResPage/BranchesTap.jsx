import { Container, Row, Col } from "reactstrap";
import Reviews from './../Reviews/Reviews';

const BranchesTap = () => {
  return (
    <div className="container">
      <Row>
        <Col md={9} className="bg-danger">
          <h1> Branches goes here</h1>
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

export default BranchesTap;
