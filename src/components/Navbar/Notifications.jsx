import { Dropdown, Badge } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";

const notifications = [
  { id: 1, message: "New comment on your post", time: "2 mins ago" },
  { id: 2, message: "You have a new follower", time: "10 mins ago" },
  { id: 3, message: "Your post was liked", time: "1 hour ago" },
];

const NotificationDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        <IoMdNotificationsOutline size={24} />
        <Badge pill bg="danger">
          {notifications.length}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "300px" }}>
        <Dropdown.Header>Notifications</Dropdown.Header>
        {notifications.length === 0 ? (
          <Dropdown.Item text>No new notifications</Dropdown.Item>
        ) : (
          notifications.map((notification) => (
            <Dropdown.Item key={notification.id}>
              <div>
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
