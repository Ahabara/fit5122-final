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
          <p>© 2024 Team FourReal</p>
        </div>
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
