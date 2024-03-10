import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
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
import Home from "./Home";
import Tutorials from "../TestComponents/Tutorials";
import ResPage from './../ResPage/ResPage';
import SelectResPage from './../SelectedResPage/SelectResPage';
import  { useEffect } from 'react';

import { useLocation } from "react-router-dom";
import { UserData } from "../../Globals";


export default function TheRouter() {

const navigate = useNavigate();

  const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
  
    useEffect(() => {

      if(!UserData.value.loggedIn && pathname!=='/login' && pathname!=='/SignUp' && pathname!=='/ForgotPass')
        navigate("/login");
      window.scrollTo({

        top: 0,
        behavior: "instant",
      });
    }, [pathname]);
  
    return null;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<><Outlet /></>} >
          <Route path="login" element={<Login />}></Route>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="ForgotPass" element={<ForgotPass />}></Route>


        </Route>
        
        {UserData.value.loggedIn &&
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<ResPage />} />
          

          <Route path="card" element={<Card />}></Route>
          <Route path="dash1" element={<Dashboard1 />}></Route>
          <Route path="dash2" element={<Dashboard2 />}></Route>
          <Route path="/restaurant/:resID/:resName" element={<SelectResPage />}></Route>

          <Route path="/tutorials" element={<Tutorials />}>
              <Route path="Medotest" element={<MedoTest />}></Route>
              <Route path="Hema" element={<HemaTest />}></Route>
              <Route path="ZyadTest" element={<ZyadTest />}></Route>
              <Route path="Prototype" element={<Prototype />}>
                <Route path="Signal" element={<SignalPrototype />}></Route>
              </Route>
            
          </Route>

          
        </Route>
      }
      </Routes>
    </>
  );
}
