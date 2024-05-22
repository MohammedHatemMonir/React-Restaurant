import { Link } from "react-router-dom";
import "./NavBarGlobal.scss";
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

       <NotificationDropdown />
        <div className="icons">
          <Link style={{ display: status }} className="p-5 mx-2">
            <FaBars />
          </Link>
          <Link style={{ display: status }} className="p-5 mx-2">
            <FaSearch />
          </Link>

          <Link to="/" className="p-3 mx-2">
            <FaHome />
          </Link>
          <Link to="/profile" id="login-btn" className="p-3 mx-2">
            <FaUser />
          </Link>
          {/* <Link to="/map" className="p-3 mx-2">
            <FaMapMarkerAlt />
          </Link> */}
          <Link to="/myorders" className="p-3 mx-2">
            <FaClipboardList />
          </Link>
          <Link to="/mycart" className="p-3 mx-2">
            <FaShoppingCart />
          </Link>

          <LogoutButton className="p-3 mx-2" /> 
        </div>
      </header>
    </>
  );
}
