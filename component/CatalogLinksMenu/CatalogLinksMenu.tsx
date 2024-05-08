import { FC } from "react";

import { linksOptions } from "./consts";
import { CatalogLink } from "../CatalogLink";

export const CatalogLinksMenu: FC = () => (
    <nav>
        <ul>
            {linksOptions.map(({ title, link }) => (
                <CatalogLink key={link} title={title} link={link} />
            ))}
        </ul>
    </nav>
);
