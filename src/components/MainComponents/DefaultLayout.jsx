import { Link, Outlet, useParams } from "react-router-dom";
import NavbarGlobal from "../Navbar/NavbarGlobal";
import BtnUp from "./../BtnUp/BtnUp";
import LiveChat from "./../Chat/LiveChat";
import { io } from "socket.io-client";
import { useEffect } from "react";

// Functional Components
export default function DefaultLayout() {


  const socket = io('http://localhost:5001',{withCredentials: true});



  useEffect(() => {
  function onConnect() {
    console.log("connected");
  }

  function onDisconnect() {
    console.log("disconnected");
  }

  function onNotification(data) {
    console.log("Received new notification:", data);
  }
  socket.on('connect', onConnect);
  socket.on('disconnect', onDisconnect);

  socket.on('new-notification', onNotification);

}, []);

// function SendNotif(){
//   socket.emit("send-notification", {message: "hello", SendToId: "6612fe5f92bc6238601048bb"});
// }
  return (
    <>
      <main className="main" id="top">
        <BtnUp />
        <LiveChat />
        {/* style={{ transform: "scale(0.8)" }} */}
        <NavbarGlobal />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}
