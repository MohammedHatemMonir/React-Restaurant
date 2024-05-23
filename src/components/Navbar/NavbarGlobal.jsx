import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaEnvelope, FaCog } from "react-icons/fa";
// import "./NavBarGlobal.scss";
import { UserData } from "../../Globals";
import LogoutButton from "../Authentication/LogoutButton";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import DineMeLogo from "../../images/DineMeLogo.png";
import { useSignal } from "@preact/signals-react";
// import CartHandler from "./CartHanlder";

import {
  FaShoppingCart,
  FaSearch,
  FaClipboardList,
  FaBars,
  FaUser,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Tutorials from "./../TestComponents/Tutorials";
import NotificationDropdown from "./Notifications";

export default function NavbarGlobal() {
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
    <Navbar bg="info" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/" className="logo">
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
          <Nav className="ms-auto">
            <NotificationDropdown />

            {/* Orders dropdown */}
            <NavDropdown
              title={
                <span className="text-white">
                  <FaShoppingCart className="mx-1" />
                  Order
                </span>
              }
            >
              <NavDropdown.Item>
                <Link className="text-decoration-none text-dark" to="/myorders">
                  My Orders
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="text-decoration-none text-dark" to="/mycart">
                  My Cart
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Profile dropdown */}
            <NavDropdown
              title={
                <span className="text-white">
                  <FaUser className="mx-1" /> Profile
                </span>
              }
            >
              <NavDropdown.Item>
                <Link className="text-decoration-none text-dark" to="/profile">
                  My account
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LogoutButton className="text-decoration-none text-dark" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <>
    //   <header className="header" style={{ transform: "scale(0.90)" }}>
    //     <Link to="/" className="logo">
    //       <img
    //         src={DineMeLogo}
    //         alt="DineMeLogo"
    //         style={{
    //           width: "80px",
    //           height: "80px",
    //           objectFit: "contain",
    //           transform: "scale(1.4)",
    //         }}
    //       />
    //     </Link>

    //     <div className="icons">

    //       <Link to="/profile" id="login-btn" className="p-3 mx-2">
    //         <FaUser />
    //       </Link>
    //       {/* <Link to="/map" className="p-3 mx-2">
    //         <FaMapMarkerAlt />
    //       </Link> */}
    //       <Link to="/myorders" className="p-3 mx-2">
    //         <FaClipboardList />
    //       </Link>
    //       <Link to="/mycart" className="p-3 mx-2">
    //         <FaShoppingCart />
    //       </Link>

    //       <LogoutButton className="p-3 mx-2" />
    //     </div>
    //   </header>
    // </>
  );
}
