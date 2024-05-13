import { Link, useLocation } from "react-router-dom";
import logo from "./assets/diversity.png";

const PageNotFound = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <div className="min-w-screen relative flex min-h-screen items-center overflow-hidden bg-myPurple p-5 lg:p-20">
        <div className="relative min-h-full min-w-full flex-1 items-center rounded-3xl bg-white p-10 text-center text-gray-800 shadow-xl md:flex md:text-left lg:p-20">
          <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20">
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-16" alt="Wominjeka Logo" />
                <span className="self-center whitespace-nowrap font-mono text-2xl font-bold ">
                  Wominjeka
                </span>
              </Link>
            </div>
            <div className="mb-10 font-light text-gray-600 md:mb-20">
              <h1 className="mb-10 text-3xl font-black uppercase text-myDarkPurple lg:text-5xl">
                You seem to be lost!
              </h1>
              <p>The page you're looking for isn't available.</p>
              <p>
                The page{" "}
                <strong className="font-bold">
                  {pathname.split("/")[pathname.split("/").length - 1]}
                </strong>{" "}
                does not exist.
              </p>
            </div>
            <div className="mb-20 md:mb-0">
              <Link
                to={"/"}
                className="transform text-lg font-light text-myPink outline-none transition-all hover:scale-110 hover:text-pink-500 focus:outline-none"
              >
                <i className="mdi mdi-arrow-left mr-2"></i>Go Back
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-64 right-20 h-96 w-64 -rotate-45 transform rounded-full bg-myDarkPurple bg-opacity-30 md:-top-96 md:right-32 md:h-full md:w-96"></div>
        <div className="pointer-events-none absolute -bottom-96 right-64 h-full w-96 -rotate-45 transform rounded-full bg-myPink bg-opacity-20"></div>
      </div>
    </div>
  );
};

export default PageNotFound;
