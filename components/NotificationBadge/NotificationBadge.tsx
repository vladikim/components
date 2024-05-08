"use client";

import React from "react";
import { FC, useEffect, useState } from "react";

import { ErrorIcon } from "@lacore/components";

export interface NotificationBadgeProps {
  message: string;
  deleteMessage: (id: number) => void;
  type: "success" | "error";
  id: number;
}
export const NotificationBadge: FC<NotificationBadgeProps> = ({
  message,
  deleteMessage,
  type,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      deleteMessage(id);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [deleteMessage, id]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex bg-white border-[3px] border-red rounded-full text-[14px] shadow-[4px_4px_10px_0px_#BABABA] pl-[10px] pr-4 py-[8px]">
      {type === "error" ? (
        <span className="flex mr-1">
          <ErrorIcon />
        </span>
      ) : null}
      {message}
    </div>
  );
};
