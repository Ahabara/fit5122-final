import React from "react";

interface CountryHeroProps {
    countryName?: string,
    about: string
}

export const CountryHero: React.FC<CountryHeroProps> = ({countryName, about}) => {
    return (
        <>
            <h1 className="pt-8 lg:pt-0 font-extrabold text-5xl pb-24">
                Learn More About
                <strong className=" font-extrabold text-white"> <span
                    className="bg-myPurple ">{countryName?.toUpperCase()}</span> </strong>
            </h1>
            <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/5 align-middle w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-6xl text-2xl font-medium title-font mb-2 text-gray-900">{countryName?.toUpperCase()}</h1>
                </div>
                <p className="lg:w-4/5 w-full leading-relaxed text-gray-500">{about}</p>
            </div>
        </>
    );
};