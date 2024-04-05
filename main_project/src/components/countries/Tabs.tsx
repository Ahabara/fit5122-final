import React from "react";
import PieCharts from "../charts/PieChart.tsx";
import BarCharts from "../charts/BarCharts.tsx";
import YearOfArrival from "../charts/YearOfArrival.tsx";

interface TabsProps {
  color: string;
  pieData: { name: string; value: number }[];
  barChartData: { name: string; value: number }[];
  yearOfArrivalData: { name: string; value: number }[];
}

export const Tabs: React.FC<TabsProps> = ({
  color,
  pieData,
  barChartData,
  yearOfArrivalData,
}) => {
  const [openTab, setOpenTab] = React.useState(1);
  color = "blue";
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="mb-0 flex list-none flex-row flex-wrap pb-4 pt-3"
            role="tablist"
          >
            <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                className={
                  "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                  (openTab === 1
                    ? "+ col bg-red-200 text-white" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Year of Arrival
              </a>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                className={
                  "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                  (openTab === 2
                    ? "bg-red-200 text-white" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Age Distribution
              </a>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                className={
                  "block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                  (openTab === 3
                    ? "bg-red-200 text-white" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Gender Breakdown
              </a>
            </li>
          </ul>
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <p className="py-4 text-2xl">Year of Arrival</p>
                <YearOfArrival data={yearOfArrivalData} />
              </div>
              <div
                className={
                  openTab === 2 ? "block w-96 text-gray-700" : "hidden"
                }
                id="link2"
              >
                <p className="py-4 text-2xl">Age of Demographics</p>
                <BarCharts data={barChartData} />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p className="py-4 text-2xl">Gender</p>
                <PieCharts data={pieData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
