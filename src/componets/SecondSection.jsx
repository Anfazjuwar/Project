import React from "react";
import img1 from "../assets/secondsctionimage/ima1.jpeg";
import img2 from "../assets/secondsctionimage/ima3.png";

const SecondSection = () => {
  return (
    <div className="flex items-center justify-center mt-0 bg-slate-100 ">
      <div className="">
        <div className="flex flex-col items-center justify-center mt-16">
          <h1 className="mb-4 text-4xl italic font-thin uppercase ">
            Our Destinations
          </h1>

          <select className=" w-[50%]   p-2 mb-24 border border-gray-300 rounded-md focus:outline-none ">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className=" w-[800px] h-[700px]"
        >
          <div className="one">
            <div className="relative w-[300px] mr-10 mb-10 right-[25%] top-50 p-10">
              <img src={img2} className="mb-5 font-bold"></img>
            </div>
            <div className="relative w-[300px]  ml-10 mb-10 bg-white left-[75%] -top-60 p-10">
              <h1 className="mb-5 font-bold uppercase">cinnamonhotels life</h1>
              <p>
                Experience unparalleled hospitality and luxurious comfort with
                Cinnamon Hotels. Our exquisite accommodations, world-class
                amenities, and breathtaking locations redefine the meaning of
                relaxation and indulgence.
              </p>
              <button className="px-6 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-amber-300 focus:outline-none">
                Dicover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
