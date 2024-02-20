import { Link, Outlet } from "react-router-dom";

export default function Tutorials() {


    return(<>
        <div className="d-flex justify-content-between"   >
            <Link to="Prototype">- Prototype -</Link>
            <Link to="MedoTest">- Medo test -</Link>
            <Link to="Hema">- Hema test -</Link>
            <Link to="ZyadTest">- Zyad test -</Link>
            
        </div>
    
    <Outlet />
    </>);
}