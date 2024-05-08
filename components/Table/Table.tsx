import { ReactNode } from "react";

import { cn } from "@/shared/utils";

import { Skeleton } from "../Skeleton";

type DataType = Array<string | ReactNode>;

interface TableProps {
  data: DataType[];
  columns: string[];
  loading: boolean;
}

export function Table({ data, columns, loading }: TableProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-mbTablet:overflow-x-scroll">
        <div
          className={cn(
            `grid bg-primary rounded-[28px] mb-3 text-center min-w-[800px] px-3 min-h-[72px] box-border`,
            "grid-cols-[repeat(" +
              String(columns.length + 1) +
              ",_minmax(0,_1fr))]"
          )}
        >
          {columns.map((column, indexCol) => (
            <div
              key={indexCol}
              className={`text-large text-[18px] font-semibold leading-28  items-center grid-cols-4 flex justify-center first:col-span-2 px-6 whitespace-nowrap`}
            >
              {column}
            </div>
          ))}
        </div>
        <div
          className={`grid grid-rows-${data?.length} gap-y-[12px] text-center`}
        >
          {loading ? (
            Array.from({ length: 10 }).map((elem, index) => (
              <Skeleton
                className="grid  grid-cols-[repeat(5,_minmax(0,_1fr))] min-w-[800px] h-[72px] rounded-[28px] px-3 py-3"
                key={index}
              />
            ))
          ) : data?.length <= 0 ? (
            <div className="h-[500px] flex justify-center items-center gap-6 flex-col">
              <div className="flex gap-3 flex-col w-[50%]">
                <h4 className="font-manrope text-[20px] font-semibold leading-[28px] tracking-tight text-center">
                  История операций отсутствует
                </h4>
                <p className="font-manrope text-16 font-normal leading-24 tracking-normal text-center">
                  Здесь отображается ваша история закозов. На данный момент
                  список пуст. Не беспокойтесь, просто продолжайте исследовать
                  наш ассортимент, и новые товары автоматически появятся здесь!
                </p>
              </div>
            </div>
          ) : (
            data?.map((elem, indexRow) => (
              <div
                className={cn(
                  `grid  grid-cols-[repeat(5,_minmax(0,_1fr))] min-w-[800px] border-2 border-primary rounded-[28px] px-3  min-h-[72px] box-border`
                )}
                key={indexRow}
              >
                {elem.map((item, indexCol) => (
                  <div
                    key={indexCol}
                    className={`text-[16px] font-medium leading-[24px] flex items-center justify-center whitespace-normal first:col-span-2 px-6 break-all`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
