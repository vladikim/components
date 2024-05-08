import { FC } from "react";

import { Button } from "@lacore/components";

import DubaiImg from "./img/DubaiImg.png";
import GiftImg from "./img/GiftImg.png";

export const PersonalPromotion: FC = () => (
  <div className="flex max-mTablet:flex-col gap-6">
    <div
      className="w-full flex flex-col p-[24px] rounded-[28px] h-[280px] bPhone:h-[364px] sTablet:h-[368px] sLaptop:h-[456px]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${DubaiImg.src})`,
      }}
    >
      <div className="flex gap-[12px] flex-col max-w-[345px]">
        <h4 className="font-manrope text-2xl font-semibold leading-8 tracking-tighter  max-bPhone:text-xl">
          Открой Дубай вместе с LA’CORE
        </h4>
        <p className="font-manrope text-base font-normal leading-6 tracking-normal text-left">
          Воплотите мечту в реальность с LACORE! Новые и опытные консультанты в
          России имеют шанс отправиться в Дубай
        </p>
        <Button className="w-max">Подробрее</Button>
      </div>
    </div>
    <div
      className="w-full flex flex-col rounded-[28px] h-[280px] bPhone:h-[364px] sTablet:h-[368px] sLaptop:h-[456px] p-[24px]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${GiftImg.src})`,
      }}
    >
      <div className="flex gap-[12px] flex-col justify-end h-full  max-w-[415px]">
        <h4 className="font-manrope text-2xl font-semibold leading-8 tracking-tighter  max-bPhone:text-xl">
          Эксклюзивное предложение для лидеров
        </h4>
        <p className="font-manrope text-base font-normal leading-6 tracking-normal text-left">
          Участвуйте в нашей чек промоушн программе и получите поощрительный чек
          150000 рублей!
        </p>
        <Button className="w-max">Подробрее</Button>
      </div>
    </div>
  </div>
);
