import { useContext } from "react";
import { NotificationContext } from "../Context/NotificationContex";

export const useNotification = () => {
  return useContext(NotificationContext);
};
