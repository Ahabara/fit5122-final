import { FaBriefcase } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import React, { useState } from "react";
import melbland from "./melbland.jpg";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  features: { title: string; description: string; link: string }[];
  img: string;
}
const BusinessOrPleasure: React.FC<Props> = (props: Props) => (
  <div className="container relative mx-auto p-6 md:p-6">
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
          <Link
            to={props.features[0].link}
            onClick={() => window.scrollTo(0, 0)}
            className=" active rounded-xl p-4 text-start hover:bg-purple-800  md:p-5"
          >
            <span className="flex">
              <svg
                className=" mt-2 size-6 flex-shrink-0  text-neutral-200 md:size-7"
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
                <span className=" block text-lg font-semibold  text-neutral-200">
                  {props.features[0].title}
                </span>
                <span className=" mt-1 block  text-neutral-200">
                  {props.features[0].description}
                </span>
              </span>
            </span>
          </Link>
          <Link
            to={props.features[1].link}
            onClick={() => window.scrollTo(0, 0)}
            className=" rounded-xl p-4 text-start  hover:bg-purple-800 md:p-5"
          >
            <span className="flex">
              <svg
                className=" mt-2 size-6 flex-shrink-0  text-neutral-200 md:size-7"
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
                <span className=" block text-lg font-semibold  text-neutral-200">
                  {props.features[1].title}
                </span>
                <span className=" mt-1 block  text-neutral-200">
                  {props.features[1].description}
                </span>
              </span>
            </span>
          </Link>
          <Link
            to={props.features[2].link}
            onClick={() => window.scrollTo(0, 0)}
            className=" rounded-xl p-4 text-start hover:bg-purple-800 md:p-5"
          >
            <span className="flex">
              <svg
                className=" mt-2 size-6 flex-shrink-0  text-neutral-200 md:size-7"
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
                <span className=" block text-lg font-semibold  text-neutral-200">
                  {props.features[2].title}
                </span>
                <span className=" mt-1 block  text-neutral-200">
                  {props.features[2].description}
                </span>
              </span>
            </span>
          </Link>
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
                className="aspect-[4/5] rounded-xl object-cover shadow-xl "
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
                className="aspect-square rounded-xl shadow-xl shadow-gray-200 "
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
              className="h-auto w-16 text-myDarkPurple"
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
  const festivalData: Props = {
    title: "Unlock the Vibrant Tapestry of Victoria's Culture!",
    features: [
      {
        title: "Explore The Different Cultures in Victoria",
        link: "/cultures",
        description:
          "Embark on a journey through Victoria's vibrant multicultural landscape, uncovering the essence of the top six cultural communities that shape the state's identity.",
      },
      {
        title: "Suburb Safari Interactive Exploration",
        link: "/explore",
        description:
          "Navigate Victoria's diverse suburbs and unearth hidden treasures with our interactive quiz, tailored to guide you through multicultural neighborhoods and enrich your city adventures.",
      },
      {
        title: "Festival Fiesta: Cultural Celebrations Unveiled",
        link: "/festivals",
        description:
          "Delve into the heart of cultural festivities with our comprehensive guide to the top six migrant countries' celebrations in Victoria, ensuring you never miss a beat of the vibrant festival scene.",
      },
    ],
    img: melbland,
  };

  const financeData: Props = {
    title: "Explore Finance: Managing Your Wealth Wisely",
    features: [
      {
        title: "Banking Basics",
        link: "/finance/rates",
        description:
          "Navigate Australia's banking landscape with confidence. Learn about the top banks, compare interest rates, and discover which institutions best suit your financial needs.",
      },
      {
        title: "Supercharge Your Super and Investments",
        link: "/finance/super",
        description:
          "Maximize your financial potential with insights into superannuation and investment strategies. Access an investment dashboard and gain fundamental knowledge to secure your financial future.",
      },
      {
        title: "Unlocking the Australian Job Market",
        link: "/jobs",
        description:
          "Uncover the secrets of the Australian job market. From understanding work culture to securing employment, equip yourself with the tools and steps needed to thrive in your career Down Under.",
      },
    ],
    img: "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80",
  };

  const [selected, setSelected] = useState(festivalData);
  return (
    <>
      <section className="min-h-screen w-full bg-neutral-900 py-24">
        <div className="container relative mx-auto gap-0">
          <div className="mx-8 sm:mx-0">
            <div className="lg:max-w-2xl lg:pr-5">
              <h2
                id="landing"
                className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-neutral-200 sm:text-6xl sm:leading-snug"
              >
                Whether You're Here For
                <span className="my-1 ml-1 inline-block border-b-8 border-black bg-myDarkPurple px-4 font-bold text-white">
                  Business
                </span>{" "}
                Or
                <span className="my-1 ml-1 inline-block border-b-8 border-black bg-myDarkPurple px-4 font-bold text-white">
                  Pleasure
                </span>
              </h2>
              <p className=" text-xl text-gray-200">
                Begin Your Journey In Victoria: Dive into Culture or Climb
                Financial Heights! Choose where to start: explore Victoria's
                culture or enhance your financial knowledge. Where will your
                adventure begin? Wominjeka is here to help, ensuring every step
                Down Under is easy!
              </p>
            </div>
            <div className="  text-white">
              <div className="flex justify-center  pt-4">
                <div className="inline-flex rounded-full border-2 border-gray-200 bg-gray-200  text-sm leading-none text-gray-500">
                  <button
                    className="inline-flex items-center rounded-l-full px-4 py-2 transition-colors duration-300 ease-in hover:text-blue-400 focus:rounded-full focus:bg-white focus:text-blue-400 focus:outline-none"
                    id="grid"
                    onClick={() => setSelected(festivalData)}
                    autoFocus={true}
                  >
                    <FaMasksTheater
                      width={24}
                      height={24}
                      className="mr-2 h-4 w-4 fill-current"
                    ></FaMasksTheater>
                    <span>Cultural Insights</span>
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
                    <span>Navigate Finances</span>
                  </button>
                </div>
              </div>
              <div className="w-/12  h-1/2 px-4 py-10 sm:px-6 lg:px-8 lg:py-4">
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
