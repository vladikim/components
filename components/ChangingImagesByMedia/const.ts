import { BaseProps } from "./types";

export const baseProps: BaseProps[] = [
  {
    size: "sPhone",
    alt: "sPhoneOmage",
    baseSize: 360,
    baseClassName: "max-sPhone:block hidden",
  },
  {
    size: "bPhone",
    alt: "bPhoneOmage",
    baseSize: 480,
    baseClassName: "max-sPhone:hidden max-bPhone:block bPhone:hidden",
  },
  {
    size: "sTablet",
    alt: "sTabletOmage",
    baseSize: 768,
    baseClassName: "max-bPhone:hidden max-sTablet:block sTablet:hidden",
  },
  {
    size: "bTablet",
    alt: "bTabletOmage",
    baseSize: 1024,
    baseClassName: "max-sTablet:hidden max-bTablet:block bTablet:hidden",
  },
  {
    size: "desktop",
    alt: "desktopOmage",
    baseSize: 1280,
    baseClassName: "hidden bTablet:block",
  },
];
