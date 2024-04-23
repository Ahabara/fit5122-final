import piggy from "../assets/piggybank.png";
import retirement from "../assets/retirement.png";
import invest from "../assets/invest.svg";

const SuperExplained = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mt-2 overflow-hidden py-12 pb-6 sm:py-16 md:mt-0 lg:pb-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="red"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 12"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 gap-x-12 gap-y-8 text-center sm:gap-y-10 md:grid-cols-3 md:gap-y-12">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      1
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center text-xl font-semibold leading-tight text-gray-900 sm:mt-6 md:mt-10 dark:text-white">
                    <img
                      src={piggy}
                      alt=""
                      className="mb-4 h-72 w-72 object-cover"
                    />
                    <h3 className="text-3xl">Contribute</h3>
                  </div>
                  <p className="mt-3 text-justify text-base text-gray-600 sm:mt-4 dark:text-gray-400">
                    Regularly contribute to your superannuation fund, either
                    through employer contributions (Superannuation Guarantee) or
                    voluntary contributions from your own income. Aim to
                    maximize your contributions to build a substantial
                    retirement savings over time.
                  </p>
                </div>
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      2
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center text-xl font-semibold leading-tight text-gray-900 sm:mt-6 md:mt-10 dark:text-white">
                    <img
                      src={invest}
                      alt=""
                      className="mb-4 h-72 w-72 object-cover "
                    />
                    <h3 className="text-3xl">Invest</h3>
                  </div>
                  <p className="mt-3 text-justify text-base text-gray-600 sm:mt-4 dark:text-gray-400">
                    Choose suitable investment options offered by your
                    superannuation fund based on your risk tolerance, investment
                    goals, and time horizon until retirement. Monitor and review
                    your investment portfolio regularly to ensure it aligns with
                    your financial objectives and adjust it as necessary.
                  </p>
                </div>
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      3
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center text-xl font-semibold leading-tight text-gray-900 sm:mt-6 md:mt-10 dark:text-white">
                    <img
                      src={retirement}
                      alt=""
                      className="mb-4 h-72 w-72 object-cover"
                    />
                    <h3 className="text-3xl">Retire</h3>
                  </div>
                  <p className="mt-3 text-justify  text-base text-gray-600 sm:mt-4 dark:text-gray-400">
                    Prepare for retirement by considering options such as
                    transitioning to retirement strategies or purchasing an
                    annuity to provide a regular income stream in retirement.
                    Regularly review your retirement plans and adjust them as
                    needed to adapt to changing circumstances or goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuperExplained;
