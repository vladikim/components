import { CatalogSlug, CatalogTranslation } from "@/entities/catalog";

export const CatalogMap: Record<
  Exclude<CatalogSlug, CatalogSlug.HAIR>,
  {
    name: string;
    images: {
      SPhone: string;
      BPhone: string;
      STablet: string;
      BTablet: string;
      Laptop: string;
    };
  }
> = {
  [CatalogSlug.CLEAN]: {
    name: CatalogTranslation[CatalogSlug.CLEAN],
    images: {
      SPhone: "/sixGridBlock/ForFaceSPhone.png",
      BPhone: "/sixGridBlock/ForFaceBPhone.png",
      STablet: "/sixGridBlock/ForFaceSTablet.png",
      BTablet: "/sixGridBlock/ForFaceBTablet.png",
      Laptop: "/sixGridBlock/ForFaceMax.png",
    },
  },
  [CatalogSlug.SKIN]: {
    name: CatalogTranslation[CatalogSlug.SKIN],
    images: {
      SPhone: "/sixGridBlock/ForManSPhone.png",
      BPhone: "/sixGridBlock/ForManBPhone.png",
      STablet: "/sixGridBlock/ForManSTablet.png",
      BTablet: "/sixGridBlock/ForManBtablet.png",
      Laptop: "/sixGridBlock/ForManMax.png",
    },
  },
  [CatalogSlug.SPEC]: {
    name: CatalogTranslation[CatalogSlug.SPEC],
    images: {
      SPhone: "/sixGridBlock/ForHairSPhone.png",
      BPhone: "/sixGridBlock/ForHairBPhone.png",
      STablet: "/sixGridBlock/ForHairSTablet.png",
      BTablet: "/sixGridBlock/ForHairBTablet.png",
      Laptop: "/sixGridBlock/ForHairMax.png",
    },
  },
  [CatalogSlug.DECOR]: {
    name: CatalogTranslation[CatalogSlug.DECOR],
    images: {
      SPhone: "/sixGridBlock/MakeupSPhone.png",
      BPhone: "/sixGridBlock/MakeupBPhone.png",
      STablet: "/sixGridBlock/MakeupSTablet.png",
      BTablet: "/sixGridBlock/MakeupBTablet.png",
      Laptop: "/sixGridBlock/MakeupMax.png",
    },
  },
  [CatalogSlug.BODY]: {
    name: CatalogTranslation[CatalogSlug.BODY],
    images: {
      SPhone: "/sixGridBlock/ForBodySPhone.png",
      BPhone: "/sixGridBlock/ForBodyBPhone.png",
      STablet: "/sixGridBlock/ForBodySTablet.png",
      BTablet: "/sixGridBlock/ForBodyBTablet.png",
      Laptop: "/sixGridBlock/ForBodyMax.png",
    },
  },
  [CatalogSlug.PERFUME]: {
    name: CatalogTranslation[CatalogSlug.PERFUME],
    images: {
      SPhone: "/sixGridBlock/AromasSPhone.png",
      BPhone: "/sixGridBlock/AromasBPhone.png",
      STablet: "/sixGridBlock/AromasSTablet.png",
      BTablet: "/sixGridBlock/AromasBTablet.png",
      Laptop: "/sixGridBlock/AromasMax.png",
    },
  },
};
