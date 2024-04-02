import melbourne from "./assets/melbourne.webp"
const ExploreHero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2  md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Explore Melbourne's Diversity:
                            <br className="hidden lg:inline-block"/>Find Your Ideal Suburb
                        </h1>
                        <p className="mb-8 leading-relaxed">Discover the vibrant tapestry of Melbourne's neighborhoods by completing our questionnaire. Delve into the city's rich cultural mosaic and uncover a suburb that reflects your unique interests and preferences. Let us guide you through Melbourne's diverse communities and help you find the perfect spot to experience the essence of this dynamic city.</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Take Our Quiz
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero"
                             src={melbourne}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExploreHero;