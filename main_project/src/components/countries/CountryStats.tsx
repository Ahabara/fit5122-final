import React from "react";
import food from "./assets/graph.png";
import { Tabs } from "./Tabs.tsx";

interface DemographicInfo {
  group: string;
  subGroup: string;
  populationNumber: number;
  populationPercentage: number;
}

const CountryStats: React.FC<{ data: DemographicInfo[] }> = ({ data }) => {
  function formatNumberWithCommas(str: string): string {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const pieData = [
    { name: data[0].subGroup, value: data[0].populationNumber },
    { name: data[1].subGroup, value: data[1].populationNumber },
  ];

  const ageData = [
    { name: data[2].subGroup, value: data[2].populationNumber },
    { name: data[3].subGroup, value: data[3].populationNumber },
    { name: data[4].subGroup, value: data[4].populationNumber },
    { name: data[5].subGroup, value: data[5].populationNumber },
    { name: data[6].subGroup, value: data[6].populationNumber },
    { name: data[7].subGroup, value: data[7].populationNumber },
    { name: data[8].subGroup, value: data[8].populationNumber },
  ];

  const yearOf = [
    { name: data[9].subGroup, value: data[9].populationNumber },
    { name: data[10].subGroup, value: data[10].populationNumber },
    { name: data[11].subGroup, value: data[11].populationNumber },
    { name: data[12].subGroup, value: data[12].populationNumber },
    { name: data[13].subGroup, value: data[13].populationNumber },
    { name: data[14].subGroup, value: data[14].populationNumber },
    { name: data[15].subGroup, value: data[15].populationNumber },
    { name: data[16].subGroup, value: data[16].populationNumber },
    { name: data[17].subGroup, value: data[17].populationNumber },
  ];
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="-mx-4 mb-auto mt-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
          <div className="mb-6 w-full px-4 sm:p-4">
            <div className="flex items-center py-8">
              <img
                src={food}
                alt="Description of image"
                className=" mr-2 h-12"
              />
              <p className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
                Demographics
              </p>
            </div>
            <div className="leading-relaxed">
              Explore the rich tapestry of demographics, where every statistic
              tells a story of diversity, culture, and community.
            </div>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="title-font text-3xl font-medium text-gray-900">
              {formatNumberWithCommas(data[0].populationNumber.toString())}
            </h2>
            <p className="leading-relaxed">Men</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="title-font text-3xl font-medium text-gray-900">
              {formatNumberWithCommas(data[1].populationNumber.toString())}
            </h2>
            <p className="leading-relaxed">Women</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="title-font text-3xl font-medium text-gray-900">
              {formatNumberWithCommas(
                (
                  data[2].populationNumber + data[3].populationNumber
                ).toString(),
              )}
            </h2>
            <p className="leading-relaxed">Are Under 25</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="title-font text-3xl font-medium text-gray-900">
              {formatNumberWithCommas(
                data[data.length - 1].populationNumber.toString(),
              )}
            </h2>
            <p className="leading-relaxed">Arrived after 2016</p>
          </div>
        </div>
        <div className="mt-6 w-full overflow-hidden rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
          <Tabs
            color={"pink"}
            pieData={pieData}
            barChartData={ageData}
            yearOfArrivalData={yearOf}
          />
        </div>
      </div>
    </section>
  );
};

export default CountryStats;
