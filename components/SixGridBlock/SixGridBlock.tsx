import { FC } from "react";

import { CatalogSlug } from "@/entities/catalog";
import { cn } from "@/shared/utils";

import { ColumnCard } from "./components/ColumnCard/";
import { BlockTitle } from "../BlockTitle";

export const SixGridBlock: FC<{
  items: Array<Array<Exclude<CatalogSlug, CatalogSlug.HAIR>>>;
  title: string;
}> = ({ items, title }) => (
  <>
    <BlockTitle title={title} />
    <div className="flex flex-row gap-3 max-bPhone:flex-col bPhone:justify-between sTablet:gap-6">
      {items.map((item, index) => (
        <div
          key={item[0]}
          className={cn(
            "flex gap-3 justify-between w-full sTablet:gap-6",
            index % 2 === 0 ? "bPhone:flex-col" : "bPhone:flex-col-reverse"
          )}
        >
          <ColumnCard item={item} />
        </div>
      ))}
    </div>
  </>
);
