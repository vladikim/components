import { FC, useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lacore/components";

import { SortOptions } from "@/widgets/CatalogItemList/const";

import { Skeleton } from "../Skeleton";

type SortItemsBlockProps = {
  options: { label: string; value: string }[];
  value: string;
  setValue: (value: SortOptions) => void;
};

export const SortItemsBlock: FC<SortItemsBlockProps> = ({
  options,
  value,
  setValue,
}) => {
  const chosenSortLabel = useMemo(
    () => options.filter((opt) => opt.value === value)?.[0]?.label,
    [value, options]
  );

  return (
    <span className="flex items-center">
      <p className="text-sm font-medium text-[#736B68] mr-5">Сортировать</p>
      {chosenSortLabel ? (
        <Select onValueChange={setValue} defaultValue={value}>
          <SelectTrigger
            variant={"onlyText"}
            className="h-[24px] p-0 w-[136px]"
          >
            <SelectValue>{chosenSortLabel}</SelectValue>
          </SelectTrigger>
          <SelectContent position="popper">
            {options.map(({ label, ...opt }) => (
              <SelectItem key={opt.value} value={opt.value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Skeleton className="w-[136px] h-[20px]" />
      )}
    </span>
  );
};
