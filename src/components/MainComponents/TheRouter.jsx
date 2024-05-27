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
import Tutorials from "../TestComponents/Tutorials";
import ResPage from "./../ResPage/ResPage";
import SelectResPage from "./../SelectedResPage/SelectResPage";
import { useLocation } from "react-router-dom";
import { UserData } from "../../Globals";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import LeafletMap from "./../Map/LeafletMap";
import CircleLoader from "../Loaders/CircleLoader";
// import CookingLoader from "./../Loaders/CookingLoader";
import MapLoader from "./../Loaders/MapLoader";
import Profile from "../Profile/ProfilePage";
import EditProfile from "../Profile/EditProfile";
import ResetPass from "./../Authentication/ResetPass";
import OwnerDashboard from "../Dashboard/OwnerDashboard";
import MealsOrdersPage from "../Orders/OrdersDetailsPage";
import AllOrdersPage from "../Orders/MyOrdersPage";
import MyOrdersPage from "./../Orders/MyOrdersPage";
import CartBody from "../Navbar/CartBody";

export default function TheRouter() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const protectedpaths = ["login", "signup", "forget", "reset"];

  const navigateLogic = () => {
    const firstSegment = pathname.split("/")[1];

    if (!UserData.value.loggedIn && !protectedpaths.includes(firstSegment)) {
      navigate("/login");
    } else if (
      UserData.value.loggedIn &&
      protectedpaths.includes(firstSegment)
    ) {
      navigate("/");
    }
  };

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
          userImg: result.data.userImg,
          loggedIn: result.data.loggedIn,
        };
        UserData.value.loggedIn
          ? localStorage.setItem("UserData", true)
          : localStorage.removeItem("UserData");
        // console.log("session", result.data);

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

  return (
    <>
      <OnWindowChange />
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="Forget" element={<ForgotPass />}></Route>
        <Route path="reset/:id/:token" element={<ResetPass />}></Route>

        {UserData.value.loggedIn && (
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<ResPage />} />
            <Route
              path="/OwnerDashboard/:ResID"
              element={<OwnerDashboard />}
            ></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
            <Route
              path="/restaurant/:resID/:resName"
              element={<SelectResPage />}
            ></Route>
            {/* <Route path="/cooking" element={<CookingLoader />}></Route> */}
            <Route path="/circle" element={<CircleLoader />}></Route>
            <Route path="/map" element={<LeafletMap />}></Route>
            <Route path="/maploader" element={<MapLoader />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/edit" element={<EditProfile />}></Route>
            <Route path="/allorders" element={<AllOrdersPage />}></Route>
            <Route path="/myorders" element={<MyOrdersPage />}></Route>
            <Route
              path="/mealdetails/:orderId"
              element={<MealsOrdersPage />}
            ></Route>
            {/* style={{ transform: "scale(0.85)" }} */}
            <Route
              path="/mycart"
              element={
                <div>
                  <CartBody />
                </div>
              }
            ></Route>

            <Route path="/mealsorders" element={<MealsOrdersPage />}></Route>
            <Route path="hema" element={<HemaTest />}></Route>
            <Route path="/tutorials" element={<Tutorials />}>
              <Route path="Medotest" element={<MedoTest />}></Route>
              <Route path="hema" element={<HemaTest />}></Route>
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
