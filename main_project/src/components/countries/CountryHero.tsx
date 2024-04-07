import React from "react";

interface CountryHeroProps {
  countryName: string;
  about: string;
}

export const CountryHero: React.FC<CountryHeroProps> = ({
  countryName,
  about,
}) => {
  return (
    <>
      <h1 className="pb-24 pt-8 text-5xl font-extrabold lg:pt-0">
        Learn More About
        <strong className=" font-extrabold text-white">
          {" "}
          <span className="bg-myPurple ">
            {countryName?.toUpperCase()}
          </span>{" "}
        </strong>
      </h1>
      <div className="mb-20 flex w-full flex-wrap">
        <div className="mb-6 flex w-full gap-6 align-middle lg:mb-0">
          <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-6xl">
            {countryName?.toUpperCase()}
          </h1>
          <p className="w-full leading-relaxed text-gray-500 ">{about}</p>
        </div>
      </div>
    </>
  );
};
