"use client";

import { FC } from "react";

import { useGetBreadCrumbsAndTitle } from "@/entities/routing";
import { cn } from "@/shared/utils";

export const PageTitle: FC<{ title?: string; className?: string }> = ({
  title,
  className,
}) => {
  const { pageTitle } = useGetBreadCrumbsAndTitle();

  return (
    <h1
      className={cn(
        "text-xl sPhone:text-2xl bPhone:text-3xl sTablet:text-5xl font-extrabold text-[#372D28]",
        "mt-[24px] bPhone:mt-[40px]  bTablet:mt-[52px]",
        className
      )}
    >
      {title ? title : pageTitle}
    </h1>
  );
};
