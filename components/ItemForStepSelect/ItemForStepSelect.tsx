import { FC } from "react";

import Image from "next/image";

import { getItemImageUrl } from "@/entities/items";
import { StepItem } from "@/entities/step";
import { cn } from "@/shared/utils";

import styles from "./ItemForStepSelect.module.css";

type CartItemProp = {
  item: StepItem;
  isChosenValue?: boolean;
  onClick?: () => void;
};

export const ItemForStepSelect: FC<CartItemProp> = ({
  item,
  isChosenValue,
  onClick,
}) => {
  const img = getItemImageUrl(item?.code as string, "small");

  return (
    <div
      onClick={onClick}
      className={cn(
        "border-2  border-primary rounded-[28px] p-[16px] flex items-center relative max-bbbPhone:flex-col mb-[4px] cursor-pointer",
        isChosenValue ? "bg-primary border-teartiary" : "bg-white"
      )}
    >
      <div className=" flex gap-[12px] w-full">
        <div className="relative flex flex-col items-center sPhone:gap-[16px] gap-[6px] justify-between min-w-[124px] max-sPhone:min-w-[108px]">
          <div className="rounded-[28px] flex justify-center items-center ">
            <Image
              width={50}
              height={50}
              src={img}
              alt={String(item?.name)}
              quality={100}
              className="w-auto h-[70px] bPhone:h-[70px]"
            />
          </div>
          <div className="text-suble font-semibold text-left text-base leading-5 ">
            арт. {item?.code}
          </div>
        </div>
        <div className="flex justify-between w-full h-full self-center max-bbbPhone:flex-col max-bPhone:gap-[12px]">
          <h2
            className={cn(
              "text-[14px] max-sTablet:text-[14px] max-sPhone:text-[14px] ",
              styles.textElipsisTwoLines
            )}
          >
            {item?.name}
          </h2>
        </div>
      </div>
    </div>
  );
};
