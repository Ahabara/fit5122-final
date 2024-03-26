import hero from "../assets/hero.png"
const Hero = () => {
    return (
        <section
            className="relative bg-gradient-to-r from-violet-200 to-pink-200 bg-cover bg-center bg-no-repeat lg:pb-32 ">
            <div
                className="absolute inset-0 ">
            </div>
            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:h-128 lg:flex lg:items-center lg:justify-between lg:px-8">
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
                    <img className="lg:hidden md:h-52 py-1" src={hero} alt="diverse teamwork hero picture"/>

                    <h1 className="pt-8 lg:pt-0 font-extrabold text-5xl">
                        Make Australia
                        <strong className="block font-extrabold text-myYellow "> <span
                            className="bg-myPurple border-violet-200 border-4">Home.</span> </strong>
                    </h1>
                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>


                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="block w-full border border-black  bg-myPurple px-12  drop-shadow-sm py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"*/}
                        {/*>*/}
                        {/*    Get Started*/}
                        {/*</a>*/}


                        <a href="#_" className="relative px-6 py-3 font-bold text-black group">
                            <span
                    className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-myPurple group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                            <span className="relative">Learn More</span>
                        </a>
                        <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                            <span
                                className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-myPurple group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span
                                className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-myPurple"></span>
                            <span className="relative text-black group-hover:text-black">Get Started</span>
                        </a>
                    </div>
                </div>
                <img className="invisible lg:visible lg:my-4 lg:h-2/3 transition duration-300 ease-in-out hover:-translate-x-8" src={hero} alt="diverse teamwork hero picture"/>
            </div>
        </section>
    );
};

export default Hero;