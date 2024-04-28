import bankSquare from "./assets/bank-square.svg";

const BankRatesHero = () => {
  return (
    <div>
      <div className=" ">
        <div className="mx-auto px-4 sm:max-w-xl md:max-w-full md:px-24  lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">
                <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-neutral-800 sm:text-7xl sm:leading-snug">
                  Don't Settle For Anything
                  <span className="my-1 ml-1 inline-block border-b-8 border-black bg-myDarkPurple px-4 font-bold text-white">
                    Less
                  </span>
                </h2>
                <p className="text-base text-gray-800">
                  Settling in to a new country doesn't mean you have to settle
                  on you bank interest rates. We've compiled the best interest
                  rates in Australia. All you have to do is choose on. Need help
                  picturing how much you'll earn? Press on the bank and let us
                  do the rest!
                </p>
              </div>
            </div>
            {/*className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"*/}

            <div className="relative hidden lg:ml-12 lg:block lg:w-1/2">
              <img src={bankSquare} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankRatesHero;
