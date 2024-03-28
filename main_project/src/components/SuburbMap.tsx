import React, {useState} from "react";

interface MapItemProps {
    title: string,
    description: string,
    link?: URL
}
const MapItem: React.FC<MapItemProps> = ({title, description}) =>
    <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
            <p className="leading-relaxed text-base">{description}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round"
                     strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2"
                     viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>;


    interface SuburbMapProps{
        city:string
    }
const SuburbMap:React.FC<SuburbMapProps> = ({city}) => {
    const cityURL:string = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${city},melbourne+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

    const [style, setStyle] = useState("grayscale(1) contrast(1.2) opacity(0.4)");
    return (
        <section className="text-gray-600 body-font relative ">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"

                    title="map"
                    scrolling="yes"
                    src={cityURL}
                    style={{
                        filter: style,
                        // height: "1300px"
                    }}
                ></iframe>

            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div
                    className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Recommendations</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Explore the best Clayton has to offer!</p>

                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10  lg:text-left text-center">
                    <MapItem title={"Monash"} description={"Poopy Bad"}/>
                    <MapItem title={"The Catalyzer"} description={"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."}/>
                      <MapItem title={"Neptune"} description={"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine"} />
                    </div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"

                        onClick={() => setStyle("")}>Button
                    </button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook
                        viral artisan.</p>
                </div>
            </div>
        </section>
    );
};




export default SuburbMap;