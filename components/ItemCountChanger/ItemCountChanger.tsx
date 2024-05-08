import { FC } from "react";

import { Button, MinusIcon, PlusIcon } from "@lacore/components";

type ItemCountChangerProps = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const ItemCountChanger: FC<ItemCountChangerProps> = ({
  count,
  increase,
  decrease,
}) => (
  <>
    <Button size={"icon"} variant={"outline"} onClick={decrease}>
      <MinusIcon />
    </Button>
    <div className="w-10 flex justify-center items-center text-base font-medium">
      {count}
    </div>
    <Button size={"icon"} onClick={increase}>
      <PlusIcon />
    </Button>
  </>
);
