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
  locationData: LocationData;
}

interface CensusData {
  ethnic: string;
  suburb: string;
  population: number;
  percentage: number;
}

interface AddressObj {
  street1: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
  addressString: string;
}

interface TripAdvisorData {
  locationId: string;
  name: string;
  distance: string;
  bearing: string;
  addressObj: AddressObj;
}

interface LocationData {
  census: CensusData;
  tripAdvisor: {
    data: TripAdvisorData[];
  };
}

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}

function formatPopulation(population: number): string {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const SuburbMap: React.FC<SuburbMapProps> = ({ locationData }) => {
  // TODO make dynamic once endpoint received
  const cityURL: string = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${locationData.census.suburb},melbourne+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

  const [style, setStyle] = useState("grayscale(1) contrast(1.2) opacity(0.4)");
  console.log(locationData);
  return (
    <section>
      <div className="mb-10 flex flex-col flex-wrap lg:py-12 lg:text-left">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Explore The Suburb Of{" "}
          <span className="text-blue-600 ">
            {toTitleCase(locationData.census.suburb)}.
          </span>{" "}
        </h1>
        <p className="py-4 text-lg font-normal text-gray-500 lg:text-xl">
          Looks like you have an interest in exploring more{" "}
          {toTitleCase(locationData.census.ethnic)} culture and cuisine.{" "}
          {toTitleCase(locationData.census.suburb)} is perfect for that. With a
          population of {formatPopulation(locationData.census.population)}, of
          whom {locationData.census.percentage.toFixed(2)}% are{" "}
          {toTitleCase(locationData.census.ethnic)}, we're sure you'll it
          amazing!
        </p>

        <h2 className="text-3xl font-bold">Top Places To Visit</h2>
        <p className="p-2">
          Check out some of the local's favourite places to dine and relax in!
        </p>
        <ul className="ml-6 list-decimal">
          {locationData.tripAdvisor.data.map((i) => (
            <li>{toTitleCase(i.name)}</li>
          ))}
        </ul>
      </div>
      <div className="body-font relative text-gray-600 ">
        <div className="absolute inset-0 border-2  bg-gray-300 hover:bg-opacity-0">
          <iframe
            width="100%"
            height="100%"
            title="map"
            scrolling="yes"
            src={cityURL}
            style={{
              filter: style,
              // height: "1300px"
            }}
            className=""
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24">
          <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-1 text-2xl font-medium text-gray-900">
              Recommendations
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Explore the best {toTitleCase(locationData.census.suburb)} has to
              offer!
            </p>

            <div className="-mb-10 flex flex-col flex-wrap text-center  lg:py-6 lg:text-left">
              {locationData.tripAdvisor.data.map((i) => (
                <MapItem
                  title={toTitleCase(i.name)}
                  description={toTitleCase(
                    `${i.addressObj.street1}, ${i.addressObj.city} ${i.addressObj.postalcode}`,
                  )}
                />
              ))}

              <button
                className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                onClick={() => setStyle("")}
              >
                Button
              </button>
              <p className="mt-3 text-xs text-gray-500">.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbMap;
