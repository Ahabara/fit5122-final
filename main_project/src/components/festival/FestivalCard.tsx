import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface FestivalCardProps {
  month: string;
  name: string;
  type: string;
  description: string;
  id: number;
}

function getShorthandMonth(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Err";
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth();
  return monthNames[monthIndex];
}

function getDay(dateString: string): string {
  if (dateString.length < 2) {
    return "00";
  }
  return dateString.substring(dateString.length - 2);
}
export const FestivalCard: React.FC<FestivalCardProps> = ({
  month,
  name,
  type,
  description,
  id,
}) => {
  const formattedDate = getShorthandMonth(month);
  const formattedDay = getDay(month);
  const [showLoading, setShowLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState("");
  const [error, setError] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const validateEmail = (email: string): boolean => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoading(true);

    const reminderData = {
      email,
      id,
      aheadNumber: 2,
      unitType: "day",
    };

    try {
      const response = await fetch("https://fourtitude.xyz/festival/reminder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminderData),
      });

      if (!response.ok) {
        console.log("Failed to send reminder");
      }

      const responseData = await response.json();
      setShowLoading(false);
      setEmailSent(true);
      console.log("Reminder sent successfully:", responseData);
    } catch (error) {
      setShowLoading(false);
      console.error("Error sending reminder:", error);
    }
  };

  return (
    <div className="flex p-1 shadow">
      <div className="mr-6 pt-1 text-center">
        <div className="mb-1 border-b border-gray-400 px-2 pb-1">
          <p className="text-blue-gray-700 text-sm">{formattedDate}</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">{formattedDay}</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <a
            href="/"
            className="text-deep-purple-accent-400 hover:text-deep-purple-800 text-xs font-semibold uppercase tracking-wide transition-colors duration-200"
            aria-label="Category"
            title="Delevopment"
          >
            {type}
          </a>
        </div>
        <div className="mb-2">
          <a
            href="/"
            aria-label="Article"
            className="hover:text-deep-purple-accent-400 inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200"
          >
            {name}
          </a>
        </div>
        <p className="mb-5 text-gray-700">{description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="m-1.5 flex flex-col overflow-hidden   focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 lg:flex-row dark:border-gray-600 dark:focus-within:border-blue-300">
            <button
              className="transform rounded-sm bg-gray-700 px-4 py-3 text-sm font-medium uppercase tracking-wider text-gray-100 transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              onClick={() =>
                (
                  document.getElementById(`${name}${type}`) as HTMLFormElement
                ).showModal()
              }
            >
              Remind me
            </button>
            <dialog id={name + type} className="modal">
              <div className="modal-box rounded-sm border-2 border-myDarkPurple">
                <div className="flex items-center p-8">
                  <div className="pr-4">
                    <p className="text-4xl font-bold">{formattedDay}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                      {formattedDate}, 2024
                    </div>
                    <p className="mt-2 text-2xl text-gray-700">{name}</p>
                  </div>
                </div>
                <form className="mx-auto max-w-sm">
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      value={email}
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="example@monash.edu.au"
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => {
                        setEmailBlur(email);
                        setError(validateEmail(emailBlur));
                      }}
                      required
                    />
                    {!error && (
                      <span className="label-text-alt text-red-500">
                        Please enter a valid email!
                      </span>
                    )}
                  </div>
                </form>
                <div className="">
                  <form
                    method="dialog"
                    onSubmit={(e) => e.preventDefault()}
                    className="flex gap-2"
                  >
                    <button
                      disabled={!validateEmail(email)}
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full rounded-lg bg-myDarkPurple px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-myPurple focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-500 sm:w-auto  "
                    >
                      Submit
                    </button>
                    <button className="btn">Close</button>
                  </form>
                </div>
                {showLoading && (
                  <div className="flex justify-center py-4">
                    <p className="pr-2 text-sm text-gray-700">Sending Email</p>
                    <span className="loading loading-spinner text-secondary"></span>
                  </div>
                )}
                {emailSent && (
                  <div className="flex justify-center py-4">
                    <p className="pr-2 text-sm text-gray-700">Email Sent</p>
                    <FaCheckCircle size={"1.5rem"} color="green" />
                  </div>
                )}
                <div className="mb-2"></div>
              </div>
            </dialog>
          </div>
        </form>
      </div>
    </div>
  );
};
