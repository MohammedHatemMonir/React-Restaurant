import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import "./NavBarGlobal.scss";
import { UserData } from "../../Globals";
import LogoutButton from "../Authentication/LogoutButton";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
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


  async function terminateSession(){


    const result = await m.mutateAsync();
    console.log("result",result.data);

  }
  
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
          <button onClick={()=>{terminateSession()}}> terminate session</button>
          <ul className="menu-items">
            <li>
              <Link to="/" className="m-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>

              {!UserData.value.loggedIn && <>
                    <li>
                      <Link to="/login">LogIn</Link>
                    </li>
                    <li>
                      <Link to="SignUp">SignUp</Link>
                    </li>
                    </>
                  
              }
              {UserData.value.loggedIn && 
                <>
                  <li>
                    <LogoutButton />
                  </li>
                  <li>
                  NAME: {UserData.value.name}
                  </li>
                </>
              }
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
