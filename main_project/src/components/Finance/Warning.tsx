import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Warning = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className="-mt-4 bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
          <div className="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex justify-end">
              <IoCloseOutline
                className="hover:text-white"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="grid justify-center gap-2 md:grid-cols-8 md:items-center md:justify-between">
              <div className="col-span-7 text-center md:text-start">
                <p className="text-xs uppercase tracking-wider text-white/80">
                  Warning
                </p>
                <p className="mt-1 font-medium text-white">
                  The content presented on this website is intended as general
                  guidance. It has been compiled without considering your
                  specific objectives, financial circumstances, or requirements.
                  Before making any decisions based on the information,
                  strategies, or products mentioned here, it is advisable to
                  seek advice from your personal financial advisor. Your advisor
                  can help you assess whether the options are suitable for your
                  individual objectives, financial situation, and needs.
                </p>
              </div>
              <div className="mt-3 text-center md:flex md:items-center md:justify-end md:text-start">
                <a
                  href="https://moneysmart.gov.au/"
                  target="_blank"
                  className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Warning;
