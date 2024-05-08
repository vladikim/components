"use client";

import { FC, useMemo } from "react";

import { ChevronRight, DoneTick } from "@lacore/components";
import { usePathname } from "next/navigation";

import { LinkButton } from "@/shared/components";

export const CatalogLink: FC<{ link: string; title: string }> = ({
  link,
  title,
}) => {
  const pathname = usePathname();

  const icon = useMemo(
    () => (link === pathname ? <DoneTick /> : <ChevronRight />),
    [link, pathname]
  );

  return (
    <li>
      <LinkButton
        className="w-full mb-1 text-start"
        href={link}
        variant={link === pathname ? "default" : "ghost"}
        alignItems="between"
        rightIcon={icon}
      >
        {title}
      </LinkButton>
    </li>
  );
};
