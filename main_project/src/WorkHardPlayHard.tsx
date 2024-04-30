import { FaBriefcase } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import React, { useState } from "react";

interface Props {
  title: string;
  features: { title: string; description: string }[];
  img: string;
}
const BusinessOrPleasure: React.FC<Props> = (props: Props) => (
  <div className="relative p-6 md:p-16">
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
        <h2 className="text-2xl font-bold  text-neutral-200 sm:text-3xl">
          {props.title}
        </h2>
        <nav
          className="mt-5 grid gap-4 md:mt-10"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent hs-tab-active:bg-neutral-700 active rounded-xl p-4 text-start hover:bg-gray-200 hover:bg-neutral-700 md:p-5"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
          >
            <span className="flex">
              <svg
                className="hs-tab-active:text-blue-600 hs-tab-active:text-blue-500 mt-2 size-6 flex-shrink-0  text-neutral-200 md:size-7"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
              </svg>
              <span className="ms-6 grow">
                <span className="hs-tab-active:text-blue-600 hs-tab-active:text-blue-500 block text-lg font-semibold  text-neutral-200">
                  {props.features[0].title}
                </span>
                <span className="hs-tab-active:text-gray-200 mt-1 block  text-neutral-200">
                  {props.features[0].description}
                </span>
              </span>
            </span>
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent hs-tab-active:bg-neutral-700 rounded-xl p-4 text-start hover:bg-gray-200 hover:bg-neutral-700 md:p-5"
            id="tabs-with-card-item-2"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab"
          >
            <span className="flex">
              <svg
                className="hs-tab-active:text-blue-600 hs-tab-active:text-blue-500 mt-2 size-6 flex-shrink-0  text-neutral-200 md:size-7"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
              <span className="ms-6 grow">
                <span className="hs-tab-active:text-blue-600 hs-tab-active:text-blue-500 block text-lg font-semibold  text-neutral-200">
                  {props.features[1].title}
                </span>
                <span className="hs-tab-active:text-gray-200 mt-1 block  text-neutral-200">
                  {props.features[1].description}
                </span>
              </span>
            </span>
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent hs-tab-active:bg-neutral-700 rounded-xl p-4 text-start hover:bg-gray-200 hover:bg-neutral-700 md:p-5"
            id="tabs-with-card-item-3"
            data-hs-tab="#tabs-with-card-3"
            aria-controls="tabs-with-card-3"
            role="tab"
          >
            <span className="flex">
              <svg
                className="hs-tab-active:text-blue-600 hs-tab-active:text-blue-500 mt-2 size-6 flex-shrink-0  text-neutral-200 md:size-7"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              <span className="ms-6 grow">
                <span className="hs-tab-active:text-blue-600 hs-tab-active:text-blue-500 block text-lg font-semibold  text-neutral-200">
                  {props.features[2].title}
                </span>
                <span className="hs-tab-active:text-gray-200 mt-1 block  text-neutral-200">
                  {props.features[2].description}
                </span>
              </span>
            </span>
          </button>
        </nav>
      </div>
      <div className="lg:col-span-6">
        <div className="relative">
          <div>
            <div
              id="tabs-with-card-1"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-1"
            >
              <img
                className="rounded-xl shadow-xl shadow-gray-200 "
                src={props.img}
                alt="Image Description"
              />
            </div>
            <div
              id="tabs-with-card-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-2"
            >
              <img
                className="rounded-xl shadow-xl shadow-gray-200 "
                src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                alt="Image Description"
              />
            </div>
            <div
              id="tabs-with-card-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-3"
            >
              <img
                className="rounded-xl shadow-xl shadow-gray-200 "
                src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                alt="Image Description"
              />
            </div>
          </div>
          <div className="absolute end-0 top-0 hidden translate-x-20 md:block lg:translate-x-20">
            <svg
              className="h-auto w-16 text-orange-500"
              width={121}
              height={135}
              viewBox="0 0 121 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                stroke="currentColor"
                strokeWidth={10}
                strokeLinecap="round"
              />
              <path
                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                stroke="currentColor"
                strokeWidth={10}
                strokeLinecap="round"
              />
              <path
                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                stroke="currentColor"
                strokeWidth={10}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 grid size-full grid-cols-12">
      <div className="col-span-full h-5/6 w-full rounded-xl  bg-neutral-800 sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full" />
    </div>
  </div>
);

const WorkHardPlayHard = () => {
  // interface Props {
  //   title: string;
  //   features: { title: string; description: string }[];
  //   img: string;
  // }

  const festivalData: Props = {
    title: "Explore ALl The Fun Australia Has To Offer",
    features: [
      {
        title: "Example 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        title: "Example 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        title: "Example 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm",
  };

  const financeData: Props = {
    title: "Explore Finance: Managing Your Wealth Wisely",
    features: [
      {
        title: "Investment Strategies",
        description:
          "Learn about various investment strategies, from stocks and bonds to real estate and cryptocurrencies, and how to build a diversified portfolio.",
      },
      {
        title: "Budgeting Tips",
        description:
          "Discover effective budgeting techniques to manage your expenses, save money, and achieve your financial goals.",
      },
      {
        title: "Financial Planning",
        description:
          "Understand the importance of financial planning, including retirement planning, estate planning, and risk management, to secure your financial future.",
      },
    ],
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  };

  const [selected, setSelected] = useState(festivalData);
  return (
    <>
      <section className="min-h-screen w-full bg-neutral-900 py-24">
        <div className="container relative mx-auto gap-0">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-neutral-200 sm:text-6xl sm:leading-snug">
                Whether You're Here For
                <span className="my-1 ml-1 inline-block border-b-8 border-black bg-myDarkPurple px-4 font-bold text-white">
                  Business
                </span>{" "}
                Or
                <span className="my-1 ml-1 inline-block border-b-8 border-black bg-myDarkPurple px-4 font-bold text-white">
                  Pleasure
                </span>
              </h2>
              <p className="text-base text-gray-200">
                Settling in to a new country doesn't mean you have to settle on
                you bank interest rates. We've compiled the best interest rates
                in Australia. All you have to do is choose on. Need help
                picturing how much you'll earn? Press on the bank and let us do
                the rest!
              </p>
            </div>
            <div className="text-white">
              {selected.toString()}
              <div className="flex justify-center pt-4">
                <div className="inline-flex rounded-full border-2 border-gray-200 bg-gray-200 text-sm leading-none text-gray-500">
                  <button
                    className="inline-flex items-center rounded-l-full px-4 py-2 transition-colors duration-300 ease-in hover:text-blue-400 focus:rounded-full focus:bg-white focus:text-blue-400 focus:outline-none"
                    id="grid"
                    onClick={() => setSelected(festivalData)}
                  >
                    <FaMasksTheater
                      width={24}
                      height={24}
                      className="mr-2 h-4 w-4 fill-current"
                    ></FaMasksTheater>
                    <span>Pleasure</span>
                  </button>
                  <button
                    className="inline-flex items-center rounded-r-full px-4 py-2 transition-colors duration-300 ease-in hover:text-blue-400 focus:rounded-full focus:bg-white focus:text-blue-400   focus:outline-none "
                    onClick={() => setSelected(financeData)}
                  >
                    <FaBriefcase
                      width={24}
                      height={24}
                      className="mr-2 h-4 w-4 fill-current"
                    ></FaBriefcase>
                    <span>Business</span>
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-4">
                <BusinessOrPleasure {...selected} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkHardPlayHard;
