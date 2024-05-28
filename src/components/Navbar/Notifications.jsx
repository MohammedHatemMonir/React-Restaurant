import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";


const NotificationDropdown = () => {

  const navigate = useNavigate();
  const  notifications = useSignal([
    {  message: "New comment on your post", time: "2 mins ago", link: "" },
    {  message: "You have a new follower", time: "10 mins ago", link: "" },
    { message: "Your post was liked", time: "1 hour ago",link: "" },
  ]);
  const socket = io('http://localhost:5001',{withCredentials: true});

  function onNotification(data) {
    console.log("Received new notification:", data);

    notifications.value = [data, ...notifications.value];
  }

  useEffect(() => {
  function onConnect() {
    console.log("connected");
  }

  function onDisconnect() {
    console.log("disconnected");
  }
  socket.on('connect', onConnect);
  socket.on('disconnect', onDisconnect);


  socket.on('new-notification', onNotification);

}, []);
  return (
    <Dropdown style={{border:"none",outline:"none"}}>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        <IoMdNotificationsOutline size={24} />
        <Badge pill bg="danger">
          {notifications.value.length}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "300px" }}>
        <Dropdown.Header>Notifications</Dropdown.Header>
        {notifications.value.length === 0 ? (
          <Dropdown.Item text>No new notifications</Dropdown.Item>
        ) : (
          notifications.value?.map((notification, index) => (
            <Dropdown.Item key={index}>
              <div onClick={ () => navigate(notification.link)}>
                <strong>{notification.message}</strong>
                <div className="text-muted">
                  <small>{notification.time}</small>
                </div>
              </div>
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
