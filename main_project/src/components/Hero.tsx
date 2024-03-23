import hero from "../assets/hero.png"
const Hero = () => {
    return (
        <section
            className="relative bg-myYellow bg-cover bg-center bg-no-repeat lg:pb-32 ">
            <div
                className="absolute inset-0 ">
            </div>
            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:h-128 lg:flex lg:items-center lg:justify-between lg:px-8">
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
                    <img className="lg:hidden md:h-52 py-1" src={hero} alt="diverse teamwork hero picture"/>
                    <h1 className="pt-8 lg:pt-0 font-extrabold text-5xl">
                        Make Australia
                        <strong className="block font-extrabold text-myOrange "> <span
                            className="bg-myPurple border-myYellow border-4">Home.</span> </strong>
                    </h1>
                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full border border-black  bg-myPurple px-12  drop-shadow-sm py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full border  drop-shadow-2xl border-black hover:bg-black hover:border-white hover:text-amber-50 bg-white px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <img className="invisible lg:visible lg:my-4 lg:h-2/3" src={hero} alt="diverse teamwork hero picture"/>
            </div>
        </section>
    );
};

export default Hero;