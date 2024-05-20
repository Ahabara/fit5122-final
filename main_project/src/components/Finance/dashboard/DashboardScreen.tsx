import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { twJoin } from "tailwind-merge";
import { FaArrowUp } from "react-icons/fa";
import asxtickers from "./asxtickers.ts";
import { FaCircleInfo } from "react-icons/fa6";

interface StockData {
  name: string;
  symbol: string;
  pricePreviousClose: string;
  priceNow: string;
  changePercent: string;
  priceChange: string;
}

interface MarketData {
  timestamp: number;
  stockPrice: number | null;
  marketPrice: number;
}
const DashboardScreen = () => {
  const [topSharesofDay, setTopSharesofDay] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState(asxtickers);
  const [showDropDown, setShowDropDown] = useState(false);
  const [topSharesofYear, setTopSharesofYear] = useState<StockData[]>([]);
  const [searchedShare, setSearchedShare] = useState("");
  const [todaysASX, setTodaysASX] = useState({
    regularMarketPrice: "7804.5",
    regularMarketChange: "11.2",
    regularMarketChangePercent: "0.14%",
  });
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = asxtickers.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredItems(filtered);
  };
  // const response = await fetch("https://fourtitude.xyz/stock?top=5");
  const fetchTopSharesOfDay = async () => {
    try {
      const response = await fetch("https://fourtitude.xyz/stock/day?top=5");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching top shares of the day:", error);
    }
  };

  const fetchTodaysASX = async () => {
    try {
      const response = await fetch("https://fourtitude.xyz/market");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching top shares of the day:", error);
    }
  };

  const fetchTopSharesOfYear = async () => {
    try {
      const response = await fetch("https://fourtitude.xyz/stock/year?top=5");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching top shares of the day:", error);
    }
  };

  const fetchMarketData = async () => {
    try {
      const response = await fetch(
        "https://fourtitude.xyz/stockAndMarket?symbol=IOZ.AX&interval=1wk&range=5y",
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching market data:", error);
    }
  };

  const formatTooltipLabel = (value: number) => {
    const date = new Date(value * 1000);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [topSharesOfDay, marketData, topSharesofTheYear, todaysMarket] =
          await Promise.all([
            fetchTopSharesOfDay(),
            fetchMarketData(),
            fetchTopSharesOfYear(),
            fetchTodaysASX(),
          ]);
        setTopSharesofDay(topSharesOfDay);
        setMarketData(marketData);
        setTopSharesofYear(topSharesofTheYear);
        setTodaysASX(todaysMarket);
      } catch (error) {
        // Error handling
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then(() => console.warn("Fetched"));
  }, []);

  const fetchDataForItem = async (id: string) => {
    setLoading(true);
    console.log(id, "jij");
    try {
      const response = await fetch(
        `https://fourtitude.xyz/stockAndMarket?symbol=${id}.AX&interval=1wk&range=5y`,
      );
      if (!response.ok) {
        throw Error("Hello");
      }
      const data = await response.json();
      console.log("This is is tha new Data", data.data);
      setMarketData(data.data); // Assuming the response data is a string
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleItemClick = (id: string) => {
    fetchDataForItem(id).then(() => setSearchedShare(id));
  };
  const CustomXAxisTick: React.FC<{
    x?: number;
    y?: number;
    payload?: { value?: number };
  }> = ({ x, y, payload }) => {
    if (!x || !y || !payload || !payload.value) return null;

    const date = new Date(payload.value * 1000); // Convert timestamp to milliseconds
    const formattedTime = `${(date.getMonth() + 1).toString().padStart(2, "0")}/${(date.getFullYear() % 100).toString().padStart(2, "0")}`;
    return (
      <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
        {formattedTime}
      </text>
    );
  };
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  // @ts-ignore
  const CustomTooltip = ({ active, payload, label }: unknown) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${formatTooltipLabel(label)} : ${USDollar.format(payload[0].value)}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="performance">
      <header className="w-2/3 p-6">
        <h2 className="font-bold text-myDarkPurple">Your Dashboard</h2>
        <div className="flex items-start gap-2">
          <FaCircleInfo className="size-44 text-myDarkPurple lg:size-12" />
          <p>
            Use our dashboard to guide you in understanding how investing works
            in Australia. Use the search bar to find an ASX listed share that
            you're interested in to see how it's performing. View the best
            performing share of the day and year below.
          </p>
        </div>
      </header>
      <section className="m-4 rounded border border-solid bg-purple-200  shadow">
        <section className=" flex flex-row flex-wrap items-center justify-center text-center">
          <div className="w-full  p-4 sm:w-1/2 sm:border-r md:border-b-0 lg:w-1/4">
            <span className="text-xs font-medium uppercase text-gray-500">
              ASX Today
            </span>
            <div className="flex items-center justify-center py-4 text-center">
              <span className="mr-4 text-3xl">
                {USDollar.format(
                  parseFloat(todaysASX.regularMarketPrice),
                ).slice(0, -3)}
              </span>
              {todaysASX.regularMarketPrice.includes("-") ? (
                <span className="inline-flex h-6 items-center rounded bg-red-500 px-2 text-xs text-white">
                  {todaysASX.regularMarketChangePercent}
                </span>
              ) : (
                <span className="inline-flex h-6 items-center rounded bg-green-500 px-2 text-xs text-white">
                  {todaysASX.regularMarketChangePercent}
                </span>
              )}
            </div>
          </div>
          <div className="w-full  p-4 sm:w-1/2 sm:border-r md:border-b-0 lg:w-1/4">
            <span className="text-xs font-medium uppercase text-gray-500">
              Market Change Points
            </span>
            <div className="flex items-center justify-center py-4 text-center">
              <span className="mr-4 text-3xl">
                {todaysASX.regularMarketChange}
              </span>
              <span className="inline-flex h-6 items-center rounded bg-green-500 px-2 text-xs text-white">
                +12.0%
              </span>
            </div>
          </div>
        </section>
        <section className="m-4 min-w-fit p-4">
          <input
            type="text"
            placeholder="Search Share Name..."
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={() => {
              setTimeout(() => {
                setShowDropDown(false);
              }, 500);
            }}
            onFocus={() => setShowDropDown(true)}
          />
          {showDropDown && (
            <ul className="absolute z-40 mt-2 max-h-60 max-w-xs overflow-scroll rounded-lg border border-gray-100 bg-white">
              {filteredItems.map((item) => (
                <li
                  onClick={() => handleItemClick(item.ticker)}
                  className="relative cursor-pointer border-b-2 border-gray-100 py-1 pl-1 pr-2 hover:bg-yellow-50 hover:text-gray-900"
                >
                  <strong>{item.ticker}</strong> {item.name}
                </li>
              ))}
            </ul>
          )}
          <p className="ml-2 text-sm">Press on the search box to start!</p>
        </section>
        <section id="chart" className="m-4 flex gap-2 p-4">
          {loading ? (
            <div
              role="status"
              className="h-64 w-1/2 animate-pulse overflow-clip rounded border border-gray-200 p-4 shadow md:p-6"
            >
              <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-500 dark:bg-gray-400"></div>
              <div className="mb-10 h-2 w-48 rounded-full bg-gray-500 dark:bg-gray-400"></div>
              <div className="mt-4 flex items-baseline">
                <div className=" w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-56 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-64 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
              </div>
            </div>
          ) : (
            <>
              <ResponsiveContainer width="50%" height={250}>
                <AreaChart
                  data={marketData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="timestamp" tick={<CustomXAxisTick />} />
                  <YAxis
                    domain={["dataMin", "dataMax"]}
                    tickFormatter={(tick: number) =>
                      USDollar.format(tick).slice(0, -3)
                    }
                  />{" "}
                  {/* Adjust interval as needed */}
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="stockPrice"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    // xis={true}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </>
          )}

          {loading ? (
            <div
              role="status"
              className="h-64 w-1/2 animate-pulse overflow-clip rounded border border-gray-200 p-4 shadow md:p-6"
            >
              <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-500 dark:bg-gray-400"></div>
              <div className="mb-10 h-2 w-48 rounded-full bg-gray-500 dark:bg-gray-400"></div>
              <div className="mt-4 flex items-baseline">
                <div className=" w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-56 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-64 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-500 dark:bg-gray-400"></div>
              </div>
            </div>
          ) : (
            <>
              <ResponsiveContainer width="50%" height={250}>
                <AreaChart
                  data={marketData}
                  margin={{ top: 10, right: 25, left: 30, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="timestamp" tick={<CustomXAxisTick />} />
                  <YAxis
                    domain={["dataMin", "dataMax"]}
                    type="number"
                    tickFormatter={(tick: number) =>
                      USDollar.format(tick).slice(0, -3)
                    }
                    allowDecimals={false}
                  />
                  {/* Adjust interval as needed */}
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="marketPrice"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    // xis={true}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </>
          )}
        </section>
        <div className="flex">
          <div className="flex w-1/2 justify-center font-bold">
            <p className="pb-4 text-xl">
              {searchedShare.length == 0 ? "IOZ" : searchedShare}
            </p>
            <br />
          </div>
          <div className="flex w-1/2 justify-center font-bold">
            <p className="pb-4 text-xl">{"ASX Market"}</p>
            <br />
          </div>
        </div>
      </section>
      <div className="mr-14 flex flex-row flex-wrap">
        <div className="w-full lg:w-1/2">
          <section className="m-4 rounded border border-solid  border-gray-400 shadow">
            <header className=" border-b border-gray-400 p-4 text-lg font-medium">
              Best Performing Of The Day
              <span className="text-xs"> (Excluding Small Cap)</span>
            </header>
            <section className="w-full overflow-x-auto">
              <table
                className="w-full"
                cellPadding={0}
                cellSpacing={0}
                border={0}
              >
                <tbody>
                  {typeof topSharesofDay != "undefined" &&
                  topSharesofDay.length < 1 ? (
                    <>
                      <div
                        role="status"
                        className=" animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow md:p-6 dark:divide-gray-700 dark:border-gray-700"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600" />
                            <div className="h-2 w-32 rounded-full bg-gray-400 dark:bg-gray-400" />
                          </div>
                          <div className="h-2.5 w-12 rounded-full bg-gray-400 dark:bg-gray-400" />
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <div>
                            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600" />
                            <div className="h-2 w-32 rounded-full bg-gray-500 dark:bg-gray-400" />
                          </div>
                          <div className="h-2.5 w-12 rounded-full bg-gray-400 dark:bg-gray-400" />
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <div>
                            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600" />
                            <div className="h-2 w-32 rounded-full bg-gray-500 dark:bg-gray-400" />
                          </div>
                          <div className="h-2.5 w-12 rounded-full bg-gray-400 dark:bg-gray-400" />
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <div>
                            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600" />
                            <div className="h-2 w-32 rounded-full bg-gray-500 dark:bg-gray-400" />
                          </div>
                          <div className="h-2.5 w-12 rounded-full bg-gray-400 dark:bg-gray-400" />
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <div>
                            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600" />
                            <div className="h-2 w-32 rounded-full bg-gray-500 dark:bg-gray-400" />
                          </div>
                          <div className="h-2.5 w-12 rounded-full bg-gray-400 dark:bg-gray-400" />
                        </div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </>
                  ) : (
                    topSharesofDay.map((share, index) => {
                      return (
                        <tr key={index}>
                          <td className=" p-2 py-4">
                            <div className="flex flex-row flex-wrap items-center pl-4">
                              <div
                                className={twJoin(
                                  "mr-4 block flex h-12 w-12 flex-row items-center justify-center rounded-full text-white",
                                  `bg-teal-400`,
                                )}
                              >
                                {share.symbol && share.symbol.slice(0, 3)}
                              </div>
                              <div className="  capitalize text-gray-700">
                                {share.name}
                              </div>
                            </div>
                          </td>
                          <td className="text-right text-gray-700">
                            {USDollar.format(parseFloat(share.priceNow))}
                          </td>
                          <td className=" px-4 text-right text-green-600">
                            <div className="flex gap-2">
                              <p>{share.changePercent}</p>
                              <FaArrowUp className="text-green-400" />
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </section>
          </section>
        </div>
        <div className="w-full lg:w-1/2">
          <section className="m-4 rounded border border-solid border-gray-400 shadow">
            <header className=" border-b border-gray-400 p-4 text-lg font-medium">
              Best Performing Of The Year
              <span className="text-xs"> (Excluding Small Cap)</span>
            </header>
            <section className="w-full overflow-x-auto">
              <table
                className="w-full"
                cellPadding={0}
                cellSpacing={0}
                border={0}
              >
                <tbody>
                  {topSharesofYear &&
                    topSharesofYear.map((share, index) => (
                      <tr key={index}>
                        <td className=" p-2 py-4">
                          <div className="flex flex-row items-center pl-4">
                            <div
                              className={
                                "mr-4 block flex h-12 w-12 flex-row items-center justify-center rounded-full bg-teal-400 text-white"
                              }
                            >
                              {share.symbol.slice(0, 3)}
                            </div>
                            <div className="text-gray-700">{share.name}</div>
                          </div>
                        </td>
                        <td className=" px-4 text-right text-green-600">
                          <div className="flex gap-2">
                            <p>{share.changePercent}</p>
                            <FaArrowUp className="text-green-400" />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DashboardScreen;
