import { FC } from "react";

import { LoaderIcon } from "@lacore/components";

import { cn } from "@/shared/utils";

import classes from "./Spinner.module.css";

type SpinnerProps = {
  global?: boolean;
  className?: string;
};

const GlobalSpinner = () => (
  <div className={classes.container}>
    <div className={cn(classes.box, "bg-primary")}>
      <LoaderIcon size="16px" />
    </div>
  </div>
);

export const Spinner: FC<SpinnerProps> = ({ global, className }) => {
  if (global) {
    return <GlobalSpinner />;
  }

  return (
    <div className={cn(classes.box, "bg-primary", className)}>
      <LoaderIcon  />
    </div>
  );
};
