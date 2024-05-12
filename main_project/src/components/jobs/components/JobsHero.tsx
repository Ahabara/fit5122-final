const JobsHero = () => {
  return (
    <div className="">
      <section className=" py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold uppercase tracking-wider text-blue-600">
                Career Insights
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black sm:text-6xl lg:mt-8 xl:text-8xl">
                Find Your Next Job In Australia!
              </h1>
              <p className="mt-4 text-base text-black sm:text-xl lg:mt-8">
                Welcome to the vibrant world of employment in Victoria,
                Australia! Let's take a closer look at the dynamic landscape of
                job opportunities, trends, and forecasts that shape your career
                journey.
              </p>

              <a
                href="#"
                title=""
                className="mt-8 inline-flex items-center rounded-full bg-yellow-300 px-6 py-4 font-semibold text-black transition-all duration-200 hover:bg-yellow-400 focus:bg-yellow-400 lg:mt-16"
                role="button"
              >
                Learn More
                <svg
                  className="-mr-2 ml-8 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsHero;
