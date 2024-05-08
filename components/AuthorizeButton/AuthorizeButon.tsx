"use client";

import { FC } from "react";

import { ButtonProps } from "@lacore/components";
import { usePathname } from "next/navigation";

import { config } from "@/entities/config";

import { LinkButton } from "../LinkButton";

export const AuthorizeButton: FC<ButtonProps> = ({ children, ...props }) => {
  const pathname = `${config.urls.eshop.front}/${usePathname()}`;

  const authUrl = new URL("/login", config.urls.cerber.front);
  authUrl.searchParams.set("retpath", pathname);

  return (
    <LinkButton {...props} href={authUrl.toString()}>
      {children}
    </LinkButton>
  );
};
