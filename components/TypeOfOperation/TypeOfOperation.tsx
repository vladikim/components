import { FC } from "react";

import {
  CrossIcon,
  DoneTick,
  LoaderIcon,
  PlusIcon,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@lacore/components";
import { cva } from "class-variance-authority";

const Variants = cva(
  "flex w-max px-[12px] gap-3 py-[6px]  rounded-[28px] justify-center items-center cursor-pointer",
  {
    variants: {
      type: {
        deposit: "bg-green",
        credit: "bg-red",
        not_paid: "bg-[#FFFCB4]",
        paid: "bg-[#FFFCB4]",
        in_process_at_warehouse: "bg-[#FFFCB4]",
        sent_by_sdek: "bg-[#FFFCB4]",
        canceled: "bg-red",
      },
    },
    defaultVariants: {
      type: "credit",
    },
  }
);

const typeOfIcons = {
  deposit: <PlusIcon />,
  credit: <CrossIcon />,
  not_paid: <LoaderIcon size="16px" />,
  paid: <LoaderIcon size="16px" />,
  in_process_at_warehouse: <DoneTick />,
  sent_by_sdek: <LoaderIcon size="16px" />,
  canceled: <CrossIcon />,
};

const description = {
  deposit: "Пополнение",
  credit: "Списание",
  not_paid: "Ожидает оплаты",
  paid: "Оплачен",
  in_process_at_warehouse: "В обработке",
  sent_by_sdek: "В пути",
  canceled: "Отменен",
};

type TypeOfOperationProps = {
  type:
    | "credit"
    | "deposit"
    | "not_paid"
    | "paid"
    | "in_process_at_warehouse"
    | "sent_by_sdek"
    | "canceled";
};

export const TypeOfOperation: FC<TypeOfOperationProps> = ({ type }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={Variants({ type })}>
          <div>{typeOfIcons[type]}</div>
          <div className="font-inter text-p-ui-medium text-center text-16 font-medium leading-24 tracking-0 whitespace-nowrap">
            {description[type]}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{description[type]}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
