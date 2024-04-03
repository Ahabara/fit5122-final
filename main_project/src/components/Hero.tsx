import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-violet-200 to-pink-200 bg-cover bg-center bg-no-repeat lg:pb-32 2xl:h-screen">
      <div className="absolute inset-0 "></div>
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-128 lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <img
            className="py-1 md:h-52 lg:hidden"
            src={hero}
            alt="diverse teamwork hero picture"
          />
          <h1 className="pt-8 text-5xl font-extrabold lg:pt-0">
            Make Australia
            <strong className="block font-extrabold text-myYellow ">
              {" "}
              <span className="border-4 border-violet-200 bg-myPurple">
                Home.
              </span>{" "}
            </strong>
          </h1>
          <p className="mt-4 max-w-lg pl-2 sm:text-xl/relaxed">Womindjeka</p>
          <div className="pl-4 text-sm">
            <p>/wɒmɪnˈd͡ʒɛkə/</p>{" "}
            <span className="flex">
              <p className="mr-4 bg-gray-300">FORMAL</p>
              <p className="italic">verb</p>
            </span>
          </div>
          <p className="mt-2 max-w-lg sm:text-xl/relaxed">
            Womindjeka means ‘welcome’ in the Woi-wurrung language of the
            Wurundjeri people of the Eastern Kulin. Make your stay memorable!
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#_"
              className="group relative px-6 py-3 font-bold text-black"
            >
              <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
              <span className="relative">Learn More</span>
            </a>
            <a
              href="#_"
              className="group relative inline-block px-4 py-2 font-medium"
            >
              <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-myPurple transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-myPurple"></span>
              <span className="relative text-black group-hover:text-black">
                Get Started
              </span>
            </a>
          </div>
        </div>
        <img
          className="invisible transition duration-300 ease-in-out hover:-translate-x-8 lg:visible lg:my-4 lg:h-2/3"
          src={hero}
          alt="diverse teamwork hero picture"
        />
      </div>
    </section>
  );
};

export default Hero;
