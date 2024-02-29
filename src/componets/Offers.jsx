import React from "react";
import img1 from "../assets/cha/img1.jpeg";
import img2 from "../assets/cha/img2.jpeg";
import img3 from "../assets/cha/img3.jpeg";

const Offers = () => {
  return (
    <div className="p-28">
      <h1 className="mb-0 text-4xl italic font-thin text-center uppercase">
        OFFERS
      </h1>
      <div className="relative flex flex-col justify-center gap-4 m-2 mt-0 text-sm md:flex-row">
        <div className="relative w-[400px] flex flex-col items-center gap-2 m-12 hover:shadow-lg">
          <img src={img1} className="w-full " />
          <p className="items-center justify-center">Rooms & Suites</p>
          <p className="mb-5 font-bold text-center">
            Shangri–La Circle Exclusive Member Rate <br /> with Breakfast Rate
          </p>
          <p className="mb-4 font-light text-center ">
            Exclusive Member Rate with Breakfast for Shangri-La Circle <br />{" "}
            member.
          </p>
          <p className="mb-0 font-light text-center ">
            From USD 180.00 Average Per Night
          </p>
          <button className="bottom-0 border border-[#AF7452] text-[#AF7452] pt-2 pb-2 pl-5 pr-5 mb-2 ">
            Views More
          </button>
          <p className="absolute right-0 p-1 font-serif font-semibold text-black bg-opacity-80 bg-slate-400 top-4 rounded-l-xl">
            Member Exclusive
          </p>
        </div>
        <div className="relative w-[400px] flex flex-col items-center gap-2 m-12 hover:shadow-lg">
          <img src={img2} className="w-full " />
          <p className="items-center justify-center">Rooms & Suites</p>
          <p className="mb-5 font-bold text-center ">
            Shangri–La Circle Exclusive Member Rate
          </p>
          <p className="mb-4 font-light text-center ">
            Exclusive Member Rate for Shangri-La Circle <br /> member.
          </p>
          <p className="mt-4 mb-0 font-light text-center ">
            From USD 160.00 Average Per Night
          </p>

          <button className="bottom-0 border border-[#AF7452] text-[#AF7452] pt-2 pb-2 pl-5 pr-5 mb-2 ">
            Views More
          </button>
          <p className="absolute right-0 p-1 font-serif font-semibold text-black bg-opacity-80 bg-slate-400 top-4 rounded-l-xl">
            Member Exclusive
          </p>
        </div>
        <div className="relative w-[400px] flex flex-col items-center gap-2 m-12 hover:shadow-2xl">
          <img src={img3} className="w-full " />
          <div className="flex flex-col items-center gap-2">
            <p className="items-center justify-center">Dining</p>
            <p className="mb-0 font-bold text-center">
              03 Jan 2024 - 31 Dec 2024
            </p>
            <p className="mb-5 font-bold text-center">
              Weekend Brunch at Central
            </p>
            <p className="mt-4 mb-4 font-light text-center">
              A global gastronomic journey awaits you with our Weekend brunch at
              Central.
            </p>
            <button className="bottom-0 border border-[#AF7452] text-[#AF7452] pt-2 pb-2 pl-5 pr-5 mb-2 ">
              Views More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
