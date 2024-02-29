import { useState, useEffect, useRef } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const SecondSectoionNav = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isDININGOpen, setIsDININGOpen] = useState(false);
  const [isEvetOpen, setisEvetOpen] = useState(false);
  const [isExprOpen, setIsExprOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsAboutOpen(false);
      setIsRoomsOpen(false);
      setIsDININGOpen(false);
      setIsExprOpen(false);
      setisEvetOpen(false);
    }
  };

  const toggleAbout = () => {
    setIsAboutOpen((prev) => !prev);
    setIsRoomsOpen(false);
    setIsDININGOpen(false);
    setIsExprOpen(false);
  };

  const toggleRooms = () => {
    setIsRoomsOpen((prev) => !prev);
    setIsAboutOpen(false);
    setIsDININGOpen(false);
    setIsExprOpen(false);
  };
  const toggleDINING = () => {
    setIsDININGOpen((prev) => !prev);
    setIsAboutOpen(false);
    setIsRoomsOpen(false);
    setIsExprOpen(false);
  };
  const toggleExper = () => {
    setIsExprOpen((prev) => !prev);
    setIsAboutOpen(false);
    setIsRoomsOpen(false);
    setIsDININGOpen(false);
  };
  const toggleEvent = () => {
    setisEvetOpen((prev) => !prev);
    setIsAboutOpen(false);
    setIsRoomsOpen(false);
    setIsDININGOpen(false);
    setIsExprOpen(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-[60px] text-[14px] md:flex-row flex-col ">
      <ul className="relative flex flex-row items-center gap-16 p-4 text-sm font-semibold list-none ">
        {/* About Section */}
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleAbout}
        >
          <span className="cursor-pointer hover:text-blue-600">ABOUT</span>
          {isAboutOpen ? (
            <MdOutlineKeyboardArrowUp className="w-8 h-8" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-8 h-8" />
          )}
        </li>
        {isAboutOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 right-0 flex flex-col items-start w-[100%] p-2 bg-white rounded-lg top-20 "
          >
            <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
              <h1 className="font-bold text-black cursor-pointer ">
                About The Hotel
              </h1>
              <h1 className="text-black cursor-pointer ">Overview</h1>
              <h1 className="text-black cursor-pointer ">Explore Colombo </h1>
              <h1 className="text-black cursor-pointer ">
                Services & Facilities Map & Directions
              </h1>
              <h1 className="text-black cursor-pointer ">Map & Directions</h1>
            </div>
          </div>
        )}

        {/* Rooms Section */}

        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleRooms}
        >
          <span className="cursor-pointer hover:text-blue-600">
            ROOMS & SUITES
          </span>
          {isRoomsOpen ? (
            <MdOutlineKeyboardArrowUp className="w-8 h-8" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-8 h-8" />
          )}
        </li>
        {isRoomsOpen && (
          <div
            ref={dropdownRef}
            className="absolute flex-row justify-around w-full gap-3 p-4 bg-white rounded-lg top-20 "
          >
            <div className="flex gap-4 space-x-20">
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Rooms
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Deluxe Lake View
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Deluxe Ocean View
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Premier Balcony
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Premier Ocean View
                </h2>
              </div>
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Horizon Club
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Horizon Club Lake View
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Horizon Club Ocean View
                </h2>
              </div>
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Suites
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Executive Suites
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Specialty Suites
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Shangri-La Suite
                </h2>
              </div>
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600">
                  Connecting Rooms
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Executive Suite & Premier Ocean Room Connecting
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Two Deluxe Lake View Rooms Connecting
                </h2>
              </div>
            </div>
            <hr className="w-full bg-slate-900" />
            <div className="p-2 mt-3 rounded-r-lg cursor-pointer ">
              <h1 className="text-black cursor-pointer hover:text-blue-600">
                ROOMS & SUITES OVERVIEW
              </h1>
            </div>
          </div>
        )}
        {/* dinner sectiom */}

        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleDINING}
        >
          <span className="cursor-pointer hover:text-blue-600">DINING</span>
          {isDININGOpen ? (
            <MdOutlineKeyboardArrowUp className="w-8 h-8" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-8 h-8" />
          )}
        </li>
        {isDININGOpen && (
          <div
            ref={dropdownRef}
            className="absolute flex-row justify-around w-full gap-3 p-4 bg-white rounded-lg top-20 "
          >
            <div className="flex space-x-20">
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Restaurants
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Cake Temptations by Shangri-La Colombo
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Capital Bar & Grill
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Tiki Bar
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Central
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Central café
                </h2>
              </div>
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Bars & Lounges
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Sapphyr Lounge
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Capital Bar & Grill
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Pool Bar
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Tiki Bar
                </h2>
              </div>
            </div>
            <hr className="w-full bg-slate-900" />
            <div className="p-2 mt-3 rounded-r-lg cursor-pointer ">
              <h1 className="text-black cursor-pointer hover:text-blue-600">
                DINING OVERVIEW
              </h1>
            </div>
          </div>
        )}

        {/*EXPERIENCE sectiopn  */}
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleExper}
        >
          <span className="cursor-pointer hover:text-blue-600">EXPERIENCE</span>
          {isExprOpen ? (
            <MdOutlineKeyboardArrowUp className="w-8 h-8" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-8 h-8" />
          )}
        </li>
        {isExprOpen && (
          <div
            ref={dropdownRef}
            className="absolute flex-row justify-around w-full gap-3 p-4 bg-white rounded-lg top-20 "
          >
            <div className="flex space-x-20">
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  For Kids
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Overview
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Adventure Zone
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Celebrations
                </h2>
              </div>
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Health & Leisure
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Health Club
                </h2>

                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Chi, The Spa
                </h2>
              </div>
            </div>
          </div>
        )}
        {/*EVENTS sectiopn  */}
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleEvent}
        >
          <span className="cursor-pointer hover:text-blue-600">EVENTS</span>
          {isEvetOpen ? (
            <MdOutlineKeyboardArrowUp className="w-8 h-8" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-8 h-8" />
          )}
        </li>
        {isEvetOpen && (
          <div
            ref={dropdownRef}
            className="absolute flex-row justify-around w-full gap-3 p-4 bg-white rounded-lg top-20 "
          >
            <div className="flex space-x-20">
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Meetings & Events
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Overview
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Experience It
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Outside Catering
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Request For Proposal
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Book Meeting Room Online
                </h2>
              </div>
              <div className="flex flex-col p-2 space-y-3 rounded-r-lg cursor-pointer ">
                <h1 className="font-bold text-black cursor-pointer hover:text-blue-600 ">
                  Wedding and Celebrations
                </h1>
                <h2 className="text-black cursor-pointer hover:text-blue-600 ">
                  Wedding Planning
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Weddings By Shangri-La{" "}
                </h2>
                <h2 className="text-black cursor-pointer hover:text-blue-600">
                  Request for Proposal
                </h2>
              </div>
            </div>
          </div>
        )}

        <li className="p-4 cursor-pointer hover:text-blue-600">GALLERY</li>
        <li className="p-4 cursor-pointer hover:text-blue-600">OFFERS</li>
        <li className="p-4 cursor-pointer hover:text-blue-600">MORE</li>
        <button className="p-2 border border-black hover:text-blue-600">
          {" "}
          FIND A HOTEL
        </button>
      </ul>
    </div>
  );
};

export default SecondSectoionNav;
