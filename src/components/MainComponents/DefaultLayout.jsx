import { Link, Outlet, useParams } from "react-router-dom";
import NavbarGlobal from "../Navbar/NavbarGlobal";
import BtnUp from "./../BtnUp/BtnUp";
import Footer from "./../ResPage/Footer";

// Functional Components
export default function DefaultLayout() {
  return (
    <>
      <main className="main" id="top">
        <BtnUp />
        {/* style={{ transform: "scale(0.8)" }} */}
        <NavbarGlobal />
        <div className="content">
          <Outlet />
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}
