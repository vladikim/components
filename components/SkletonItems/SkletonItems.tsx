import { FC, useMemo } from "react";

import { Skeleton } from "../Skeleton";

export const SkletonItems: FC<{ count?: number }> = ({ count = 4 }) => {
  const howManyItems = useMemo(
    () =>
      Array(count)
        .fill(0)
        .map((_, i) => i),
    [count]
  );
  return (
    <>
      {howManyItems.map((key) => (
        <Skeleton
          className="rounded-[28px] max-sTablet:h-[320px] sTablet:h-[368px] sLaptop:h-[424px]"
          key={key}
        />
      ))}
    </>
  );
};
