import { FC } from "react";

import {
  Button,
  ChevronLeft,
  ChevronRight,
  CircleStepperControll,
} from "@lacore/components";

export interface StepperWithTitlesProps<StepId extends string> {
  titles: Record<StepId, string>;
  control: CircleStepperControll<StepId>;
}

export const CarouselStepperHeader: FC<StepperWithTitlesProps<string>> = ({
  titles,
  control,
}) => (
  <div className="flex justify-center items-center w-full gap-1 sPhone:gap-3 h-[56px] transition-all duration-300">
    <Button size="icon" variant={"ghost"} onClick={control.prev}>
      <ChevronLeft />
    </Button>
    <div className=" w-[250px]  h-full flex justify-center items-center border-[#FFC9B3] border-b-2">
      <p className="text-center font-semibold	text-[18px] cursor-pointer">
        {titles[control.activeStep]}
      </p>
    </div>
    <Button size="icon" variant={"ghost"} onClick={control.next}>
      <ChevronRight />
    </Button>
  </div>
);
