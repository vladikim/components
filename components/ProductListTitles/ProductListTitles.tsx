import { FC } from "react";

interface Item {
  name: string;
  number: number;
}

interface ProductListTitlesProps {
  items: Item[];
}

export const ProductListTitles: FC<ProductListTitlesProps> = ({ items }) => (
  <div className="bbPhone:w-[336px] flex flex-col rounded-[14px] px-[8px] py-[4px] gap-4 absolute bg-white z-[10] bbPhone:translate-x-[-50%] bbPhone:left-[50%] top-[44px] ">
    {items.map((elem, index) => (
      <div
        key={index}
        className="bg-[#FFFAF8] rounded-[14px] px-[8px] py-[4px]"
      >
        <p className=" mb-[4px]">{elem.name}</p>
        <p className="text-[#736B68]">арт. {elem.number}</p>
      </div>
    ))}
  </div>
);
