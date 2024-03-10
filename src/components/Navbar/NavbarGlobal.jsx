import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import "./NavBarGlobal.scss";
export default function NavbarGlobal() {
  return (
    <div className="my-test-nav">
      <Navbar expand="lg">
        <Container className="navbar-container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/" className="m-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="SignUp">SignUp</Link>
            </li>
          </ul>
          <Link to="/">
            <h1 className="logo">DineMe</h1>
          </Link>
        </Container>
      </Navbar>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <input
            type="image"
            id="menu-toggle"
            src="https://i.imgur.com/Afh6yfe.png"
            style={{ outline: "none" }}
          />
          

          <ThemeController />
          <div style={{ color: "var(--dineme-bg)" }}>ThemeTest</div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}
