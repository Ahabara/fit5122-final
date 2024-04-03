import React, { useState } from "react";

interface MapItemProps {
  title: string;
  description: string;
  link?: URL;
}
const MapItem: React.FC<MapItemProps> = ({ title, description }) => (
  <div className="mb-10 flex flex-col items-center lg:items-start">
    <div className="flex-grow">
      <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
        {title}
      </h2>
      <p className="text-base leading-relaxed">{description}</p>
      <a className="mt-3 inline-flex items-center text-indigo-500">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="ml-2 h-4 w-4"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
);

interface SuburbMapProps {
  city: string;
}
const SuburbMap: React.FC<SuburbMapProps> = ({ city }) => {
  // TODO make dynamic once endpoint received
  const cityURL: string = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${city},melbourne+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

  const [style, setStyle] = useState("grayscale(1) contrast(1.2) opacity(0.4)");
  return (
    <section>
      <div className="mb-10 flex flex-col flex-wrap lg:py-6  lg:text-left">
        <h2 className="text-3xl font-bold">Top Places To Visit</h2>
        <p>Check our some of the locals favourite places</p>
        <ul className="ml-6 list-decimal">
          <li>Monash</li>
          <li>Not Monash</li>
          <li>Not Monash</li>
        </ul>
      </div>
      <div className="body-font relative text-gray-600 ">
        <p>{cityURL}</p>
        <div className="absolute inset-0 border-2  bg-gray-300 hover:bg-opacity-0">
          <iframe
            width="100%"
            height="100%"
            title="map"
            scrolling="yes"
            // src={cityURL}
            style={{
              filter: style,
              // height: "1300px"
            }}
            className=""
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24">
          <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Recommendations
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Explore the best Clayton has to offer!
            </p>

            <div className="-mb-10 flex flex-col flex-wrap text-center  lg:py-6 lg:text-left">
              <MapItem title={"Monash"} description={"Very Bad"} />
              <MapItem
                title={"The Catalyzer"}
                description={
                  "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                }
              />
              <MapItem
                title={"Neptune"}
                description={
                  "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine"
                }
              />
            </div>
            <button
              className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              onClick={() => setStyle("")}
            >
              Button
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbMap;
