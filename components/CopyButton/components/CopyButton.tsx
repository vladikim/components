"use client";

import { FC, useCallback } from "react";

import { Button, ButtonProps } from "@lacore/components";
interface CopyButtonProps extends ButtonProps {
  value: string;
}

export const CopyButton: FC<CopyButtonProps> = ({
  children,
  value,
  ...props
}) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value);
  }, [value]);

  return (
    <Button {...props} onClick={handleCopy}>
      {children}
    </Button>
  );
};
