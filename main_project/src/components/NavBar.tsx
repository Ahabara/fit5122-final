import logo from "../assets/diversity.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

interface searchProps {
  search: string;
}

const SearchList: React.FC<searchProps> = ({ search }) => {
  const dropdown = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Learn Culture", link: "/#Countries" },
    { id: 3, name: "Play Game", link: "/#game" },
    { id: 4, name: "England", link: "/country/England" },
    { id: 5, name: "China", link: "/country/China" },
    { id: 6, name: "India", link: "/country/India" },
    { id: 7, name: "Vietnam", link: "/country/Vietnam" },
    { id: 8, name: "New Zealand", link: "/country/New Zealand" },
    { id: 9, name: "Italy", link: "/country/Italy" },
    { id: 10, name: "Explore a Suburb", link: "/explore/" },
  ];
  const filteredOptions = dropdown.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <ul>
        {filteredOptions.map((i) => (
          <Link
            to={i.link}
            className="block cursor-pointer rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100"
          >
            {i.name}
          </Link>
        ))}
      </ul>
    </>
  );
};
const NavBar = () => {
  const [search, setSearch] = useState("");
  return (
    <nav className="bg-gradient-to-r from-violet-200 to-pink-200 lg:px-12 lg:py-8 ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border border-black bg-[#F1D6FE] pl-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16" alt="Wominjeka Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            Wominjeka
          </span>
        </a>
        <div className="flex border-black p-4 md:order-2 lg:border-l lg:bg-[#b686fe]">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="me-1 rounded-lg  p-2.5  text-sm text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden"
          >
            <svg
              className="h-5 w-5"
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
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete={"off"}
              className="block w-full border border-black  bg-gray-50 p-2 ps-10 text-sm    text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search..."
            />
            {search && (
              <div
                id="dropdown-menu w-64 "
                className="absolute right-0 z-10 space-y-1 bg-white p-1 pr-10 shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <SearchList search={search} />
              </div>
            )}
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
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
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${
                  location.pathname === "/" ? "text-blue-800" : ""
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#Countries"
                className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${
                  location.pathname.includes("/country") ? "text-blue-800" : ""
                }`}
              >
                Explore Countries
              </a>
            </li>
            <li>
              <Link
                to="/explore/"
                className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${
                  location.pathname === "/explore/" ? "text-blue-800" : ""
                }`}
              >
                Explore A Suburb
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
