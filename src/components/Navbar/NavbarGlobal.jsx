import { Link } from "react-router-dom";
import "./NavBarGlobal.scss";
import { UserData } from "../../Globals";
import LogoutButton from "../Authentication/LogoutButton";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import PersonIcon from "../../Icons/PersonIcon";
import HomeIcon from "../../Icons/HomeIcon";
import DineMeLogo from "../../images/DineMeLogo.png";
import { useSignal } from "@preact/signals-react";
import CartHandler from "./CartHanlder";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
export default function NavbarGlobal() {
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
  function cancleModal() {
    Show.value = false;
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <Image
            src={DineMeLogo}
            height={50}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="map" className="nav-link">
              <FaMapMarkerAlt /> Location
            </Link>
            <div>
              <CartHandler />
            </div>
          </Nav>

          <Nav className="ml-auto">
            <Link to="#link" className="nav-link">
              <FaSearch /> Search
            </Link>
            <Link to="/profile" className="nav-link">
              <Image
                src={
                  UserData.value.userImg ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU"
                }
                roundedCircle
                style={{ width: "30px", height: "30px" }}
                alt="Profile"
              />
            </Link>
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
            <Nav.Link className="text-decoration-none">
              <LogoutButton />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    //  <Container className="navbar-container">
    //     <input type="checkbox" name="" id="" />
    //     <div className="hamburger-lines">
    //       <span className="line line1" />
    //       <span className="line line2" />
    //       <span className="line line3" />
    //     </div>
    //     <button onClick={()=>{terminateSession()}}> terminate session</button>
    //     <ul className="menu-items">
    //       <li>
    //         <Link to="/" className="m-1">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/tutorials">Tutorials</Link>
    //       </li>

    //         {!UserData.value.loggedIn && <>
    //               <li>
    //                 <Link to="/login">LogIn</Link>
    //               </li>
    //               <li>
    //                 <Link to="SignUp">SignUp</Link>
    //               </li>
    //               </>

    //         }
    //         {UserData.value.loggedIn &&
    //           <>
    //             <li>
    //               <LogoutButton />
    //             </li>
    //             <li>
    //             NAME: {UserData.value.name}
    //             </li>
    //           </>
    //         }
    //       </ul>
    //     <Link to="/">
    //       <h1 className="logo">DineMe</h1>
    //     </Link>
    //   </Container>

    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <input
    //       type="image"
    //       id="menu-toggle"
    //       src="https://i.imgur.com/Afh6yfe.png"
    //       style={{ outline: "none" }}
    //     />

    //     <ThemeController />
    //     <div style={{ color: "var(--dineme-bg)" }}>ThemeTest</div>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto"></Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

function Header() {
  return <></>;
}
