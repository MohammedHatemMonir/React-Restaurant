import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaEnvelope, FaCog } from "react-icons/fa";
import NotificationDropdown from "./../Navbar/Notifications";

import {
  FaShoppingCart,
  FaSearch,
  FaClipboardList,
  FaBars,
  FaUser,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";

const MyNavbar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NotificationDropdown />
            <NavDropdown
              title={
                <span className="text-white">
                  <FaUser className="mx-1" /> Profile
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">My account</NavDropdown.Item>
              <NavDropdown.Item href="#">Log out</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="text-white">
              <FaCog className="mx-1" /> Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
