import React from "react";
import greeting from "./assets/hello.png";

interface GreetingsProps {
    [key: string]: string;
}

export const Greetings: React.FC<{ greetings: GreetingsProps }> = ({greetings}) => {
    return <>
        <div className="flex items-center py-8">
            <img src={greeting} alt="Description of image" className=" h-12 mr-2"/>
            <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Greetings</p>
        </div>
        <p className="text-base mb-4 leading-relaxed xl:w-3/4 lg:w-3/4">Explore common greetings across cultures!
            Understanding these cultural nuances fosters smoother
            interactions and deeper connections.</p>
        <ul>
            {Object.entries(greetings).map(([key, value]) => (
                <li key={key} className="mb-3">
                    <span className="font-semibold">{key}:</span> {value}
                </li>
            ))}
        </ul>
    </>
}