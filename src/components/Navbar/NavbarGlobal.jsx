import { Link } from "react-router-dom";
import "./NavBarGlobal.scss";
import { UserData } from "../../Globals";
import LogoutButton from "../Authentication/LogoutButton";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import DineMeLogo from "../../images/DineMeLogo.png";
import { useSignal } from "@preact/signals-react";
// import CartHandler from "./CartHanlder";
import { Nav } from "react-bootstrap";
import {
  FaShoppingCart,
  FaSearch,
  FaClipboardList,
  FaBars,
  FaUser,
} from "react-icons/fa";

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
  function cancleModal() {
    Show.value = false;
  }
  return (
    <>
      <header className="header" style={{ transform: "scale(0.90)" }}>
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
        <nav className="navbar">
          <Link to="/" className="text-decoration-none">
            home
          </Link>
          <Link to="/map" className="text-decoration-none">
            Location
          </Link>
          {/* <Link to="/Tutorials" className="text-decoration-none">
            Tutorials
          </Link> */}
          {/* <Link to="/myorders" className="text-decoration-none">
            My Orders
          </Link> */}
          <Nav.Link style={{ marginLeft: "2px" }}>
            <LogoutButton />
          </Nav.Link>
        </nav>
        <div className="icons">
          <Link style={{ display: status }} className="p-5 mx-2">
            <FaBars />
          </Link>
          <Link style={{ display: status }} className="p-5 mx-2">
            <FaSearch />
          </Link>
          <Link to="myorders" className="p-3 mx-2">
            <FaClipboardList />
          </Link>
          <Link to="mycart" className="p-3 mx-2">
            <FaShoppingCart />
          </Link>
          <Link to="profile" id="login-btn" className="p-3 mx-2">
            <FaUser />
          </Link>
        </div>
      </header>
    </>
  );
}

// <Navbar bg="light" expand="lg">
// <Container>
//   <Link to="/" className="navbar-brand">
//     <Image
//       src={DineMeLogo}
//       height={50}
//       className="d-inline-block align-top"
//       alt="Logo"
//     />
//   </Link>

//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Link to="map" className="nav-link">
//         <FaMapMarkerAlt /> Location
//       </Link>
//       {/* {UserData.value.role == "ADMIN" && (
//         <Link to="allorders" className="nav-link">
//           <IoIosListBox /> All Orders
//         </Link>
//       )} */}
//       <Link to="myorders" className="nav-link">
//         <FaClipboardList /> My Orders
//       </Link>
//       <Link to="mycart" className="nav-link">
//         <FaShoppingCart /> My Cart
//       </Link>
//       {/* <div>
//         <CartHandler />
//       </div> */}
//     </Nav>

//     <Nav className="ml-auto">
//       <Link to="#link" className="nav-link">
//         <FaSearch /> Search
//       </Link>
//       <Link to="/profile" className="nav-link">
//         <Image
//           src={
//             UserData.value.userImg ||
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU"
//           }
//           roundedCircle
//           style={{ width: "30px", height: "30px" }}
//           alt="Profile"
//         />
//       </Link>
//       <Link to={"/tutorials"} className="nav-link">
//         Tutorials
//       </Link>
//       <Nav.Link className="text-decoration-none">
//         <LogoutButton />
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Container>
// </Navbar>
