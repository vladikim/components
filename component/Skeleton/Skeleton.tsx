import { FC } from "react";

import { cn } from "@/shared/utils";

import styles from "./Skeleton.module.css";

type SkeletonProps = {
  className?: string;
  width?: string;
  height?: string;
};

export const Skeleton: FC<SkeletonProps> = ({ className, width, height }) => (
  <div
    className={cn(styles.animation, "rounded-[28px]", className)}
    style={{ width, height }}
  />
);
