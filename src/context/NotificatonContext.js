import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "info") => {
    setNotifications([...notifications, { message, type, id: Date.now() }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== Date.now()));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
