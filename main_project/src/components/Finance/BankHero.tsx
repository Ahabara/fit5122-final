import bankPhoto from "./assets/8069143.png";
import { AiOutlineBank } from "react-icons/ai";
import { Link } from "react-router-dom";

const BankHero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-[580px] blur-xl"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="mx-auto max-w-screen-xl gap-12 overflow-hidden px-4 py-28 text-gray-600 md:flex md:px-8">
            <div className="max-w-xl flex-none space-y-5">
              <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
                Get Your Finance Sorted
              </h1>
              <p>
                Are you new to Australia and curious about how banking works in
                this beautiful country? Are you unsure of what you need to get
                yourself settled in? Whatever your reason, we're here to provide
                you with a comprehensive overview of banking in Australia.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href={"#BankInformation"}
                  className="flex items-center justify-center gap-x-1 rounded-full bg-gray-800 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <Link
                  to={"/finance/banks"}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center justify-center gap-x-1 rounded-full bg-gray-600 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
                >
                  Compare Banks
                  <AiOutlineBank className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="hidden flex-1 md:block">
              {/* Replace with your image */}
              <img src={bankPhoto} className="max-w-xl" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BankHero;
