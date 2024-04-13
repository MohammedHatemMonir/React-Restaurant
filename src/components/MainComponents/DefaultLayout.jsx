import { Link, Outlet, useParams } from "react-router-dom";
import NavbarGlobal from "../Navbar/NavbarGlobal";
import BtnUp from './../BtnUp/BtnUp';



// Functional Components
export default function DefaultLayout(){


  return(
    <>
     <main className="main" id="top" >
     <BtnUp />
        <NavbarGlobal></NavbarGlobal>

        <div className="content">

          <Outlet />
        </div>
      </main>
    </>
  );
}