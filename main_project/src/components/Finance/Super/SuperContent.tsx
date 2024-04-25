import { LuMerge, LuRockingChair } from "react-icons/lu";
import { MdSupervisedUserCircle, MdWork } from "react-icons/md";
import {
  FaArrowUp,
  FaChartLine,
  FaChevronDown,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaHandshakeSolid } from "react-icons/lia";
import { RiSpyLine } from "react-icons/ri";
import SuperExplained from "./SuperExplained.tsx";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SuperData {
  type: string;
  year: number;
  value: number;
}

const SuperContent = () => {
  const [superData, setSuperData] = useState<SuperData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fourtitude.xyz/super/year");
        if (!response.ok) {
          console.log("Failed to fetch data");
        }
        const data = await response.json();
        setSuperData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching super data:", error);
      }
    };

    fetchData().then(() => console.info("Fetched"));
  }, []);

  const contribution = Array.from(superData).slice(0, 20);
  const employerContribution = Array.from(superData).slice(20, 40);

  console.log(employerContribution);
  return (
    <>
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <h2 className="text-3xl font-bold lg:text-5xl" id="whatIsSuper">
                  What is Superannuation?
                </h2>

                <p className="text-lg text-gray-800">
                  Superannuation, often referred to as "super," is a retirement
                  savings system in Australia. It's designed to help Australians
                  save and invest for their retirement. As a migrant, you may
                  not be familiar with this concept if it's not present in your
                  home country, but understanding how it works is crucial for
                  your financial well-being during your time in Australia and
                  beyond.
                </p>
                <h3
                  className="text-2xl font-bold lg:text-4xl"
                  id="superImportant"
                >
                  Why is Superannuation Important?
                </h3>
                <div className="pl-4">
                  <ol className="relative border-s border-gray-200 text-neutral-800 dark:border-gray-700 dark:text-gray-400">
                    <li className="mb-10 ms-6">
                      <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-green-900 dark:ring-gray-900">
                        <LuRockingChair
                          className="stroke-8 text-gray-500"
                          style={{
                            strokeWidth: "3", // --> higher value === more thickness the filled area
                          }}
                        />
                      </span>
                      <h3 className="font-bold leading-tight">
                        Retirement Savings
                      </h3>
                      <p className="text-md">
                        Superannuation allows you to build a nest egg for your
                        retirement, ensuring you have financial security when
                        you stop working.
                      </p>
                    </li>
                    <li className="mb-10 ms-6">
                      <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
                        <MdWork className="h-full w-4 text-gray-500"></MdWork>
                      </span>
                      <h3 className="font-bold leading-tight">
                        Employer Contributions
                      </h3>
                      <p className="text-md">
                        In Australia, employers are required to contribute a
                        percentage of your earnings into your super fund. This
                        is called the Superannuation Guarantee (SG)
                        contribution, and it's a key way in which Australians
                        build their retirement savings.
                      </p>
                    </li>
                    <li className="mb-10 ms-6">
                      <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
                        <FaFileInvoiceDollar className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400"></FaFileInvoiceDollar>
                      </span>
                      <h3 className="font-bold leading-tight">Tax Benefits</h3>
                      <p className="text-md">
                        Contributions to your super fund are generally taxed at
                        a lower rate compared to other forms of income, making
                        it a tax-effective way to save for retirement.
                      </p>
                    </li>
                    <li className="ms-6">
                      <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
                        <FaChartLine className="h-3.5 w-3.5 text-gray-500 "></FaChartLine>
                      </span>
                      <h3 className="font-bold leading-tight">
                        Investment Opportunities
                      </h3>
                      <p className="text-md">
                        Super funds offer a range of investment options,
                        allowing you to grow your savings over time.
                      </p>
                    </li>
                  </ol>
                </div>

                <h3 className="text-2xl font-bold lg:text-4xl" id="superTips">
                  Tips for Managing Your Superannuation
                </h3>
                <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
                  <li>
                    <div className="timeline-middle">
                      <LuMerge className="h-5 w-5"></LuMerge>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <div className="text-lg font-black">
                        Consolidate Your Accounts
                      </div>
                      If you've had multiple jobs in Australia, you may have
                      multiple super accounts. Consolidating them into one
                      account can help you save on fees and make it easier to
                      manage your super.
                    </div>
                    <hr className="bg-neutral-800" />
                  </li>
                  <li>
                    <hr className="bg-neutral-800" />

                    <div className="timeline-middle">
                      <IoIosInformationCircleOutline className="h-5 w-5"></IoIosInformationCircleOutline>
                    </div>
                    <div className="timeline-end mb-10">
                      <div className="text-lg font-black">Stay Informed</div>
                      Keep track of your superannuation balance and investment
                      performance. You can do this by regularly checking your
                      super fund's online portal or mobile app.
                    </div>
                    <hr className="bg-neutral-800" />
                  </li>
                  <li>
                    <hr className="bg-neutral-800" />

                    <div className="timeline-middle">
                      <LiaHandshakeSolid className="h-5 w-5"></LiaHandshakeSolid>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <div className="text-lg font-black">
                        Seek Advice if Needed
                      </div>
                      If you're unsure about any aspect of your superannuation
                      or need help planning for your retirement, consider
                      seeking advice from a financial advisor or using resources
                      provided by the Australian government.
                    </div>
                    <hr className="bg-neutral-800" />
                  </li>
                  <li>
                    <hr className="bg-neutral-800" />
                    <div className="timeline-middle">
                      <RiSpyLine className="h-5 w-5"></RiSpyLine>
                    </div>
                    <div className="timeline-end mb-10">
                      <div className="text-lg font-black">
                        Be Aware of Scams
                      </div>
                      Unfortunately, scammers sometimes target superannuation
                      funds. Be cautious of any unsolicited communication
                      regarding your super and never provide personal
                      information to unknown or unverified sources.
                    </div>
                    <hr className="bg-neutral-800" />
                  </li>
                  <div className="timeline-end">
                    <FaChevronDown />
                  </div>
                </ul>
                <div className="space-y-3" id="superTodo">
                  <div className="">
                    <h3 className="text-2xl font-bold lg:text-4xl">
                      What Do I Need To Do?
                    </h3>
                    <SuperExplained />
                  </div>
                  <h3
                    className="pb-2 text-2xl font-bold lg:text-4xl"
                    id="superVisualised"
                  >
                    Super Visualised
                  </h3>
                  <p className="text-lg text-gray-800">
                    Did you know, your employer must make contributions to your
                    super? Since 1992, employers in Australia have been required
                    by law to make contributions to their employees'
                    superannuation funds, known as the Superannuation Guarantee
                    (SG). This contribution is currently set at a minimum of 11%
                    of an employee's earnings. More than{" "}
                    <strong>$1.2 Billion</strong> is contributed annually in
                    Australia!
                  </p>
                  <div className="h-full w-full">
                    <AreaChart
                      width={730}
                      height={250}
                      data={employerContribution}
                      // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorUv"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorPv"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#82ca9d"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#82ca9d"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Legend
                        verticalAlign="top"
                        height={36}
                        formatter={() => `Employer Contributions in Millions`}
                      />

                      <Tooltip
                        formatter={(value) =>
                          value && "$" + value.toLocaleString()
                        }
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                      />
                    </AreaChart>
                  </div>

                  <p className="text-lg text-gray-800">
                    You can also choose to contribute directly in to your super
                    which has some fantastic tax benefits and gets you ready to
                    think about retirement. It's never to soon to have that in
                    the back of your mind!
                  </p>
                  <AreaChart
                    width={730}
                    height={250}
                    data={contribution}
                    // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#8884d8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8884d8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#82ca9d"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#82ca9d"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend
                      verticalAlign="top"
                      height={36}
                      formatter={() => `Total Contributions in Millions`}
                    />
                    {/*  {contribution[0].type}*/}

                    <Tooltip
                      formatter={(value) =>
                        value && "$" + value.toLocaleString()
                      }
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  </AreaChart>
                  <h3 className="text-2xl font-semibold" id="superSummary">
                    Summary
                  </h3>
                  <p className="text-lg text-gray-800">
                    Navigating the superannuation system in Australia may seem
                    complex at first, but with the right knowledge and guidance,
                    you can make informed decisions to secure your financial
                    future. Remember to stay informed, actively manage your
                    super, and seek assistance when needed. By taking control of
                    your superannuation, you're taking an important step towards
                    building a comfortable and prosperous retirement in
                    Australia. Welcome again, and may your time here be filled
                    with success and fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg lg:col-span-1 lg:h-full lg:w-full lg:bg-myPurple/20 lg:p-2">
            <div className="sticky start-0 top-0 py-8 lg:ps-8">
              <div className="group mb-8 flex items-center gap-x-3 border-b border-gray-200 pb-8">
                <div className="  block flex-shrink-0">
                  <div className="avatar placeholder online">
                    <div className="w-10 rounded-full bg-neutral text-neutral-content">
                      <MdSupervisedUserCircle className="h-full w-full text-red-200" />
                    </div>
                  </div>
                </div>
                <div className="group block grow">
                  <h5 className="text-sm font-semibold text-gray-800 group-hover:text-gray-600">
                    Your Super Guide
                  </h5>
                  <p className="text-sm text-gray-500">...</p>
                </div>
                <div className="grow">
                  <div className="flex justify-end">
                    <a href={"#superTop"}>
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-myPurple px-2.5 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                      >
                        <FaArrowUp className="size-3 flex-shrink-0"></FaArrowUp>
                        Scroll to top
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <a
                  className="group flex items-center gap-x-6"
                  href={"#whatIsSuper"}
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      1. What is Superannuation?
                    </span>
                  </div>
                </a>
                <a
                  className="group flex items-center gap-x-6"
                  href={"#superImportant"}
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      2. Why is Superannuation Important?
                    </span>
                  </div>
                </a>
                <a
                  className="group flex items-center gap-x-6"
                  href={"#superTips"}
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      3. Tips for Managing Your Superannuation
                    </span>
                  </div>
                </a>
                <a
                  className="group flex items-center gap-x-6"
                  href={"#superTodo"}
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      4. What Do I Need To Do?
                    </span>
                  </div>
                </a>
                <a
                  className="group flex items-center gap-x-6"
                  href={"#superVisualised"}
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      5. Super Visualised
                    </span>
                  </div>
                </a>
                <a
                  className="group flex items-center gap-x-6"
                  href={"#superSummary"}
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      6. Summary
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperContent;

// const re = (
//   <div className="text-center">
//     <div className="grid gap-3 lg:grid-cols-2">
//       <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
//         <figure className="relative h-60 w-full">
//           <img
//             className="absolute start-0 top-0 size-full rounded-xl object-cover"
//             src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//             alt="Image Description"
//           />
//         </figure>
//         <figure className="relative h-60 w-full">
//           <img
//             className="absolute start-0 top-0 size-full rounded-xl object-cover"
//             src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//             alt="Image Description"
//           />
//         </figure>
//       </div>
//       <figure className="relative h-72 w-full sm:h-96 lg:h-full">
//         <img
//           className="absolute start-0 top-0 size-full rounded-xl object-cover"
//           src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
//           alt="Image Description"
//         />
//       </figure>
//     </div>
//     <span className="mt-3 block text-center text-sm text-gray-500">
//       Working process
//     </span>
//   </div>
// );
