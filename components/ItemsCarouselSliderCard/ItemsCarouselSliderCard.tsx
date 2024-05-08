"use client";

import { FC, useEffect, useMemo, useRef, useState } from "react";

import {
  Button,
  ChevronLeft,
  ChevronRight,
  useCircleStepper,
} from "@lacore/components";
import Image from "next/image";

import { LinkButton, Skeleton } from "@/shared/components";
import { cn } from "@/shared/utils";

import styles from "./ItemsCarouselSliderCard.module.css";

const padding = 24;

type URL = string;

export type ItemsCarouselSliderCardProps = {
  order: URL[];
  slides: Slide[];
  isLoading?: boolean;
};

export type Slide = {
  itemImage: string;
  bgImage: string;
  title: string;
  description: string;
  url: URL;
};

type Cover = "cover";

const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as Cover,
  borderRadius: "28px",
};

export const ItemsCarouselSliderCard: FC<ItemsCarouselSliderCardProps> = ({
  order,
  slides,
  isLoading = false,
}) => {
  const { next, prev, activeStep } = useCircleStepper({
    order,
    initialStepId: order[0],
  });

  const [containerW, setContainerW] = useState(0);

  const curId = useMemo(() => {
    const cur = order.findIndex((id) => id === activeStep);
    if (cur === -1) {
      next();
      return 0;
    }
    return cur;
  }, [activeStep, order, next]);

  const curUrl = useMemo(() => slides[curId]?.url, [curId, slides]);

  const marginLeft = useMemo(
    () => ({
      marginLeft:
        (isLoading || curId < 0 ? "0" : -(curId * (containerW + padding))) +
        "px",
    }),
    [curId, containerW, isLoading]
  );

  const width = useMemo(() => ({ width: containerW + "px" }), [containerW]);

  const sliderCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      setContainerW(sliderCard.current?.clientWidth || 0);
    }

    window?.addEventListener("resize", handleResize);
    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-card rounded-[28px] p-3 bTablet:p-6 overflow-hidden w-full flex flex-col justify-between">
      <div
        ref={sliderCard}
        className="flex ease-out duration-500 w-full"
        style={marginLeft}
      >
        {isLoading && containerW > 0 ? (
          <div className="mr-6 last:mr-0" style={width}>
            <div className="relative h-[248px]" style={width}>
              <div className="h-[180px] absolute top-0 right-0 rounded-[28px] w-carouselCardInnerWidth overflow-hidden">
                <Skeleton className="w-[432px] h-[180px]" />
              </div>
              <div className="absolute bottom-0 left-0 bg-[#E1FFB6] rounded-[28px]">
                <Skeleton className="w-[200px] h-[224px]" />
              </div>
            </div>
            <Skeleton className="w-full h-[56px] mb-3 mt-6" />
            <Skeleton className="w-full h-[120px] mb-[100px] max-sTablet:mb-6" />
          </div>
        ) : (
          slides.map(({ itemImage, bgImage, title, description }, id) => (
            <div key={id} className="mr-6 last:mr-0" style={width}>
              <div className="relative h-[248px]" style={width}>
                <div className="h-[180px] absolute top-0 right-0 rounded-[28px] w-carouselCardInnerWidth">
                  <Image
                    src={bgImage}
                    alt="bgImage"
                    width={432}
                    height={180}
                    style={imageStyles}
                    quality={100}
                  />
                </div>
                <div className="absolute bottom-0 left-0 bg-[#E1FFB6] rounded-[28px]">
                  <Image
                    src={itemImage}
                    alt="itemImage"
                    width={200}
                    height={224}
                    quality={100}
                  />
                </div>
              </div>
              <p className="text-xl font-semibold leading-[28px] mb-3 mt-6">
                {title}
              </p>
              <p
                className={cn(
                  "text-base mb-[100px] max-sTablet:mb-6",
                  styles.textElipsis
                )}
              >
                {description}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between">
        {curUrl ? (
          <LinkButton href={curUrl} disabled={!curUrl} variant={"outline"}>
            <p className="hidden max-bTablet:block">Подробнее</p>
            <p className="hidden bTablet:block ">Подробнее о продукте</p>
          </LinkButton>
        ) : (
          <Button disabled={!curUrl} variant={"outline"}>
            <p className="hidden max-bTablet:block">Подробнее</p>
            <p className="hidden bTablet:block ">Подробнее о продукте</p>
          </Button>
        )}

        <div>
          <Button
            onClick={prev}
            disabled={isLoading}
            className="mr-3"
            size={"icon"}
            variant={"outline"}
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={next}
            disabled={isLoading}
            size={"icon"}
            variant={"outline"}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
