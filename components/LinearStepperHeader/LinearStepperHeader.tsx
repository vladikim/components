import { LinearStepperControll } from "@lacore/components";

import { cn } from "@/shared/utils";

export interface StepperHeaderProps<StepId extends string> {
  tabs: StepId[];
  translation: Record<StepId, string>;
  control: LinearStepperControll<StepId>;
}

export function LinearStepperHeader<T extends string>({
  tabs,
  translation,
  control,
}: StepperHeaderProps<T>) {
  return (
    <div className="w-full mb-4 flex">
      {tabs.map((tab) => (
        <div
          onClick={() => control.goToStep(tab)}
          key={tab}
          className={cn(
            "py-4 flex justify-center border-b-2 cursor-pointer hover:text-[#FFC9B3]",
            tabs.length === 3 && "w-1/3",
            tabs.length === 2 && "w-1/2",
            control?.activeStep === tab
              ? "border-[#FFC9B3]"
              : "border-[#372D28]"
          )}
        >
          {translation?.[tab]}
        </div>
      ))}
    </div>
  );
}
