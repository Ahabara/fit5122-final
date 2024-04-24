import { FaQuestionCircle } from "react-icons/fa";
import MoreInfo from "./MoreInfo.tsx";

const BankCommonTerms = () => {
  return (
    <>
      <div className="bg-neutral-900">
        <div className="mx-auto max-w-5xl px-4 py-10 lg:pb-20 lg:pt-20 xl:px-0">
          <div className="mb-10 max-w-3xl lg:mb-14">
            <h2 className="pb-12 text-4xl font-extrabold text-white sm:text-5xl">
              Common Banking Services:
            </h2>
            <p className="mt-1 text-neutral-400">
              Australian banks offer a comprehensive suite of banking services,
              including:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1637169797848-12431f1d355c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-xs font-medium uppercase text-[#ff0]">
                  {""}
                </h3>
              </div>
              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800 last:after:hidden">
                  <div className="relative z-10 flex size-8 items-center justify-center">
                    <span className="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-800 text-xs font-semibold uppercase text-[#ff0]">
                      1
                    </span>
                  </div>
                </div>
                <div className="grow pb-8 pt-0.5 sm:pb-12">
                  <p className="text-sm text-neutral-400 lg:text-base">
                    <span className="pr-2 text-white">
                      Transaction Accounts
                    </span>
                    Ideal for everyday banking activities such as receiving
                    income, making payments, and withdrawing cash.
                  </p>
                </div>
              </div>
              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800 last:after:hidden">
                  <div className="relative z-10 flex size-8 items-center justify-center">
                    <span className="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-800 text-xs font-semibold uppercase text-[#ff0]">
                      2
                    </span>
                  </div>
                </div>
                <div className="grow pb-8 pt-0.5 sm:pb-12">
                  <p className="text-sm text-neutral-400 lg:text-base">
                    <span className="pr-2 text-white">Savings Accounts</span>
                    Allow you to save money while earning interest, with some
                    offering bonus rates for meeting certain conditions.
                  </p>
                </div>
              </div>
              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800 last:after:hidden">
                  <div className="relative z-10 flex size-8 items-center justify-center">
                    <span className="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-800 text-xs font-semibold uppercase text-[#ff0]">
                      3
                    </span>
                  </div>
                </div>
                <div className="grow pb-8 pt-0.5 sm:pb-12">
                  <p className="text-sm text-neutral-400 md:text-base">
                    <span className="pr-2 text-white">Term Deposits</span>
                    Provide a fixed interest rate for a specified term, offering
                    a guaranteed return on your investment.
                  </p>
                </div>
              </div>
              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800 last:after:hidden">
                  <div className="relative z-10 flex size-8 items-center justify-center">
                    <span className="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-800 text-xs font-semibold uppercase text-[#ff0]">
                      4
                    </span>
                  </div>
                </div>
                <div className="grow pb-8 pt-0.5 sm:pb-12">
                  <p className="text-sm text-neutral-400 md:text-base">
                    <span className="pr-2 text-white">Credit Cards</span>
                    Available with various features such as rewards programs,
                    low-interest rates, and interest-free periods, enabling you
                    to make purchases on credit and pay them off over time. Make
                    sure you pay them off before the interest kicks in!
                  </p>
                </div>
              </div>
              <a
                className="group inline-flex items-center gap-x-2 rounded-full bg-[#ff0] px-3 py-2 text-sm font-medium text-neutral-800 focus:outline-none"
                href={"#faq"}
              >
                <FaQuestionCircle className="size-4 flex-shrink-0"></FaQuestionCircle>
                Want to learn more?
              </a>
            </div>
          </div>
          <MoreInfo />
        </div>
      </div>
    </>
  );
};

export default BankCommonTerms;
