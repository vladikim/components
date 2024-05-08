import { FC, useMemo } from "react";

import Image from "next/image";

import { baseProps } from "./const";
import { ActualProps, ChangingImagesByMediaProps } from "./types";

type Cover = "cover";
type Relative = "relative";

const fillStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as Cover,
  position: "relative" as Relative,
};

export const ChangingImagesByMedia: FC<ChangingImagesByMediaProps> = ({
  images,
  width,
  height,
  className,
  fill,
}) => {
  const actualProps: ActualProps[] = useMemo(
    () =>
      baseProps.map((baseProp) => {
        const res: ActualProps = {
          alt: baseProp.alt,
          size: baseProp.size,
          className:
            baseProp.baseClassName + (className ? " " + className : ""),
          width: width || baseProp.baseSize,
          height: height || baseProp.baseSize,
        };

        return res;
      }),
    [className, width, height]
  );

  return (
    <>
      {actualProps.map(({ size, alt, ...other }) => (
        <Image
          src={images[size]}
          alt={alt}
          key={alt}
          {...other}
          quality={100}
          style={fill ? fillStyles : undefined}
        />
      ))}
    </>
  );
};
