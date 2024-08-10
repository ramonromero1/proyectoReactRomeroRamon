import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (sev, msg) => {
    setMessage(msg);
    setSeverity(sev);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {message && <Notification message={message} severity={severity} />}
      {children}
    </NotificationContext.Provider>
  );
};

const Notification = ({ message, severity }) => {
  const background = {
    success: "bg-success text-white",
    danger: "bg-danger text-white",
    warning: "bg-warning text-dark",
    default: "bg-light text-dark",
  };

  const bgClass = background[severity] || background.default;

  return (
    <div
      className={`alert ${bgClass} alert-sm d-flex align-items-center position-fixed`}
      role="alert"
      style={{
        top: "20px",
        right: "20px",
        zIndex: 1050, // Asegura que la notificación esté por encima de otros elementos
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
