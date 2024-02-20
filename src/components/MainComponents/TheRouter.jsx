import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import MedoTest from "../TestComponents/MedoTest";
import HemaTest from "../TestComponents/HemaTest";
import ZyadTest from "../TestComponents/ZyadTest";
import Login from "../Authentication/Login";
import ForgotPass from "../Authentication/ForgotPass";
import SignUp from "../Authentication/SignUp";
import SignalPrototype from "../Prototypes/SignalPrototype";
import Prototype from "../Prototypes/Prototype";
import Card from "../Card/Card";
import Dashboard1 from "../Dashboard/Dashboard1";
import Dashboard2 from "../Dashboard/Dashboard2";
import Sidebar from "../Sidebar/Sidebar";
import Home from "./Home";
import Tutorials from "../TestComponents/Tutorials";
import ResPage from './../ResPage/RestsPage';


export default function TheRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />

          <Route path="card" element={<Card />}></Route>
          <Route path="dash1" element={<Dashboard1 />}></Route>
          <Route path="dash2" element={<Dashboard2 />}></Route>
          <Route path="sidebar" element={<Sidebar />}></Route>
          <Route path="res" element={<ResPage />}></Route>

          <Route path="/tutorials" element={<Tutorials />}>
              <Route path="Medotest" element={<MedoTest />}></Route>
              <Route path="Hema" element={<HemaTest />}></Route>
              <Route path="ZyadTest" element={<ZyadTest />}></Route>
              <Route path="LogIn" element={<Login />}></Route>
              <Route path="ForgotPass" element={<ForgotPass />}></Route>
              <Route path="SignUp" element={<SignUp />}></Route>
              <Route path="Prototype" element={<Prototype />}>
                <Route path="Signal" element={<SignalPrototype />}></Route>
              </Route>
            
          </Route>

          
        </Route>
      </Routes>
    </>
  );
}
