import Logo from "../assets/diversity.png";
import React from "react";
import { twMerge } from "tailwind-merge";
import AboriginalFlag from "../assets/Australian_Aboriginal_Flag.svg";
import fourreal from "../assets/FourReal.svg";

interface FooterProps {
  styling?: string;
}
const Footer: React.FC<FooterProps> = ({ styling }) => {
  let styles: string;
  if (styling) {
    styles = twMerge("body-font", styling);
  } else
    styles =
      "text-gray-600 body-font bg-gradient-to-r from-violet-200 to-pink-200";

  return (
    <footer className={styles}>
      <div className="container mx-auto flex flex-col items-center px-5 py-2 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium  md:justify-start">
          <img
            src={Logo}
            alt="Wominjaka Logo"
            className="h-10 w-10 rounded-md   text-white"
          />
          <span className="ml-3 text-xl">Wominjeka</span>
        </a>
        <div className="mt-4  text-sm sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          <div className="ml-1 flex">
            <img src={fourreal} alt="" className="w-12" />
          </div>
          <p>© 2024 Team FourReal —</p>
        </div>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
      <div className="container mx-auto flex align-middle">
        <img
          src={AboriginalFlag}
          alt="Aboriginal Flag"
          className="w-12 rounded-2xl"
        />
        <p className=" py-2 pl-2 text-xs font-light">
          In the spirit of reconciliation we acknowledge the Traditional
          Custodians of country throughout Australia and their connections to
          land, sea and community. We pay our respect to their elders past and
          present and extend that respect to all Aboriginal and Torres Strait
          Islander peoples today.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
