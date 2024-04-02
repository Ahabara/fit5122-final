import React from "react";
import eventsIcon from "./assets/candelabra.png";
import {SignificantEvent} from "./SignificantEvent.tsx";
import language from "./assets/languages.png";

interface SignificantEventsProps {
    Description: string;
    name: string;
    "Image URL": string;
}

export const SignificantEvents: React.FC<{ events: SignificantEventsProps[] }> = ({events}) => {
    return (
        <>
            <div className="flex items-center py-8">
                <img src={eventsIcon} alt="Description of image" className=" h-12 mr-2"/>
                <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Significant
                    Events</p>
            </div>
            <div className="flex flex-wrap -m-4">
                {events.map((i) => (
                    <SignificantEvent name={i.name} image={i["Image URL"]} description={i.Description}/>
                ))}
            </div>
            <div className="flex items-center py-8">
                <img src={language} alt="Description of image" className=" h-12 mr-2"/>
                <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Languages
                    Spoken</p>
            </div>
        </>
    );
};