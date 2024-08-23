"use client";
import Notification from "@/components/notification/Notification";
import { cn } from "@/utils/util";
import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Props = React.PropsWithChildren;
type NotificationColor = "info" | "success" | "warning" | "error";
type NotificationProps = {
  color: NotificationColor;
  children: React.ReactNode;
  autoClose: boolean;
  id: number;
};

export const NotificationContext = createContext({
  createNotification: (
    color: NotificationColor,
    autoClose: boolean,
    children: React.ReactNode
  ) => {},
});

// const container = createContainer();

export default function NotificationProvider({ children }: Props) {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const portalId = "notifyContainer";
    let element = document.getElementById(portalId);

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", portalId);
      element.style.position = "fixed";
      element.style.zIndex = "999";
      element.style.bottom = "16px";
      element.style.right = "16px";
      document.body.appendChild(element);
    }
    containerRef.current = element;

    return () => {
      if (containerRef.current) document.body.removeChild(containerRef.current);
    };
  }, []);

  function createNotification(
    color: NotificationColor,
    autoClose: boolean,
    children: React.ReactNode
  ) {
    setNotifications([
      ...notifications,
      { color, children, autoClose, id: notifications.length },
    ]);
  }

  const deleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ createNotification }}>
      {children}
      {notifications.map(({ id, color, autoClose, children }) => {
        return (
          <Notification
            key={id}
            color={color}
            autoClose={autoClose}
            container={containerRef.current}
            onDelete={() => deleteNotification(id)}
          >
            {children}
          </Notification>
        );
      })}
    </NotificationContext.Provider>
  );
}
