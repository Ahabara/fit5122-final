import invest from "./invest.jpg";
import { TbEggs } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";

const Investments = () => {
  return (
    <>
      <section className="body-font text-gray-900">
        <div className="container mx-auto flex w-11/12 flex-col items-center px-5 py-8 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded-xl object-cover object-center"
              alt="hero"
              src={invest}
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-5xl">
              Invest in yourself. Invest in your future!
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to Australia, a land of opportunities! As you settle into
              your new home, understanding how to invest your hard-earned money
              wisely can be crucial for securing your financial future. This
              guide aims to provide you with a solid foundation in Australian
              investing, tailored specifically for recent migrants like
              yourself.
            </p>
          </div>
        </div>
      </section>
      <section className="body-font text-gray-900">
        <div className="container mx-auto w-11/12 px-5 py-8">
          <div className="mb-8 flex w-full flex-col flex-wrap  ">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Understanding the Australian Investment Landscape
            </h1>
            <p className="w-full leading-relaxed text-gray-800 lg:w-2/3">
              Australia boasts a dynamic and robust economy, offering a wide
              range of investment opportunities across various asset classes.
              From stocks and bonds to real estate and retirement accounts, the
              options may seem overwhelming at first. However, with a little
              guidance, you can navigate the Australian investment landscape
              with confidence.
            </p>
          </div>
          <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
            Key Investment Concepts
          </h1>
          <p className="w-full pb-8 leading-relaxed text-gray-800 lg:w-2/3">
            Before diving into specific investment strategies, it's essential to
            grasp some fundamental concepts:
          </p>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-myDarkPurple p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Risk and Return
                </h2>
                <p className="text-base leading-relaxed">
                  Understand the relationship between risk and potential return.
                  Generally, higher returns are associated with higher risk
                  investments.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-myDarkPurple p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <TbEggs
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  ></TbEggs>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Diversification
                </h2>
                <p className="text-base leading-relaxed">
                  Spread your investments across different asset classes to
                  reduce risk. Diversification helps protect your portfolio from
                  the impact of a single investment's poor performance.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-myDarkPurple p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <FaRegClock
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-6 w-6"
                  ></FaRegClock>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Time Horizon
                </h2>
                <p className="text-base leading-relaxed">
                  Consider your investment time horizon, or how long you plan to
                  hold your investments. Longer time horizons may allow you to
                  take on more risk for potentially higher returns.
                </p>
              </div>
            </div>
            <div className="mb-8 ml-4 mt-4 flex w-full flex-col flex-wrap  ">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                Investment Options in Australia
              </h1>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-myDarkPurple p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <AiOutlineStock className="h-6 w-6"></AiOutlineStock>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Share Market (ASX):
                </h2>
                <p className="text-base leading-relaxed">
                  The Australian Securities Exchange (ASX) is the primary stock
                  exchange in Australia, where publicly listed companies offer
                  shares to investors. Investing in stocks provides an
                  opportunity to become a partial owner of Australian businesses
                  and participate in their growth.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-myDarkPurple p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <BsHouseDoor
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  ></BsHouseDoor>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Real Estate
                </h2>
                <p className="text-base leading-relaxed">
                  Property investment is popular in Australia due to its
                  potential for capital growth and rental income. Whether it's
                  residential, commercial, or industrial property, real estate
                  can be a lucrative long-term investment.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg border border-myDarkPurple p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <GrUserManager className="h-6 w-6"></GrUserManager>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Managed Funds
                </h2>
                <p className="text-base leading-relaxed">
                  Managed funds pool money from multiple investors to invest in
                  a diversified portfolio of assets managed by professional fund
                  managers. These funds offer access to a wide range of
                  investment opportunities, including stocks, bonds, and
                  property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto w-11/12 px-5 py-4">
          <p className="py-8 text-4xl text-neutral-800 ">
            Before Getting Started
          </p>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pb-24 pt-16 text-center">
                <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
                  Understand the Market
                </h1>
                <p className="mb-3 leading-relaxed">
                  Before diving in, take the time to understand the Australian
                  market. This includes familiarizing yourself with the economy,
                  key industries, real estate trends, and investment
                  opportunities.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pb-24 pt-16 text-center">
                <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
                  Understand the ASX
                </h1>
                <p className="mb-3 leading-relaxed">
                  The ASX is the primary stock exchange in Australia where
                  publicly listed companies offer shares to investors. The ASX
                  facilitates the buying and selling of securities, providing a
                  platform for individuals and institutions to invest in
                  Australian companies.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pb-24 pt-16 text-center">
                <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
                  Stay Informed
                </h1>
                <p className="mb-3 leading-relaxed">
                  Keep yourself updated on the latest market news, economic
                  trends, and regulatory changes that may impact your
                  investments. Subscribe to financial news publications, follow
                  reputable investment blogs, and attend seminars or webinars to
                  stay informed.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8 flex w-full flex-col flex-wrap  py-8 ">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Seeking Professional Advice
            </h1>
            <p className="w-full py-4 leading-relaxed text-gray-800 lg:w-2/3">
              While this guide provides a solid overview, investing can be
              complex, especially in a new country. Consider seeking guidance
              from a licensed financial advisor who understands the unique needs
              and circumstances of recent migrants. A professional advisor can
              help tailor an investment strategy that aligns with your financial
              goals and risk tolerance.
            </p>
            <p className="w-full py-4 leading-relaxed text-gray-800 lg:w-2/3">
              Investing in Australia offers tremendous opportunities for recent
              migrants to build wealth and achieve financial security. By
              understanding the basics of Australian investing, staying
              informed, and seeking professional advice when needed, you can
              embark on a journey towards a brighter financial future in your
              new home.
            </p>
            <p className="w-full py-4 leading-relaxed text-gray-800 lg:w-2/3">
              Remember, investing is a long-term endeavor, and patience,
              discipline, and ongoing education are key to success. Welcome to
              Australia, and happy investing!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investments;
