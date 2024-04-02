import React from "react";

interface SignificantEventProps {
    image?: string
    description?: string
    name?: string

}

export const SignificantEvent: React.FC<SignificantEventProps> = ({image, description, name}) => <div
    className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6"
             src={image} alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Date of Event</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{name}</h2>
        <p className="leading-relaxed text-base">{description}</p>
    </div>
</div>;