
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function GlobalNavBar() {

return(
<>
    <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow my-nav">
        <Container>
            <Navbar.Brand>
                <Link to="/" className="navbar-brand text-success fw-semibold">
                Dine Me
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />


            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end w-100 ">
                    <ThemeController />
                    <Link to="/" className="nav-link">
                            Home
                    </Link>
                    <Link to="/menu" className="nav-link">
                            Menu
                    </Link>
                    <Link to="/about" className="nav-link">
                            About
                    </Link>
                    <Link to="/contact" className="nav-link">
                            Contact
                    </Link>
                    <Link to="/Signup" className="nav-link">
                            Sign up
                    </Link>
                    <Link to="/Login" className="nav-link">
                            Login
                    </Link>
                </Nav>
            </Navbar.Collapse>
            <div className="xyz">DarkModeTest</div>
        </Container>
    </Navbar>
</>
)

}