import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function NavbarGlobal() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <input
            type="image"
            id="menu-toggle"
            src="https://i.imgur.com/Afh6yfe.png"
            style={{ outline: "none" }}
          />
          {/* <Link to="home">Logo</Link> */}
          <Link to="/" className="m-1">
            Home
          </Link>

          <Link to="/tutorials">Tutorials</Link>

          <Link to="/login" className="m-1" style={{ textDecoration: "none" }}>
            LogIn
          </Link>
          <Link to="SignUp" className="m-1" style={{ textDecoration: "none" }}>
            SignUp
          </Link>

          <ThemeController />
          <div style={{ color: "var(--dineme-bg)" }}>ThemeTest</div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
