import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../Globals";

const NotificationDropdown = () => {
  const navigate = useNavigate();
  const displayNewNotifications = useSignal("none");

  // Get notification from local storage

  const notifications = useSignal(
    localStorage.getItem(`myData-${UserData.value.id}`)
      ? JSON.parse(localStorage.getItem(`myData-${UserData.value.id}`))
      : []
  );
  // console.log("medooo", localStorage.getItem(`myData-${UserData.value.id}`));
  // console.log("UserData.value.id", UserData.value.id);
  const newNotifications = useSignal(0);
  const socket = io("http://localhost:5001", { withCredentials: true });
  console.log("notifif", notifications.value);
  function onNotification(data) {
    console.log("Received new notification:", data);
    notifications.value = [data, ...notifications.value];

    newNotifications.value = newNotifications.value + 1;
    newNotifications.value > 0
      ? (displayNewNotifications.value = "")
      : (displayNewNotifications.value = "none");

    // Set notification in local storage
    localStorage.setItem(
      `myData-${UserData.value.id}`,
      JSON.stringify(notifications.value.slice(-5))
    );
    console.log(JSON.stringify(notifications.value.slice(-5)));
  }

  console.log("newNotifications.value", newNotifications.value);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }

    function onDisconnect() {
      console.log("disconnected");
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("new-notification", onNotification);
  }, []);
  return (
    <Dropdown
      onClick={() => {
        displayNewNotifications.value = "none";
        newNotifications.value = 0;
      }}
    >
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        <IoMdNotificationsOutline size={24} />
        <Badge
          pill
          bg="danger"
          style={{ display: displayNewNotifications.value }}
        >
          {newNotifications.value}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "300px" }}>
        <Dropdown.Header>Notifications</Dropdown.Header>
        {/* Edited here */}
        {notifications.value?.length === 0 ? (
          <Dropdown.Item text>No new notifications</Dropdown.Item>
        ) : (
          notifications.value?.map((notification, index) => (
            <Dropdown.Item key={index}>
              <div onClick={() => navigate(notification.link)}>
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
