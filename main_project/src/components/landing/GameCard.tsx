import React from "react";
import { twMerge } from "tailwind-merge";

interface GameCardProps {
  text: string;
  styling: number;
}
const GameCard: React.FC<GameCardProps> = ({ text, styling }) => {
  const stylingOptions: string[] = [
    "bg-myDarkPurple ",
    "bg-myPink ",
    "bg-myBlue",
    "bg-myRed",
  ];

  const className = twMerge(
    "relative overflow-hidden hover:opacity-90 ",
    stylingOptions[styling - 1],
  );
  return (
    <div>
      <div className={className}>
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative flex items-center justify-center px-10 pt-10"></div>
        <div className="relative mt-6 px-6 pb-6 text-gray-700">
          <div className="flex justify-between">
            <span className="block text-xl font-semibold">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
