import melbourne from "./assets/melbourne_art.svg";

const SuburbExplorerSecondHero = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-start px-5 py-24 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="w-128 rounded-3xl object-cover object-center"
              alt="hero"
              src={melbourne}
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24 lg:pt-14">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              Need A Holiday But Can't Travel Far?
              <br className="hidden lg:inline-block" />
              <h2 className="lg:text-2xl">Let Us Help you!</h2>
            </h1>
            <p className="mb-8 leading-relaxed">
              By taking our quiz, we'll guide you through Melbourne's diverse
              communities and help you discover the perfect suburb to call
              home—an area not just to live in, but to engage with and
              contribute to the flourishing multicultural landscape of
              Australia's melting pot. Experience the world within our streets
              as you find a place not just to live, but to connect and grow.
              Find your place, find your people, and grow with Melbourne. Take
              our quiz and start your journey today!
              <br />
              <br />
              With flavours, festivities, and tales from over 137 countries,
              every corner of Melbourne offers an exotic escape! Select the
              answer that bests represents you as a person and let us do the
              rest!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuburbExplorerSecondHero;
