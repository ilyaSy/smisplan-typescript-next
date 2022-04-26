import React, { useCallback, useContext } from "react";
import { notification } from 'antd';
import { INotification } from "../types/INotification"
import { IChildren } from "../types/IChildren";

interface INotificationProvider {
  showNotification: (action: INotification) => void;
}

const NotificationContext = React.createContext<INotificationProvider>({} as INotificationProvider);

const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  return context;
}

export const NotificationContextProvider = ({ children }: IChildren) => {
  const showNotification = useCallback((action: INotification) => {
    const { type, message, description, duration = 5 } = action;
    notification[type]({
      message: message,
      description: description,
      placement: 'topRight',
      duration: duration
    });
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export default useNotificationContext;
