import melbourne from "./assets/melbourne.webp";

const ExploreHero = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex  flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-4 md:text-left lg:flex-grow">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-6xl">
              Explore Melbourne's Diversity:
              <br className="hidden lg:inline-block" />
              Find Your Ideal Suburb
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover the vibrant tapestry of Melbourne's neighborhoods by
              completing our questionnaire. Delve into the city's rich cultural
              mosaic and uncover a suburb that reflects your unique interests
              and preferences. Let us guide you through Melbourne's diverse
              communities and help you find the perfect spot to experience the
              essence of this dynamic city.
            </p>
            <div className="flex justify-center">
              <a href="/explore#quiz">
                <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Take Our Quiz
                </button>
              </a>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src={melbourne}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreHero;
