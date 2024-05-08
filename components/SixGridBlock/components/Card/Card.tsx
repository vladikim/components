"use client";

import { FC, useCallback, useMemo } from "react";

import { Button } from "@lacore/components";
import { cva } from "class-variance-authority";
import { useRouter } from "next/navigation";

import { CatalogSlug } from "@/entities/catalog";
import { LINKS } from "@/entities/routing";
import { ChangingImagesByMedia } from "@/shared/components";

import { CatalogMap } from "./const";

const CardVariants = cva(
  "group w-full flex justify-center items-center rounded-[28px] overflow-hidden cursor-pointer  relative",
  {
    variants: {
      size: {
        default: "h-[424px]",
        big: "sLaptop:h-[424px] mTablet:h-[368px] bPhone:h-[280px]  h-[148px]",
        small: "sLaptop:h-[200px] mTablet:h-[200px] bPhone:h-[148px] h-[148px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export const Card: FC<{
  catalogSlug: Exclude<CatalogSlug, CatalogSlug.HAIR>;
  size?: "big" | "small";
}> = ({ size, catalogSlug }) => {
  const catalogElem = CatalogMap[catalogSlug];

  const { push } = useRouter();

  const onClickRedirect = useCallback(() => push(LINKS.CATALOG), [push]);

  const images = useMemo(
    () => ({
      sPhone: catalogElem.images.SPhone,
      bPhone: catalogElem.images.BPhone,
      sTablet: catalogElem.images.STablet,
      bTablet: catalogElem.images.BTablet,
      desktop: catalogElem.images.Laptop,
    }),
    [catalogElem]
  );

  return (
    <div className={CardVariants({ size })}>
      <ChangingImagesByMedia
        fill
        images={images}
        className="bg-primary opacity-[75%]"
      />
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="w-full h-full flex justify-center items-center relative [&>div]:hover:opacity-50 ">
          <h4 className="top-[20px] left-[20px] absolute z-[2] font-medium sTablet:text-[30px] sPhone:text-[20px] text:[18px] pr-[30px] group-hover:opacity-[0.05]">
            {catalogElem.name}
          </h4>
          <Button
            onClick={onClickRedirect}
            className="absolute z-[3] opacity-0 group-hover:opacity-100 hidden sixGridBlockSpace:block"
          >
            Перейти в каталог
          </Button>
          <div className="bg-secondary h-full w-full opacity-0 rounded-[28px] transition hidden sixGridBlockSpace:block" />
        </div>
      </div>
    </div>
  );
};
