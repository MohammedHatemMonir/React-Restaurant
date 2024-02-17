import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

  import Home from "../pages/Home/Home";
  import Menu from "../pages/Menu/Menu";
  import About from "../pages/About/About";
  import Contact from "../pages/Contact/Contact";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Test from "../components/Tests/Test";
  import Emotions from "../components/Emotions/Emotions";
  import SignUp from "../pages/Authentication/SignUp";
  import Login from "../pages/Authentication/Login";
  import ForgotPass from "../pages/Authentication/ForgotPass";
  import Test2 from "../components/Tests/Test2";
  import GlobalLayout from "../pages/GlobalLayout";



export default function TheRouter() {

return(<>

    <BrowserRouter>
        <Routes>
            <Route element={<GlobalLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/test" element={<Test />} />
                <Route path="/emotions" element={<Emotions />} />
                <Route path="/LogIn" element={<Login />} />
                <Route path="/ForgotPass" element={<ForgotPass />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/test2" element={<Test2 />} />
            </Route>
        </Routes>
    </BrowserRouter>
</>)
}