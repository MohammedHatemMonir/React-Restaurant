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
import ResPage from "./../ResPage/ResPage";
import SelectResPage from "./../SelectedResPage/SelectResPage";
import { useLocation } from "react-router-dom";
import { UserData } from "../../Globals";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import LeafletMap from "./../Map/LeafletMap";
import GoogleMaps from './../Map/GoogleMaps';

export default function TheRouter() {
  const navigate = useNavigate();

  const OnWindowChange = ({ children }) => {
    const q = useQuery({
      queryKey: ["session"],
      onSuccess: navigateLogic(),
      queryFn: async () => {
        let url = "/api/users/session";

        var result = await apiClient.post(url);
        UserData.value = {
          name: result.data.name,
          email: result.data.email,
          role: result.data.role,
          id: result.data.id,
          loggedIn: result.data.loggedIn,
        };
        localStorage.setItem("UserData", JSON.stringify(UserData.value));
        console.log("session", result.data);

        return result;
      },
    });

    // useEffect(() => {

    //   window.scrollTo({

    //     top: 0,
    //     behavior: "instant",
    //   });

    // }, []);
  };
  const protectedpaths = ["/login", "/signup", "/forgotpass"];

  const navigateLogic = () => {
    const { pathname } = useLocation();

    if (!UserData.value.loggedIn && !protectedpaths.includes(pathname)) {
      navigate("/login");
    } else if (UserData.value.loggedIn && protectedpaths.includes(pathname)) {
      navigate("/");
    }
  };

  return (
    <>
      <OnWindowChange />
      <Routes>
        <Route
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="forgotpass" element={<ForgotPass />}></Route>
        </Route>

        {UserData.value.loggedIn && (
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<ResPage />} />

            <Route path="card" element={<Card />}></Route>
            <Route path="dash1" element={<Dashboard1 />}></Route>
            <Route path="dash2" element={<Dashboard2 />}></Route>
            <Route
              path="/restaurant/:resID/:resName"
              element={<SelectResPage />}
            ></Route>
            {/* <Route path="loader" element={<MainLoader />}></Route> */}
            <Route path="map" element={<LeafletMap />}></Route>
            <Route path="googlemap" element={<GoogleMaps />}></Route>

            <Route path="/tutorials" element={<Tutorials />}>
              <Route path="Medotest" element={<MedoTest />}></Route>
              <Route path="Hema" element={<HemaTest />}></Route>
              <Route path="ZyadTest" element={<ZyadTest />}></Route>
              <Route path="Prototype" element={<Prototype />}>
                <Route path="Signal" element={<SignalPrototype />}></Route>
              </Route>
            </Route>
          </Route>
        )}
      </Routes>
    </>
  );
}
