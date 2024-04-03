import React from "react";
import greetingIcon from "./assets/hello.png";

interface Greeting {
  greeting: string;
  meaning: string;
}
interface GreetingProps {
  greeting: Greeting[];
}

export const Greetings: React.FC<GreetingProps> = ({ greeting }) => {
  return (
    <>
      <div className="flex items-center py-8">
        <img
          src={greetingIcon}
          alt="Description of image"
          className=" mr-2 h-12"
        />
        <p className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
          Greetings
        </p>
      </div>
      <p className="mb-4 text-base leading-relaxed lg:w-3/4 xl:w-3/4">
        Explore common greetings across cultures! Understanding these cultural
        nuances fosters smoother interactions and deeper connections.
      </p>
      <ul>
        {Object.entries(greeting).map(([key, value]) => (
          <li key={key} className="mb-3">
            <span className="mr-4 font-semibold">{value.greeting}:</span>{" "}
            {value.meaning}
          </li>
        ))}
      </ul>
    </>
  );
};
