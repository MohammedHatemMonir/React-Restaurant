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
    <header className="select-res-page" style={{zIndex:"100"}}>
      <div>
        <div>
          <div className="bz c0 c1 c2 c3 c4">
            <div className="c5 c6 c3 af c7 b1 ak al aq c8 c9">
              {/* <button
                        data-testid="menu-button"
                        aria-label="Main navigation menu"
                        className="al c8 ca cb cc"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 20 20"
                          className="cd ce cf cg"
                        >
                          <path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z" />
                        </svg>
                      </button> */}
              <div className="spacer _32" />
              <Link to={"/"} aria-current="page" className="active">
                <img
                  alt="DineMe"
                  role="img"
                  src={DineMeLogo}
                  width={75}
                  height={50}
                />
              </Link>
              <button
                onClick={() => (Show.value = true)}
                style={{
                  transform: "scale(1.5)",
                  padding: "0 0 5px 20px",
                }}
              ></button>
              <CartHandler />

              <div className="spacer _24" />
              <div className="spacer _16" />
              <Link
                data-testid="edit-delivery-location-button"
                className="ck cl cm cn co al aq c8 cc cp cq af cr cs b1 ct cu cv cw cx"
              >
                <div className="cy ca cz">
                  <svg
                    width="16px"
                    height="24px"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Deliver to"
                    role="img"
                    focusable="false"
                  >
                    <path
                      d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                      fill="#000000"
                    />
                  </svg>
                </div>
                <div className="spacer _8" />
                <div
                  data-testid="delivery-address-label"
                  className="d0 bd bb d1"
                >
                  New York
                </div>
                <span className="ck cl d2 d3 d4 d5 c8">•&nbsp;&nbsp;</span>
                <div data-test="delivery-time" className="d0 bd bb d6">
                  Now
                </div>
              </Link>
              <div className="spacer _16" />
              <div className="d7 al bz d8">
                <div
                  role="search"
                  aria-label="Search for restaurant or cuisine"
                  className="bz c0 c1 c2 c3 c4"
                >
                  <div
                    data-testid="multi-vertical-desktop-global-search-bar-wrapper"
                    className="am ak d9"
                  >
                    <label
                      id="search-suggestions-typeahead-label"
                      htmlFor="search-suggestions-typeahead-input"
                      className="ag b9 ba bb bc bd be"
                    >
                      Food, groceries, drinks, etc
                    </label>
                    <div className="ck da cm db dc b1 bz al ag cp co c8 dd de df dg dh">
                      <div className="spacer _16" />
                      <div className="al di dj">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 20 20"
                          className="dk dl cf cg"
                        >
                          <path d="M18.834 17l-3.666-3.667c.916-1.333 1.5-2.916 1.5-4.666C16.667 4.333 13.083.75 8.75.75 4.417.75.834 4.333.834 8.667c0 4.333 3.583 7.916 7.917 7.916 1.75 0 3.333-.583 4.666-1.5l3.667 3.667 1.75-1.75zm-15.5-8.25c0-3 2.417-5.417 5.417-5.417s5.416 2.417 5.416 5.417-2.416 5.417-5.416 5.417c-3 0-5.417-2.417-5.417-5.417z" />
                        </svg>
                      </div>
                      <div className="spacer _16" />
                      <input
                        role="combobox"
                        aria-expanded="false"
                        id="search-suggestions-typeahead-input"
                        aria-autocomplete="list"
                        aria-controls="search-suggestions-typeahead-menu"
                        aria-labelledby="search-suggestions-typeahead-label"
                        autoComplete="off"
                        type="text"
                        name="searchTerm"
                        placeholder="Food, groceries, drinks, etc"
                        className="d9 dc dm dn do dp dq dr d0 bb"
                        defaultValue=""
                      />
                      <div className="spacer _8" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="al aq ds ag c0 bz c5 dt du at c3 dv dw dx dy dz bb ap e0 ax e1">
                <div className="di e2 b9 e3 e4" />
                <div className="al bz am e0">
                  <div className="e5 e6 e7 b6 e8">
                    <div className="di ce" />
                    <div className="ae bz al d9 c8 e9 ea c0 eb">
                      <div className="ec ed cz">
                        <svg
                          width="33%"
                          height="33%"
                          fill="none"
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="Loading..."
                          role="img"
                          focusable="false"
                        >
                          <path
                            fill="#E8E8E8"
                            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                          >
                            <animateTransform
                              attributeType="xml"
                              attributeName="transform"
                              type="rotate"
                              from="0 25 25"
                              to="360 25 25"
                              dur="0.6s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div className="di ee" />
                  </div>
                </div>
                <div className="di ef b9 e3 e4" />
              </div>
              <div className="eg al eh c8">
                <div
                  style={{
                    width: "80px",
                    transform: "scale(0.1)",
                    marginRight: "10px",
                    marginLeft: "-15px",
                  }}
                >
                  <Link to="/profile" className="position-relative">
                    <img
                      src={UserData.value.loggedIn && UserData.value.userImg}
                      alt="User-Img"
                      className="i"
                    />
                  </Link>
                </div>

                <div className="cy" />
                <Link
                  to={"/"}
                  className="ck cl cm cn co d4 c8 af bd ek el b1 ct cu cv cw cx"
                >
                  <HomeIcon />
                  <div className="spacer _4" />
                  Home
                </Link>

                <div className="cy" />
                <Link
                  to={"/tutorials"}
                  className="ck cl cm cn co d4 c8 af bd ek el b1 ct cu cv cw cx"
                >
                  Tutorials
                </Link>

                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

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
