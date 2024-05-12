import React, { useEffect, useState } from "react";
import Chatbot from "../chatbot/Chatbot.tsx";
import { FestivalCard } from "./FestivalCard.tsx";
import errorImage from "../Finance/assets/error message.png";
import { Link } from "react-router-dom";
import { MdOutlineFestival } from "react-icons/md";

export const Festivals = () => {
  const [showFilters, setShowfilters] = useState(true);
  const [countryFilter, setCountryFilter] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Holiday[]>();
  const [dateFilter, setDateFilter] = useState("This year");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCountryFilter((prevState) => [...prevState, e.target.value])
      : setCountryFilter(countryFilter.filter((i) => i != e.target.value));
    return;
  };

  interface Holiday {
    id: number;
    country: string;
    date: string;
    day: string;
    iso: string;
    name: string;
    type: string;
    year: number;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://fourtitude.xyz/festival";
        const data = {
          countries: [
            "china",
            "india",
            "italy",
            "united kingdom",
            "vietnam",
            "new zealand",
            "australia",
          ],
          year: 2024,
        };

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          setError(true);
        }
        const result = await response.json();
        if (!result.success) setError(true);
        console.log(result.data.slice(0 - 30));
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData().catch(() => setError(true));
  }, []);

  const filteredData = data?.filter((item) => {
    const currentDate = new Date();
    let dateBoolean = true;

    if (dateFilter == "After Today") {
      const itemDate = new Date(item.date);
      dateBoolean = itemDate > currentDate;
    } else if (dateFilter == "After Two Months") {
      const twoMonthsLater = new Date(currentDate);
      twoMonthsLater.setMonth(currentDate.getMonth() + 2);
      const itemDate = new Date(item.date);
      dateBoolean = itemDate > twoMonthsLater;
    } else if (dateFilter == "This year") {
      const itemDate = new Date(item.date);
      dateBoolean = itemDate.getFullYear() === currentDate.getFullYear();
    } else if (dateFilter == "In the Next Two Weeks") {
      const itemDate = new Date(item.date);
      const differenceInMilliseconds =
        itemDate.getTime() - currentDate.getTime();
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      dateBoolean = differenceInDays <= 14 && differenceInDays >= 0;
    }

    return countryFilter.includes(item.country) && dateBoolean;
  });

  return (
    <>
      {error}
      <div className="2xl:container 2xl:mx-auto" id="festivalSection">
        <div className=" px-4 py-9 md:px-6 md:py-3 lg:px-28">
          <div className=" mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
              <MdOutlineFestival className=" text-myDarkPurple" />
              <h2 className=" ">Festivals</h2>
            </div>

            {/*  filters Button (md and plus Screen) */}
            <button
              onClick={() => setShowfilters(!showFilters)}
              className=" hidden cursor-pointer items-center justify-center border border-myBlack bg-myPurple  px-6 py-4 text-base font-normal leading-4 text-black hover:bg-purple-300 focus:ring focus:ring-gray-800 focus:ring-offset-2 sm:flex "
            >
              <svg
                className=" mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4V8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12V20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4V14"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4V5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9V20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </div>
          <p className=" text-xl font-medium leading-5 text-gray-600">
            {data == undefined ? "0" : filteredData?.length} Products
          </p>

          {/* Filters Button (Small Screen)  */}

          <button
            onClick={() => setShowfilters(!showFilters)}
            className="mt-6 block w-full cursor-pointer items-center justify-center bg-gray-800 py-2 text-base font-normal leading-4 text-white hover:bg-gray-700 focus:ring focus:ring-gray-800 focus:ring-offset-2 sm:hidden"
          >
            <svg
              className=" mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 4V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4V14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4V5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>

        <div
          id="filterSection"
          className={
            "relative w-full px-4 py-9 md:px-6 md:py-10 lg:px-28 " +
            (showFilters ? "block" : "hidden")
          }
        >
          {/* Cross button Code  */}
          <div
            onClick={() => setShowfilters(false)}
            className=" absolute right-0 top-0 cursor-pointer px-4 py-9 md:px-6 md:py-10 lg:px-20"
          >
            <svg
              className=" h-4 w-4 lg:h-6 lg:w-6"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 1L1 25"
                stroke="#1F2937"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L25 25"
                stroke="#27272A"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Date Section */}
          <div>
            <div className=" flex space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" text-xl font-medium leading-5 text-gray-800 lg:text-2xl lg:leading-6 ">
                Event Date
              </p>
            </div>
            <fieldset className=" mt-8 grid grid-cols-3 flex-wrap gap-y-8 md:flex md:space-x-6">
              <div className=" flex items-center justify-start space-x-2 md:items-center md:justify-center">
                <input
                  defaultChecked={true}
                  className=" mr-2 h-4 w-4"
                  type="radio"
                  id="This year"
                  name="This year"
                  checked={dateFilter === "This year"}
                  onChange={(e) => setDateFilter(e.target.id)}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="This year"
                    >
                      This year
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start space-x-2 md:items-center md:justify-center">
                <input
                  className="mr-2 h-4 w-4"
                  type="radio"
                  id="After Today"
                  name="After Today"
                  checked={dateFilter === "After Today"}
                  onChange={(e) => setDateFilter(e.target.id)}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="After Today"
                    >
                      After Today
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start space-x-2 md:items-center md:justify-center">
                <input
                  className="mr-2 h-4 w-4"
                  type="radio"
                  id="In the Next Two Weeks"
                  name="In the Next Two Weeks"
                  checked={dateFilter === "In the Next Two Weeks"}
                  onChange={(e) => setDateFilter(e.target.id)}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="In the Next Two Weeks"
                    >
                      In the Next Two Weeks
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start space-x-2 md:items-center md:justify-center">
                <input
                  className="mr-2 h-4 w-4"
                  type="radio"
                  id="After Two Months"
                  name="After Two Months"
                  checked={dateFilter === "After Two Months"}
                  onChange={(e) => setDateFilter(e.target.id)}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="After Two Months"
                    >
                      After Two Months
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <hr className=" my-8 w-full bg-gray-200 md:my-10 lg:w-6/12" />

          {/* Country Section */}
          <div>
            <div className=" flex space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H14"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7L14 5L12 3"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 3L3 5L5 7"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10V21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 19L19 21L21 19"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12L19 10L17 12"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="  text-xl font-medium leading-5 text-gray-800 lg:text-2xl lg:leading-6 ">
                Countries
              </p>
            </div>
            <div className=" mt-8 grid grid-cols-3 flex-wrap gap-y-8 md:flex md:space-x-6">
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="United Kingdom"
                  name="United Kingdom"
                  value="United Kingdom"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="United Kingdom"
                    >
                      United Kingdom
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="Australia"
                  name="Australia"
                  value="Australia"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="Australia"
                    >
                      Australia
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="New Zealand"
                  name="New Zealand"
                  value="New Zealand"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="New Zealand"
                    >
                      New Zealand
                    </label>
                    {/*  todo create array of selected countries*/}
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="China"
                  name="China"
                  value="China"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="China"
                    >
                      China
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="India"
                  name="India"
                  value="India"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="India"
                    >
                      India
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="Italy"
                  name="Italy"
                  value="Italy"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="Large"
                    >
                      Italy
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-start md:items-center md:justify-center ">
                <input
                  className="mr-2 h-4 w-4"
                  type="checkbox"
                  id="Vietnam"
                  name="Vietnam"
                  value="Vietnam"
                  onChange={handleChange}
                />
                <div className=" inline-block">
                  <div className=" flex items-center justify-center space-x-6">
                    <label
                      className=" mr-2 text-sm font-normal leading-3 text-gray-600"
                      htmlFor="Large"
                    >
                      Vietnam
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className=" my-8 w-full bg-gray-200 md:my-10 lg:w-6/12" />
        </div>
      </div>
      <div className="mx-auto  px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-4">
        <div className="-m-1 flex flex-wrap py-3 pb-8">
          {countryFilter.map((i) => (
            <>
              <span className="m-1 flex flex-wrap items-center justify-between rounded bg-gray-200 px-4 py-2 text-xs font-bold leading-loose hover:bg-gray-300 sm:text-sm">
                {i}
              </span>
              <div className="secondary divider divider-horizontal m-0 p-0" />
            </>
          ))}
          {dateFilter.length > 1 && (
            <span className="m-1 flex flex-wrap items-center justify-between rounded bg-gray-200 px-4 py-2 text-xs font-bold leading-loose hover:bg-gray-300 sm:text-sm ">
              {dateFilter}
            </span>
          )}
        </div>
        <div className="grid gap-x-8 gap-y-12 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
          {filteredData
            ?.slice(0, 20)
            .map((i, k) => (
              <FestivalCard
                description={""}
                name={i.name}
                type={i.country}
                month={i.date}
                key={k}
                id={i.id}
              />
            ))}
        </div>
        {filteredData?.length == 0 && (
          <div className="flex flex-col items-center justify-center">
            <img src={errorImage} className="w-44" alt="" />
            <h1 className="text-3xl">No Results Found</h1>
            <p>Try expanding your search</p>
          </div>
        )}
        <div className="my-4 py-8 pl-4">
          <Link
            to="/"
            className="group relative px-6 py-3 font-bold text-black"
          >
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
            <span className="relative">Go Back</span>
          </Link>
        </div>
        <Chatbot />
      </div>
    </>
  );
};
