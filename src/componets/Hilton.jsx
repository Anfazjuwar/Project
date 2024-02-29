import React from "react";
import img1 from "../assets/Hilton/img1.jpeg";
import img2 from "../assets/Hilton/img2.jpeg";
import img3 from "../assets/Hilton/img3.jpeg";
import img4 from "../assets/Hilton/img4.jpeg";
import img5 from "../assets/Hilton/img5.jpeg";
import img6 from "../assets/Hilton/img6.jpeg";

const Hilton = () => {
  return (
    <div className="flex flex-col justify-center m-2 mt-32 p-28">
      <div className="mb-4 mr-0 text-2xl font-bold text-left ml-18 ">
        <h1 className="text-blue-500 "> Save more, do more</h1>
        <p>
          Choose from our exclusive offers, and get more from your next stay.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition-transform duration-500 "
              src={img1}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-36">
            <p className="text-xl font-bold text-white uppercase mb-[50%] font-dmserif group-hover:opacity-100">
              Advance Purchase Discount – save up to 17%
            </p>
          </div>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition-transform duration-500 "
              src={img2}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-36">
            <p className="text-xl font-bold text-white uppercase mb-[50%] font-dmserif group-hover:opacity-100">
              Advance Purchase Discount – save up to 17%
            </p>
          </div>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition-transform duration-500 "
              src={img3}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-36">
            <p className="text-xl font-bold text-white uppercase mb-[50%] font-dmserif group-hover:opacity-100">
              Advance Purchase Discount – save up to 17%
            </p>
          </div>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition-transform duration-500 "
              src={img4}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-36">
            <p className="text-xl font-bold text-white uppercase mb-[50%] font-dmserif group-hover:opacity-100">
              Advance Purchase Discount – save up to 17%
            </p>
          </div>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition-transform duration-500 "
              src={img5}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-36">
            <p className="text-xl font-bold text-white uppercase mb-[50%] font-dmserif group-hover:opacity-100">
              Advance Purchase Discount – save up to 17%
            </p>
          </div>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full transition-transform duration-500 "
              src={img6}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-36">
            <p className="text-xl font-bold text-white uppercase mb-[50%] font-dmserif group-hover:opacity-100">
              Advance Purchase Discount – save up to 17%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hilton;
