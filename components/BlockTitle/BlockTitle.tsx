import { FC, ReactNode } from "react";

interface BlockTitleProps {
  children?: ReactNode;
  title: string;
}

export const BlockTitle: FC<BlockTitleProps> = ({ children, title }) => (
  <div
    className={`flex items-center mb-[24px] bPhone:mb-[36px] bTablet:mb-[52px]`}
  >
    <h1 className="font-extrabold max-bTablet:font-semibold text-[20px] bPhone:text-[24px] sTablet:text-[30px] bTablet:text-[48px] mr-[40px]">
      {title}
    </h1>
    {children}
  </div>
);
