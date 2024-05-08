"use client";
import { FC, useCallback, useState } from "react";

import { Button } from "@lacore/components";
import { ChevronDown } from "lucide-react";

import { ProductListTitles } from "@/shared/components";

export const StepProductList: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleOpen = useCallback(
    () => setVisible((prev) => !prev),
    [setVisible]
  );

  return (
    <div className="relative">
      <Button
        onClick={handleOpen}
        className="w-max"
        variant={"outline"}
        rightIcon={<ChevronDown className="w-[16px] h-[16px] ml-[8px]" />}
      >
        <span className="text-[14px]">Список товаров</span>
      </Button>
      {visible && (
        <div>
          <div
            className="w-full fixed h-full  bg-black z-[9] opacity-0 top-0 left-0"
            onClick={handleOpen}
          />
          <ProductListTitles items={[]} />
        </div>
      )}
    </div>
  );
};
