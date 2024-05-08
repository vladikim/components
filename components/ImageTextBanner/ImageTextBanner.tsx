import { FC, ReactNode } from "react";

import { cn } from "@/shared/utils";

export const ImageTextBanner: FC<{
  children: ReactNode;
  title: string;
  description: string;
  textPosition?: "center" | "top" | "bottom";
  textType?: "small" | "big";
  className?: string;
}> = ({
  children,
  title,
  description,
  textPosition = "center",
  textType = "big",
  className,
}) => (
  <div
    className={cn(
      "w-full border relative rounded-[28px] overflow-hidden",
      className
    )}
  >
    <div
      className={cn(
        "absolute p-6",
        textPosition === "top" && "top-0",
        textPosition === "center" &&
          "sPhone:top-[50%] sPhone:translate-y-[-50%] max-mPhone:w-full mPhone:w-[448px]",
        textPosition === "bottom" && "bottom-0"
      )}
    >
      <h2 className="mb-3 tracking-tight font-semibold text-lg sPhone:text-xl bPhone:text-2xl sTablet:text-3xl">
        {title}
      </h2>
      <p className={cn(textType === "small" && "text-sm leading-6")}>
        {description}
      </p>
    </div>
    {children}
  </div>
);
