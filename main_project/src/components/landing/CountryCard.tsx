import React from "react";

interface CountryCardProps {
    image: string
    name: string
    subtitle:string
    
}
const CountryCard: React.FC<CountryCardProps>  = ({image, name, subtitle}) => {

    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:cursor-pointer">
            <img
                src={image}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl md:grayscale md:hover:grayscale-0"
            />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{subtitle}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold  p-1 rounded-sm bg-myPurple bg-opacity-10 text-gray-500 my-3 hover:text-white hover:bg-opacity-100 cursor-pointer transition duration-200">Learn More</p>
                    </div>
                </div>
        </div>
    );
};

export default CountryCard;