import React from "react";
import {twMerge} from "tailwind-merge";

interface GameCardProps {
    text:string
    styling: number
}
const GameCard:React.FC<GameCardProps> = ({text, styling}) => {
    const stylingOptions: string[] = [
        "bg-myDarkPurple ",
        "bg-myPink ",
        "bg-myBlue",
        "bg-myRed",
    ]

    const className = twMerge("flex-shrink-0 m-6 relative overflow-hidden max-w-xs ", stylingOptions[styling-1] )
    return (
        <div>
            <div className={className}>
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                     style={{transform: 'scale(1.5)', opacity: 0.1}}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                          fill="white"/>
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                </svg>

                <div className="relative pt-10 px-10 flex items-center justify-center">


                </div>
                <div className="relative text-gray-700 px-6 pb-6 mt-6">
                    {/*<span className="block opacity-75 -mb-1">Outdoor</span>*/}
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">{text}</span>
                        {/*<span*/}
                        {/*    className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;