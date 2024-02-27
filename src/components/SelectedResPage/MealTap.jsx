import React from "react";
import { Container, Row, Col } from "reactstrap";

import SideBar from "./SideBar";
import Reviews from "./../Reviews/Reviews";
import MealCard from "./MealCard";

const MealTap = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={6}>
          <MealCard />
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

export default MealTap;
