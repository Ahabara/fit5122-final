import React from "react";
import { Link } from "react-router-dom";

interface CTAProps {
  title: string;
  link: string;
  paragraph: string;
}
const CTA: React.FC<CTAProps> = ({ title, paragraph, link }) => (
  <div className="">
    <div className=" mx-auto max-w-7xl py-12 ">
      <div className="relative isolate overflow-hidden border-2 border-myDarkPurple px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-4 md:pt-24 lg:flex lg:gap-x-8 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">{paragraph}</p>
          <div className="mt-4 flex items-center justify-center gap-x-6 lg:justify-start">
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={link}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative px-6 py-3 font-bold text-black"
              >
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
                <span className="relative">Take Me There!</span>
              </Link>
              <Link
                to="/"
                className="group relative inline-block px-4 py-2 font-medium"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-myPurple transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-myPurple"></span>
                <span className="relative font-bold text-black group-hover:text-black">
                  Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
