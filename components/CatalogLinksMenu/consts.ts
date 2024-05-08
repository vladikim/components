import {
  CatalogSlug,
  CatalogTranslation,
  catalogList,
} from "@/entities/catalog";
import { LINKS, catalogLinks } from "@/entities/routing";

function makeLinksOptions(links: CatalogSlug[]) {
  return links.map((slug) => ({
    title: CatalogTranslation[slug],
    link: LINKS.CATALOG + catalogLinks[slug],
  }));
}

export const linksOptions: Array<{ title: string; link: string }> =
  makeLinksOptions(catalogList);
