import React from "react";
import woman from "./assets/woman.png";

interface TraditionalClothingProps {
    description: string,
}

export const TraditionalClothing: React.FC<TraditionalClothingProps> = ({description}) => <>
    <div className="flex items-center py-8">
        <img src={woman} alt="Description of image" className=" h-12 mr-2"/>
        <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Traditional Clothing</p>
    </div>
    <p className="text-base mb-4 leading-relaxed xl:w-3/4 lg:w-3/4">{description}</p>
</>;