import { Link, Outlet } from "react-router-dom";

export default function Prototype(){





    return(<>
    <Link to={"Signal"}>Signal -</Link>

    <Link to={"OtherPrototype"}>- OtherPrototype</Link>


    <Outlet />
    </>);
}