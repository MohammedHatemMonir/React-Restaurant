import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-footer">
      <footer className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h4>Dine Me Restaurant</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ullamcorper odio eget aliquet maximus.
              </p>
            </Col>
            <Col md={4}>
              <Button variant="outline-light" href="#contact">
                <FaEnvelope /> Send Us a Message
              </Button>
              <p className="py-3">
                Stay tuned for our special events and promotions!
              </p>
            </Col>

            <Col md={4}>
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://facebook.com">
                    <FaFacebook size={30} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <FaTwitter size={30} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <FaInstagram size={30} /> Instagram
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>{" "}
    </div>
  );
};

export default Footer;
