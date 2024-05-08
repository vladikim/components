"use client";
import { FC, useMemo } from "react";

import { cn } from "@/shared/utils";

import styless from "./Activity.module.css";
import { Skeleton } from "../Skeleton";

interface ActivityCircleProps {
  points: number | undefined;
  maxPoints: number;
  text?: string;
  colorOfOuter?: string;
  isLoading: boolean;
}
const dashArray = 810;

export const ActivityCircle: FC<ActivityCircleProps> = ({
  isLoading,
  points = 0,
  maxPoints,
  text,
  colorOfOuter = "bg-[#fff5e9]",
}) => {
  const dashOffset = useMemo(
    () =>
      points > maxPoints
        ? (dashArray * (points - points)) / maxPoints
        : (dashArray * (maxPoints - points)) / maxPoints,
    [points, maxPoints]
  );
  return (
    <div className={styless.skill}>
      <div className={cn(styless.outer, colorOfOuter)}>
        <div className={cn(styless.inner)}>
          <svg
            className={styless.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="300px"
            height="300px"
          >
            <circle
              className={styless.circle}
              cx="150"
              cy="150"
              r="130"
              transform="rotate(-90 150 150)" // Начало сверху
              stroke="url(#GradientColor)"
              strokeLinecap="round"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <h2 className="font-semibold sTablet:font-extrabold text-[30px] sTablet:text-[48px] text-center sTablet:leading-[56px]">
            {isLoading || typeof points !== "number" ? (
              <Skeleton className="w-[120px] h-[37px] sTablet:w-[198px] sTablet:h-[48px]" />
            ) : (
              <span className="text-[#372D28]">
                {points}/{maxPoints}
              </span>
            )}
            <p className="text-[#736B68]">{text}</p>
          </h2>
        </div>
      </div>
    </div>
  );
};
