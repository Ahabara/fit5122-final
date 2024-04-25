import superPerson from "../assets/SuperBusinessMan.svg";

export const SuperHero = () => {
  return (
    <div
      className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
      id="superTop"
    >
      <div className="row-gap-8 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Up, Up and Away!
              <br className="hidden md:block" />
              <div className="md:text-3xl">
                Save To Infinity{" "}
                <span className="relative px-1">
                  <div className="bg-teal-accent-400 absolute inset-x-0 bottom-0 h-3 -skew-x-12 transform" />
                  <span className="text-deep-purple-accent-400 relative inline-block">
                    And Beyond
                  </span>
                </span>
              </div>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              You don't have to be a superhero to understand superannuation! As
              you embark on your journey in your new home, it's essential to
              understand the basics of superannuation, a key aspect of
              Australia's retirement system. Superannuation, often referred to
              as "super," is a way of saving money for your retirement.
            </p>
          </div>
          <div className="row-gap-8 grid gap-5 sm:grid-cols-2">
            <div className="border-deep-purple-accent-400 border-l-4 bg-white shadow-sm">
              <div className="h-full rounded-r border border-l-0 p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Still Young And Not Thinking About Retirement?
                </h6>
                <p className="text-sm text-gray-900">
                  Even if retirement feels like a distant prospect, there are
                  several reasons why superannuation should still be on your
                  radar!
                </p>
              </div>
            </div>
            <div className="border-deep-purple-accent-400 border-l-4 bg-white shadow-sm">
              <div className="h-full rounded-r border border-l-0 p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Don't know where to start?
                </h6>
                <p className="text-sm text-gray-900">
                  Life is unpredictable, and circumstances can change
                  unexpectedly. Let us help you navigate life's twists and
                  turns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-56 w-full overflow-visible rounded object-cover sm:h-96"
            src={superPerson}
            alt="Super hero with business suitcase"
          />
        </div>
      </div>
    </div>
  );
};
