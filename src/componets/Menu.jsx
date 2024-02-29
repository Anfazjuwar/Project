import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-center bg-white  items-center w-full h-[60px] text-[14px] md:flex flex-col lg:flex-row ">
      <ul className="flex items-center gap-16 p-4 text-sm font-semibold list-none md:flex">
        <li className="p-4 cursor-pointer">HOTELS & RESORTS</li>
        <li className="p-4 cursor-pointer">OFFERS</li>

        <li className="relative flex gap-1 p-4 cursor-pointer h-ful">
          EXPERIENCES
        </li>

        <li className="p-4 cursor-pointer">RESTAURANTS & BARS</li>
        <li className="p-4 cursor-pointer">SHANGRI-LA CIRCLE</li>
        <li className="p-4 cursor-pointer">SHANGRI-LA BOUTIQUE</li>
      </ul>
    </div>
  );
};

export default Menu;
