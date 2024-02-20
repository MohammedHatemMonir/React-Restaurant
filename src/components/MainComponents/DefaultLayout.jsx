import { Link, Outlet, useParams } from "react-router-dom";
import NavbarGlobal from "../Navbar/NavbarGlobal";
import Sidebar from "../Sidebar/Sidebar";



// Functional Components
export default function DefaultLayout(){


  return(
    <>
     <main className="main" id="top" >
        <NavbarGlobal></NavbarGlobal>

        <div className="content">

          <Outlet />
        </div>
      </main>
    </>
  );
}