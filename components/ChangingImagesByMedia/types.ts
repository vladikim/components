type Sizes = "sPhone" | "bPhone" | "sTablet" | "bTablet" | "desktop";

export type ChangingImagesByMediaProps = {
  images: Record<Sizes, string>;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
};

export type ActualProps = {
  size: Sizes;
  alt: string;
  className: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

export type BaseProps = {
  size: Sizes;
  alt: string;
  baseSize: number;
  baseClassName: string;
};
