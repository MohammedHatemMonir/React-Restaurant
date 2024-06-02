import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const NotificationDropdown = () => {
  const navigate = useNavigate();
  const displayNewNotifications = useSignal("none");
  const notifications = useSignal([]);
  const newNotifications = useSignal(0);
  const socket = io("http://localhost:5001", { withCredentials: true });

  function updateNotificationTimes() {
    notifications.value = notifications.value.map((notification) => ({
      ...notification,
      time: moment(notification.originalTime).fromNow(),
    }));
  }

  function onNotification(data) {
    console.log("Received new notification:", data);
    const originalTime = data.time;
    const formattedTime = moment(originalTime).fromNow(); // Format the time using moment
    notifications.value = [
      { ...data, time: formattedTime, originalTime },
      ...notifications.value,
    ];
    newNotifications.value = newNotifications.value + 1;
    newNotifications.value > 0
      ? (displayNewNotifications.value = "")
      : (displayNewNotifications.value = "none");

    // console.log("notifications.value", notifications.value);
  }
  console.log("newNotifications.value", newNotifications.value);
  // console.log("notifications.value", notifications.value);

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

    const intervalId = setInterval(updateNotificationTimes, 60000);
    return () => clearInterval(intervalId);
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
        {notifications.value.length === 0 ? (
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
