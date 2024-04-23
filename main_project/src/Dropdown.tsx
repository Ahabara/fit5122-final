import { useState } from "react";

const Dropdown = () => {
  const [isList, setIsList] = useState(false);
  const [isSubList, setIsSubList] = useState(3);
  return (
    <div>
      <div
        onClick={() => setIsList(!isList)}
        className="flex w-64 cursor-pointer items-center justify-between rounded bg-white p-4 text-sm font-medium leading-none text-gray-800 shadow"
      >
        Channels
        <div>
          {isList ? (
            <div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {isList && (
        <div className="mt-2 w-64 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                onClick={() => setIsSubList(1)}
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 3L7.5 6L4.5 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex items-center pl-4">
                <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                  <input
                    type="checkbox"
                    className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                  />
                  <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                    <svg
                      className="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p className="ml-2 text-sm leading-normal text-gray-800">
                  Facebook
                </p>
              </div>
            </div>
            <p className="w-8 text-right text-xs leading-3 text-indigo-700">
              2,381
            </p>
          </div>
          {isSubList === 1 && (
            <div className="pl-8 pt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center pl-4">
                  <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-2 text-sm leading-normal text-gray-800">
                    USA
                  </p>
                </div>
                <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                  2,381
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center pl-4">
                  <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-2 text-sm leading-normal text-gray-800">
                    Germany
                  </p>
                </div>
                <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                  2,381
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center pl-4">
                  <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-2 text-sm leading-normal text-gray-800">
                    Italy
                  </p>
                </div>
                <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                  2,381
                </p>
              </div>
            </div>
          )}
          <div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  onClick={() => setIsSubList(2)}
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center pl-4">
                  <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-2 text-sm leading-normal text-gray-800">
                    Twitter
                  </p>
                </div>
              </div>
              <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                3,521
              </p>
            </div>
            {isSubList === 2 && (
              <div className="pl-8 pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center pl-4">
                    <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <input
                        type="checkbox"
                        className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-2 text-sm leading-normal text-gray-800">
                      USA
                    </p>
                  </div>
                  <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                    2,381
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center pl-4">
                    <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <input
                        type="checkbox"
                        className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-2 text-sm leading-normal text-gray-800">
                      Germany
                    </p>
                  </div>
                  <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                    2,381
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center pl-4">
                    <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <input
                        type="checkbox"
                        className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-2 text-sm leading-normal text-gray-800">
                      Italy
                    </p>
                  </div>
                  <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                    2,381
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  onClick={() => setIsSubList(3)}
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center pl-4">
                  <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-2 text-sm leading-normal text-gray-800">
                    Instagram
                  </p>
                </div>
              </div>
              <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                5,142
              </p>
            </div>
            {isSubList === 3 && (
              <div className="pl-8 pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center pl-4">
                    <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <input
                        type="checkbox"
                        className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-2 text-sm leading-normal text-gray-800">
                      USA
                    </p>
                  </div>
                  <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                    2,381
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center pl-4">
                    <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <input
                        type="checkbox"
                        className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-2 text-sm leading-normal text-gray-800">
                      Germany
                    </p>
                  </div>
                  <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                    2,381
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center pl-4">
                    <div className="relative flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <input
                        type="checkbox"
                        className="checkbox absolute h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="check-icon hidden rounded-sm bg-indigo-700 text-white">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-2 text-sm leading-normal text-gray-800">
                      Italy
                    </p>
                  </div>
                  <p className="w-8 text-right text-xs leading-3 text-indigo-700">
                    2,381
                  </p>
                </div>
              </div>
            )}{" "}
          </div>
          <button className="mt-6 w-full rounded-md bg-indigo-100 py-2 text-xs font-medium leading-3 text-indigo-700 hover:bg-indigo-200">
            Select
          </button>
        </div>
      )}
      <style>
        {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  );
};
export default Dropdown;
