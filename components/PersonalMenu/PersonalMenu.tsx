import { FC, ReactNode } from "react";

import { ChevronRight } from "@lacore/components";

import { LinkButton } from "../LinkButton";

interface PersonalMenuProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export const PersonalMenu: FC<PersonalMenuProps> = ({
  title,
  description,
  icon,
  link,
}) => (
  <div className="border-[2px] border-primary  p-[12px] bbbPhone:p-[24px] flex justify-between rounded-[28px]">
    <div>
      <div className="flex flex-col gap-[12px] mb-[24px]">
        <h2 className="mb-3 tracking-tight font-semibold text-lg sPhone:text-xl bPhone:text-2xl sTablet:text-3xl">
          {title}
        </h2>
        <p className="font-manrope text-base font-normal leading-6 tracking-normal text-left">
          {description}
        </p>
      </div>
      <LinkButton href={link} className="w-max" rightIcon={<ChevronRight />}>
        Перейти
      </LinkButton>
    </div>
    <div className="self-end opacity-20 hidden bbbPhone:block">{icon}</div>
  </div>
);
