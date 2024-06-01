import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { UserData, Cart } from "../../Globals";
// import LogoutButton from "../Authentication/LogoutButton";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import DineMeLogo from "../../images/DineMeLogo.png";
import { useSignal } from "@preact/signals-react";
import { FaShoppingCart, FaClipboardList, FaUser } from "react-icons/fa";
import Tutorials from "./../TestComponents/Tutorials";
import NotificationDropdown from "./Notifications";

export default function NavbarGlobal() {
  // Log out here
  const navigate = useNavigate();
  const m1 = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/logout";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const LogoutFunction = async function () {
    const result = await m1.mutateAsync();
    if (result.data.success) {
      UserData.value = {};
      Cart.value = [];
      navigate("/login");
    }
  };

  const status = useSignal("none");
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/terminateSession";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  async function terminateSession() {
    const result = await m.mutateAsync();
    console.log("result", result.data);
  }

  let Show = useSignal(false);

  return (
    <Navbar expand="lg" style={{ background: "#ffffff", zIndex: "1000" }}>
      <Container fluid>
        <Link to="/" className="logo ml-5">
          <img
            src={DineMeLogo}
            alt="DineMeLogo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              transform: "scale(1.4)",
            }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pr-5">
            <NotificationDropdown />

            <Nav.Link
              as={Link}
              to="/myorders"
              className="text-dark text-decoration-none"
            >
              <FaClipboardList /> My Orders
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/mycart"
              className="text-dark text-decoration-none"
            >
              <FaShoppingCart /> My Cart
            </Nav.Link>
            {/* Profile dropdown */}
            <NavDropdown
              title={
                <span className="text-dark">
                  <FaUser className="mx-1" /> Profile
                </span>
              }
            >
              <NavDropdown.Item
                as={Link}
                className="text-decoration-none text-dark"
                to="/edit"
              >
                Edit Profile
              </NavDropdown.Item>
              {/* Dashboard for admin only */}
              {UserData.value.role == "ADMIN" && (
                <NavDropdown.Item
                  as={Link}
                  className="text-decoration-none text-dark"
                  to="/AdminDashboard"
                >
                  Dashboard
                </NavDropdown.Item>
              )}

              <NavDropdown.Item as={Link} onClick={LogoutFunction}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
