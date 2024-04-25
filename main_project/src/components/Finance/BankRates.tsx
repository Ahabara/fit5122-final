import { RiListSettingsLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import errorImage from "../Finance/assets/error message.png";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FaCoins } from "react-icons/fa";

interface BankCardProps {
  image: string;
  interestRate: string;
  name: string;
  price: string;
  maxBalance?: string;
}

interface BankInterest {
  image: string;
  savingsAccounts: string;
  validFrom: string;
  base: string;
  maxBonus: string;
  maxTotal: string;
  maxBalance: string;
  effectiveAsOf: string;
  lastCheckedOrEdited: string;
  minimumAge: string | null;
  maximumAge: string | null;
  minimumDepositAmount: string;
  depositFrequency: string | null;
  bonus: string;
}
const BankCard: React.FC<BankCardProps> = ({
  image,
  interestRate,
  name,
  price,
}) => {
  const convertToPercentage = (percentageString: string): string => {
    const percentage = parseFloat(percentageString);

    if (isNaN(percentage)) {
      return "%";
    }
    const percentageFormatted = (percentage * 100).toFixed(2);
    return `${percentageFormatted}%`;
  };
  const [savings, setSavings] = useState("");
  const [interestEarned, setInterestEarned] = useState(0);
  const [interestsPerYear, setInterestsPerYear] = useState<number[]>([]);
  const [inflation, setInflation] = useState<number[]>([]);

  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSavings(e.target.value);
  };

  const calculateInterest = () => {
    if (isNaN(parseFloat(savings)) || savings === "") {
      alert("Please enter a valid number for savings.");
      return;
    }
    setInflation(calculateInflation(parseFloat(savings)));
    const principal = parseFloat(savings);
    const years = 10;
    const annualInterestRate = parseFloat(interestRate); // Convert maxTotal to annual interest rate
    console.log(annualInterestRate);
    const amount = principal * Math.pow(1 + annualInterestRate, 10);
    // const annualInterest = (parseFloat(savings) * annualInterestRate) / 100;
    const totalInterest = amount - principal; // Assuming 10 years
    setInterestEarned(totalInterest);
    const interestPerYear = Array.from({ length: years }, (_, index) => {
      const year = index + 1;
      const amountAtYear = principal * Math.pow(1 + annualInterestRate, year);
      console.log(amountAtYear);
      return parseFloat(amountAtYear.toFixed(2)); // Fixed to 2 decimal places
    });
    console.log(interestPerYear);
    setInterestsPerYear(interestPerYear);
  };

  const calculateInflation = (startingAmount: number): number[] => {
    const inflationRate = 0.025; // 2.5% inflation rate
    const result: number[] = [];

    let currentAmount = startingAmount;
    for (let i = 0; i < 10; i++) {
      currentAmount *= 1 + inflationRate; // Apply inflation rate
      result.push(Number(currentAmount.toFixed(2))); // Round to 2 decimal places and push to result array
    }

    return result;
  };

  const arrayOfObjects: {
    Interest: number;
    index: string;
    Inflation: number;
  }[] = interestsPerYear.map((value: number, index) => ({
    Interest: value,
    index: index.toString(),
    Inflation: inflation[index],
  }));
  return (
    <>
      <div className="w-full p-4 md:w-1/2 lg:w-1/4">
        <a className="relative block h-48 overflow-hidden rounded-xl">
          <img
            alt="ecommerce"
            className="block h-full w-full object-contain object-center"
            src={image}
          />
        </a>
        <div className="mt-4 md:h-20">
          {/*todo remove the h-20 if name can be standardised*/}
          <div
            className=""
            onClick={() =>
              (
                document.getElementById(`${name}`) as HTMLFormElement
              ).showModal()
            }
          >
            <h2 className="title-font text-lg font-medium text-gray-900 hover:text-blue-500">
              {name}
            </h2>
          </div>
          <dialog id={`${name}`} className="modal w-full">
            <div className="modal-box max-w-fit px-16">
              <div className="flex items-center gap-2 py-3">
                <FaCoins size={"2.25rem"} />
                <p className="text-3xl">Interest</p>
              </div>
              <p className="pb-6">
                Calculate how much savings you could have in 10 years.{" "}
              </p>

              <div className="mb-4 flex items-center gap-2">
                <label
                  htmlFor="savings"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your savings amount:
                </label>
                <input
                  type="number"
                  id="savings"
                  name="savings"
                  className="mt-1  rounded-md border p-2"
                  value={savings}
                  onChange={handleSavingsChange}
                  placeholder="Enter amount"
                />
                <button
                  className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                  onClick={calculateInterest}
                >
                  Calculate
                </button>
              </div>
              {interestEarned !== 0 && (
                <p className="mt-4">
                  Potential interest earned over 10 years:{" "}
                  <strong>
                    {interestEarned.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>
                </p>
              )}
              {interestsPerYear.length > 0 && (
                <div className="mb-4">
                  <p>
                    {" "}
                    You could have{" "}
                    <strong>
                      {interestsPerYear[
                        interestsPerYear.length - 1
                      ].toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </strong>{" "}
                    in 10 years!
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Potential Earnings
                  </h3>
                  <LineChart
                    width={500}
                    height={250}
                    data={arrayOfObjects}
                    margin={{ top: 5, right: 2, left: 2, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) =>
                        value.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      }
                    />
                    <Legend />
                    <Line type="monotone" dataKey="Interest" stroke="#8884d8" />
                    <Line
                      type="monotone"
                      dataKey="Inflation"
                      stroke="#82ca9d"
                    />
                  </LineChart>
                  <table className="w-full border-collapse">
                    <thead className="text-left">
                      <tr>
                        <th className="border p-2">Year</th>
                        <th className="border p-2">Total Saved</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interestsPerYear.map((interest, index) => (
                        <tr key={index}>
                          <td className="border p-2">{index + 1}</td>
                          <td className="border p-2">
                            {interest.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <p className="mt-1 text-sm">
          <strong>Total Interest: </strong>
          {convertToPercentage(interestRate)}
        </p>
        <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
          <strong>Base:</strong> {convertToPercentage(price)}
        </h3>
      </div>
    </>
  );
};

const BankRates = () => {
  const [bankInterest, setBankInterest] = useState<BankInterest[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBankInterest = async () => {
      try {
        const response = await fetch("https://fourtitude.xyz/bank/interest");
        if (!response.ok) {
          setError("Failed to fetch bank interest data");
        }
        const data = await response.json();
        setBankInterest(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching bank interest data:", error);
      }
    };

    fetchBankInterest().then(() => console.warn("Fetched Safely"));
  }, []);
  return (
    <>
      <section className="relative rounded-2xl p-16 " id="bankrates">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="flex w-full flex-col justify-between max-lg:gap-4 lg:flex-row lg:items-center">
            <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
              <li className="group flex cursor-pointer items-center outline-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                    d="M19.7778 9.33333V9.33333C19.7778 8.09337 19.7778 7.47339 19.6415 6.96472C19.2716 5.58436 18.1934 4.50616 16.8131 4.1363C16.3044 4 15.6844 4 14.4444 4C12.963 4 11.4815 4 10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20C11.3333 20 12.6667 20 14 20C15.6554 20 16.4831 20 17.1459 19.7588C18.2569 19.3544 19.1322 18.4791 19.5365 17.3681C19.7778 16.7053 19.7778 15.8776 19.7778 14.2222V14.2222M16.6667 14.2222H20.2222C21.2041 14.2222 22 13.4263 22 12.4444V11.1111C22 10.1293 21.2041 9.33333 20.2222 9.33333H16.6667C15.6848 9.33333 14.8889 10.1293 14.8889 11.1111V12.4444C14.8889 13.4263 15.6848 14.2222 16.6667 14.2222Z"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="ml-2 mr-3 text-lg font-normal leading-8 text-indigo-600 transition-all duration-500 group-hover:text-indigo-600">
                  Finance
                </span>
                <button className="font-manrope flex aspect-square h-6 items-center justify-center  rounded-full border border-indigo-600 text-base font-medium text-indigo-600  transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                  8
                </button>
              </li>
            </ul>
            <div className="relative w-full max-w-sm">
              <svg
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <select
                id="Offer"
                onChange={(e) => {
                  if (e.target.value == "low") {
                    setBankInterest((prevState) => {
                      return [...prevState].sort((a, b) =>
                        a.maxTotal.localeCompare(b.maxTotal),
                      );
                    });
                  } else if (e.target.value == "high") {
                    setBankInterest((prevState) => {
                      return [...prevState].sort((a, b) =>
                        b.maxTotal.localeCompare(a.maxTotal),
                      );
                    });
                  } else if (e.target.value == "alpha") {
                    setBankInterest((prevState) => {
                      return [...prevState].sort((a, b) =>
                        a.savingsAccounts.toLowerCase() <
                        b.savingsAccounts.toLowerCase()
                          ? -1
                          : 1,
                      );
                    });
                  }
                }}
                className="relative block h-12 w-full appearance-none rounded-md border-2 border-gray-800 bg-pink-200 px-4 py-2.5 pl-11 text-base font-normal leading-7 text-gray-900 transition-all duration-500 focus-within:bg-myPurple hover:border-gray-400 hover:bg-myPink focus:outline-none"
              >
                <option selected value={"high"}>
                  High to Low
                </option>
                <option value="low">Low To High</option>
                <option value="alpha">Product Name (A - Z)</option>
              </select>
            </div>
          </div>
          <svg
            className="my-7 w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="1216"
            height="2"
            viewBox="0 0 1216 2"
            fill="none"
          >
            <path d="M0 1H1216" stroke="gray" />
          </svg>
          <div className="grid grid-cols-12">
            <div className="col-span-12 hidden w-full max-md:mx-auto max-md:max-w-md md:col-span-3">
              <div className="box w-full rounded-xl border border-gray-300 bg-[#FBD9EE] p-6 md:max-w-sm">
                <h6 className="mb-5 flex items-center gap-2 text-base font-medium leading-7 text-black">
                  <RiListSettingsLine />
                  Filters
                </h6>
                <div className="mb-5 flex items-center gap-1">
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-12 w-full appearance-none rounded-lg bg-[#F7D9FB] px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>Min</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                  <p className="px-1 text-sm font-normal leading-6 text-gray-600">
                    to
                  </p>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-12 w-full appearance-none rounded-lg bg-[#F7D9FB] px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>Max</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                </div>

                <label
                  htmlFor="countries"
                  className="mb-2 block w-full text-sm font-medium text-gray-600"
                >
                  Zip Code
                </label>
                <div className="relative mb-8 w-full">
                  <select
                    id="FROM"
                    className="relative block h-12 w-full appearance-none rounded-lg border bg-[#F7D9FB] px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                  >
                    <option selected>Write code</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                </div>

                <div className="box mt-7 w-full rounded-xl border border-gray-300 bg-pink-100 p-6 md:max-w-sm">
                  <div className="mb-7 flex w-full items-center justify-between border-b border-gray-200 pb-3">
                    <p className="text-base font-medium leading-7 text-black ">
                      Filter Plans
                    </p>
                    <p className="cursor-pointer text-xs font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600">
                      RESET
                    </p>
                  </div>

                  <div className="mb-7 w-full">
                    <div
                      className="accordion-group grid grid-cols-1 gap-5 sm:gap-9"
                      data-accordion="default-accordion"
                    >
                      <div className="accordion " id="category-heading-one">
                        <button
                          className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                          aria-controls="category-collapse-one"
                        >
                          <h5 className="text-sm font-medium text-gray-900">
                            Availability
                          </h5>
                          <svg
                            className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="category-collapse-one"
                          className="accordion-content max-h-0 w-full overflow-hidden px-0 pr-4 "
                          aria-labelledby="category-heading-one"
                        >
                          <div className="box mt-5 flex flex-col gap-2">
                            <div className="mb-2 flex items-center">
                              <input
                                id="checkbox-option-1"
                                type="checkbox"
                                value=""
                                className="checkbox-white mr-1 h-5 w-5 appearance-none rounded  border border-gray-500 checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-100 hover:bg-indigo-600"
                              />
                              <label
                                htmlFor="checkbox-option-1"
                                className="ml-1 cursor-pointer text-xs font-normal  text-gray-600"
                              >
                                option-1
                              </label>
                            </div>
                            <div className="mb-2 flex items-center">
                              <input
                                id="checkbox-option-2"
                                type="checkbox"
                                value=""
                                className="checkbox-white mr-1 h-5 w-5 appearance-none rounded  border border-gray-500 checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-100 hover:bg-indigo-600"
                              />
                              <label
                                htmlFor="checkbox-option-2"
                                className="ml-1 cursor-pointer text-xs font-normal  text-gray-600"
                              >
                                option-2
                              </label>
                            </div>
                            <div className="mb-2 flex items-center">
                              <input
                                id="checkbox-option-3"
                                type="checkbox"
                                value=""
                                className="checkbox-white mr-1 h-5 w-5 appearance-none rounded  border border-gray-500 checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-600 hover:bg-indigo-600"
                              />
                              <label
                                htmlFor="checkbox-option-3"
                                className="ml-1 cursor-pointer text-xs font-normal  text-gray-600"
                              >
                                option-3
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <label
                    htmlFor="Offer"
                    className="mb-1 text-sm font-medium leading-6 text-gray-600"
                  >
                    Offer
                  </label>
                  <div className="relative mb-7 w-full">
                    <select
                      id="Offer"
                      className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>5% off upi discount</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                  <p className="mb-3 text-sm font-medium leading-6 text-black">
                    Deposit Frequency
                  </p>
                  <div className="box flex flex-col gap-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-default-1"
                        type="checkbox"
                        value=""
                        className="mr-2 h-5 w-5 appearance-none rounded-md  border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                      <label
                        htmlFor="checkbox-default-1"
                        className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                      >
                        No Frequency
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checkbox-default-2"
                        type="checkbox"
                        value=""
                        className="mr-2 h-5 w-5 appearance-none rounded-md  border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                      <label
                        htmlFor="checkbox-default-2"
                        className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                      >
                        Daily
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checkbox-default-3"
                        type="checkbox"
                        value=""
                        className="mr-2 h-5 w-5 appearance-none rounded-md  border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                      <label
                        htmlFor="checkbox-default-3"
                        className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                      >
                        Monthly
                      </label>
                    </div>
                  </div>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-12">
              {/*todo change back to col-span-9 when introducing filters*/}
              <section className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-4">
                  {bankInterest.length > 1 ? (
                    <div className="-m-4 flex flex-wrap">
                      {bankInterest.map((bank, index) => (
                        <BankCard
                          image={bank.image}
                          name={bank.savingsAccounts}
                          price={bank.base}
                          interestRate={bank.maxTotal}
                          maxBalance={bank.maxBalance}
                          key={index}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <img src={errorImage} className="w-44" alt="" />
                      <h1 className="text-3xl">No Results Found</h1>
                      <p>{error}</p>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BankRates;
