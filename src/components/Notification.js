import React from "react";
import { useNotification } from "../context/NotificationContext";
import "../styles/components.css";

const Notification = () => {
  const { notifications } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((note) => (
        <div key={note.id} className={`notification ${note.type}`}>
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
