"use client";
import { cn } from "@/utils/util";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Notification.module.css";

type NotificationProps = {
  color: "info" | "success" | "warning" | "error";
  container: HTMLElement | null;
  onDelete: React.MouseEventHandler;
  autoClose: boolean;
} & React.PropsWithChildren;

const TIME_TO_DELETE = 300;

export default function Notification({
  color,
  onDelete,
  autoClose = false,
  children,
  container,
}: NotificationProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timeoutId = setTimeout(onDelete, TIME_TO_DELETE);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isClosing, onDelete]);

  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose]);

  return createPortal(
    <div
      className={cn(
        "overflow-hidden max-h-[200px] transition-all duration-300 ease-out [&:not(:first-child)]:mt-2",
        { "max-h-0": isClosing }
      )}
    >
      <div
        className={cn(
          "text-white max-w-[430px] max-h-[200px] overflow-hidden p-3 pr-12 z-50 relative font-bold [&:not(:first-child)]:mt-2",
          styles.notification,
          {
            "bg-[#2196f3]": color === "info",
            "bg-[#4caf50]": color === "success",
            "bg-[#ff9800]": color === "warning",
            "bg-[#f44336]": color === "error",
            [styles.slideIn]: !isClosing,
            [styles.slideOut]: isClosing,
          }
        )}
      >
        {children}
        <button
          className={
            "absolute top-3 right-3 bg-transparent p-0 border-0 cursor-pointer text-white"
          }
          onClick={() => setIsClosing(true)}
        >
          <FaTimes height={16} />
        </button>
      </div>
    </div>,
    container || document.body
  );
}
