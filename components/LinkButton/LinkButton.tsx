"use client";

import { FC } from "react";

import { Button, ButtonProps } from "@lacore/components";
import Link from "next/link";

interface LinkButtonProps extends ButtonProps {
  href: string | { pathname: string; query: Record<string, string> };
  target?: "_blank" | "";
}

export const LinkButton: FC<LinkButtonProps> = ({
  href,
  target = "",
  children,
  ...props
}) => (
  <Link href={href} target={target} prefetch={false}>
    <Button {...props}>{children}</Button>
  </Link>
);
