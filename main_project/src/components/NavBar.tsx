import logo from "../assets/diversity.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { PiPiggyBank } from "react-icons/pi";
// import { BsBank } from "react-icons/bs";
// import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import bg from "../assets/background copy.mp4";
import { IoMdClose } from "react-icons/io";
import { BsBank, BsSuitcaseLgFill } from "react-icons/bs";
import { FaChartLine, FaSortDown, FaStreetView } from "react-icons/fa";
import { FaEarthAfrica, FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSolidParty } from "react-icons/bi";

interface NavProps {
  styling?: string;
}
const NavBar: React.FC<NavProps> = ({ styling }) => {
  const [mobileView, setMobileView] = useState(false);
  const [viewFinanceDropDown, setViewFinanceDropDown] = useState(false);
  const [viewFestivalDropDown, setViewFestivalDropDown] = useState(false);

  const styles = styling
    ? (styling += " lg:px-12 lg:py-8")
    : "bg-gradient-to-r from-violet-200 to-pink-200 lg:px-12 lg:py-8";

  return (
    <>
      <nav className={styles}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border border-black bg-[#F1D6FE] pl-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16" alt="Wominjeka Logo" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold ">
              Wominjeka
            </span>
          </a>
          <div className="invisible flex border-black p-4 md:visible md:order-2 lg:border-l lg:bg-[#b686fe]">
            <div className="mx-auto max-w-md sm:visible">
              <form action="" className="relative mx-auto w-max hover:visible">
                <input className="peer relative z-10 h-12 w-12 cursor-pointer rounded-sm bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4 " />
              </form>
            </div>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="Search..."
              />
            </div>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
              <li>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/"
                  className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 ${
                    location.pathname === "/" ? "text-indigo-600" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <div className="flex space-x-4 ">
                <div className="relative">
                  <button
                    onClick={() => {
                      setViewFestivalDropDown((prevState) => !prevState);
                      setViewFinanceDropDown(false);
                    }}
                  >
                    <span
                      className={`flex flex-row gap-1 hover:text-indigo-600 ${
                        location.pathname.includes("culture") ||
                        location.pathname.includes("explore") ||
                        location.pathname.includes("festival")
                          ? "text-indigo-700"
                          : ""
                      }`}
                    >
                      Cultural Literacy <FaSortDown />
                    </span>
                  </button>
                  {viewFestivalDropDown && (
                    <div className="absolute z-40 mt-2 w-48 rounded-lg border border-black  bg-gradient-to-b from-[#F1D6FE] to-pink-200 shadow-lg">
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/cultures"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-200  ${
                          location.pathname.includes("/cultures")
                            ? "text-indigo-600"
                            : ""
                        }`}
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <FaEarthAfrica />
                          <p>Explore Countries</p>
                        </span>
                      </Link>
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/explore/"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-200  ${
                          location.pathname.includes("explore")
                            ? "text-indigo-600"
                            : ""
                        }`}
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <FaStreetView />
                          <p>Explore A Suburb</p>
                        </span>
                      </Link>
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/festivals/"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-200  ${
                          location.pathname.includes("/festival")
                            ? "text-indigo-600"
                            : ""
                        }`}
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <BiSolidParty />
                          <p>Festivals</p>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-4 ">
                <div className="relative">
                  <button
                    onClick={() => {
                      setViewFinanceDropDown((prevState) => !prevState);
                      setViewFestivalDropDown(false);
                    }}
                  >
                    <span
                      className={`flex flex-row gap-1 hover:text-indigo-600 ${
                        location.pathname.includes("finance")
                          ? "text-indigo-700"
                          : ""
                      }`}
                    >
                      Financial Literacy <FaSortDown />
                    </span>
                  </button>
                  {viewFinanceDropDown && (
                    <div className="absolute z-40 mt-2 w-48 rounded-lg border border-black  bg-gradient-to-b from-[#F1D6FE] to-pink-200 shadow-lg">
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/finance/rates"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <BsBank />
                          <p>Banking</p>
                        </span>
                      </Link>
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/finance/super"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <FaMoneyBillTrendUp />
                          <p>Superannuation</p>
                        </span>
                      </Link>
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <FaChartLine />
                          <p>Investments</p>
                        </span>
                      </Link>
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/jobs"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        <span className="flex flex-row items-center gap-2 ">
                          <BsSuitcaseLgFill />
                          <p>Work</p>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <li>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/about"
                  className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700  ${
                    location.pathname.includes("/about")
                      ? "text-indigo-600"
                      : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="mr-2 rounded p-3 hover:bg-purple-300 md:hidden"
            onClick={() => setMobileView((prevState) => !prevState)}
          >
            {!mobileView && <RxHamburgerMenu size={32} />}
            {mobileView && <IoMdClose size={32} />}
          </div>
        </div>
      </nav>
      {mobileView && (
        <div className="relative h-[calc(100vh-82px)] w-full overscroll-none bg-[#1D182D] md:hidden">
          <video
            autoPlay
            loop
            playsInline={true}
            muted
            className="absolute -top-24 left-0  z-0 h-screen w-full object-cover"
          >
            <source src={bg} type="video/mp4" />
          </video>
          <div className="container relative z-10 mx-auto h-[calc(100vh-50px)] text-left text-3xl text-white">
            <ul className="flex h-full flex-col items-center justify-center gap-8  font-mono ">
              <li>Home</li>
              <li>Explore Countries</li>
              <li>Explore A Suburb</li>
              <li>Financial Literacy</li>
              <li onClick={() => setMobileView((prevState) => !prevState)}>
                <IoMdClose />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
