import React from "react";
import eventsIcon from "./assets/candelabra.png";
import { SignificantEvent } from "./SignificantEvent.tsx";
import language from "./assets/languages.png";

interface FestivalInfo {
  festival: string;
  date: string;
  significance: string;
  imageUrl: string;
}

export const SignificantEvents: React.FC<{ events: FestivalInfo[] }> = ({
  events,
}) => {
  return (
    <>
      <div className="flex items-center py-8">
        <img
          src={eventsIcon}
          alt="Description of image"
          className=" mr-2 h-12"
        />
        <p className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
          Significant Events
        </p>
      </div>
      <div className="-m-4 flex flex-wrap">
        {events.map((i) => (
          <SignificantEvent
            name={i.festival}
            image={i.imageUrl}
            description={i.significance}
            date={i.date}
          />
        ))}
      </div>
      <div className="flex items-center py-8">
        <img src={language} alt="Description of image" className=" mr-2 h-12" />
        <p className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
          Languages Spoken
        </p>
      </div>
    </>
  );
};
