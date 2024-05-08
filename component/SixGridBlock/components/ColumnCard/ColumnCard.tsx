import { FC } from "react";

import Link from "next/link";

import { CatalogSlug } from "@/entities/catalog";
import { LINKS } from "@/entities/routing";

import { Card } from "../Card";

function getCatalogUrl(item: CatalogSlug) {
  return LINKS.CATALOG + "/" + item;
}

export const ColumnCard: FC<{
  item: Array<Exclude<CatalogSlug, CatalogSlug.HAIR>>;
}> = ({ item }) => (
  <>
    {item.map((elem, index) => (
      <Link className="w-full" href={getCatalogUrl(elem)} key={index}>
        <Card size={index % 2 === 0 ? "big" : "small"} catalogSlug={elem} />
      </Link>
    ))}
  </>
);
