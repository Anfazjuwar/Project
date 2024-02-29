import logo from "../assets/logo.png";
import { FaUser, FaMobile } from "react-icons/fa";
import SecondSectoionNav from "./SecondSectoionNav";
import image1 from "../assets/sildeImage/image1.jpeg";
import image2 from "../assets/sildeImage/image2.jpeg";
import image3 from "../assets/sildeImage/image3.jpeg";
import image4 from "../assets/sildeImage/image4.jpeg";
import { RxDotFilled } from "react-icons/rx";
import "./NavBar.css";

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const Navbar = () => {
  const sildes = [
    {
      url: image1,
      text: "Welcome to  AZ Colombo Colombo",
      desc: "Discover luxury and comfort at  AZ Colombo Colombo. Experience unparalleled hospitality and breathtaking views.",
    },
    {
      url: image2,
      text: "Explore  AZ Colombo Colombo",
      desc: "Embark on a journey through the enchanting world of AZ Colombo. Indulge in world-class amenities and exceptional service.",
    },
    {
      url: image3,
      text: "Discover Serenity at Shangri-La Colombo",
      desc: "Immerse yourself in tranquility and serenity at AZ Colombo. Let us pamper you with our luxurious accommodations and serene ambiance.",
    },
    {
      url: image4,
      text: "Experience Luxury at  AZ Colombo",
      desc: "Experience the epitome of luxury at  AZ Colombo. Elevate your stay with our opulent facilities and personalized service.",
    },
  ];

  const [cureentIndex, setCurentInex] = useState(0);
  const [showSideBar, setShowSidebar] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = cureentIndex === 0;
    const nexIndex = isFirstSlide ? sildes.length - 1 : cureentIndex - 1;
    setCurentInex(nexIndex);
  };
  const nextlide = () => {
    const islastSlides = cureentIndex === sildes.length - 1;
    const newIndex = islastSlides ? 0 : cureentIndex + 1;
    setCurentInex(newIndex);
  };

  const gotoSilde = (slideIndex) => {
    setCurentInex(slideIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(nextlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [cureentIndex]);

  return (
    <header className="max-w-full h-[780px] w- m-auto  px-0 relative ">
      <div
        style={{ backgroundImage: `url(${sildes[cureentIndex].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover "
      >
        <div
          style={{ zIndex: 9999 }}
          className={`${
            showSideBar ? "hidden" : "flex"
          } xl:hidden lg:hidded flex-col justify-between p-4 text-white bg-[#000] opacity-90 w-[4%] hover:w-[15%] h-[100vh]  fixed `}
          id="navigation-container"
        >
          <div className="flex flex-col justify-center space-y-4">
            <li
              to="/"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <img src={logo} className="mr-2 w-10 mt-[3rem]" />
              <span className="hidden nav-item-name mt-[3rem]">
                AZ Colombo{" "}
              </span>
            </li>
            <li
              to="/"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <span className="hidden nav-item-name mt-[3rem]">Home</span>
            </li>
            <li
              to="/shop"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <FaUser className="mr-2 mt-[3rem] " size={26} />
              <span className="hidden nav-item-name mt-[3rem]">SignUp</span>
            </li>
            <li
              to="/cart"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <span className="hidden nav-item-name mt-[3rem]">Join Now</span>
            </li>
            <li
              to="/favourite"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <span className="hidden nav-item-name mt-[3rem]">
                Find reservation
              </span>
            </li>
          </div>
        </div>
        {/* left arrow */}
        <div className="  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-white/20 cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} sizi={30} />
        </div>
        {/* right arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-white/20 cursor-pointer">
          <BsChevronCompactRight onClick={nextlide} size={30} />
        </div>
        <div className="hidden md:block group">
          <nav className="  group-hover:bg-white group-hover:text-black  text-white justify-between items-center w-full h-[60px] tesxt-[14px] flex flex-col lg:flex-row focus:outline-none ">
            <div className="flex items-center gap-4 pl-48">
              <img src={logo} className="w-10" alt="Logo" />
              <p className="text-lg font-semibold hover:text-blue-600">
                AZ Colombo
              </p>
            </div>
            <ul className="flex items-center gap-4 pr-48 text-sm font-semibold list-none md:flex ">
              <li className="flex gap-2 p-4 border-r-2 border-gray-400 cursor-pointer hover:text-blue-600 ">
                <FaUser />
                Sign In
              </li>

              <li className="p-4 border-r-2 border-gray-400 hover:text-blue-600 ">
                Join Now
              </li>
              <li className="p-4 border-r-2 border-gray-400 hover:text-blue-600 ">
                Find reservation
              </li>
              <li className="p-4 border-r-2 border-gray-400 hover:text-blue-600 ">
                English
              </li>
              <li className="p-4 border-r-2 border-gray-400 hover:text-blue-600 ">
                USD
              </li>
              <li className="p-4">
                <FaMobile />
              </li>
            </ul>
          </nav>
          <hr className="bg-black " />
          <div className="text-white group-hover:bg-stone-300 group-hover:text-black focus:outline-none">
            <SecondSectoionNav />
          </div>
        </div>
        <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-4xl font-bold uppercase">
            {sildes[cureentIndex].text}
          </h1>
          <h2 className="font-bold uppercase text-md">
            {sildes[cureentIndex].desc}
          </h2>
        </div>

        <div className="absolute flex items-center justify-center w-full p-4 text-white bottom-4">
          <form>
            {" "}
            <div className="flex items-center justify-center p-8 m-2 space-x-4 bg-orange-50 bg-opacity-10">
              <input
                type="date"
                className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="number"
                placeholder="Check-out"
                className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Rooms"
                className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="px-6 py-2 text-white rounded-md bg-amber-600 hover:bg-amber-300 focus:outline-none">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute right-10 text-white flex justify-center top-[30%]">
        {sildes.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => gotoSilde(slideIndex)}
            className="text-2xl cursor-pointer hover:text-blue-600"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
