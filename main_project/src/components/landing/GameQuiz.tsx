import React from "react";
import yes from "../countries/assets/yes.png";
import no from "../countries/assets/no.png";

interface QuizCardProps {
  i: number;
  question: string;
  answer: string;
  moreInfo: string;
  isRight?: boolean;
}

const GameQuiz: React.FC<QuizCardProps> = ({
  i,
  question,
  answer,
  moreInfo,
  isRight,
}) => {
  return (
    <div className="m-4 max-w-sm rounded-lg border-2 border-myDarkPurple">
      <div className="flex  h-full flex-col bg-myPurple p-4 dark:bg-gray-800">
        <div className="mb-3 flex ">
          <h2 className="text-lg font-medium text-white dark:text-white">
            {i + 1}. {question}
            <img src={isRight ? yes : no} alt="yesorno" className="h-5" />
          </h2>
        </div>
        <div className="flex flex-grow flex-col justify-stretch">
          <p className="text-gray-700">
            <span className="font-bold">Correct Answer:</span> {answer}
          </p>
          <p className="text-base leading-relaxed text-white dark:text-gray-300">
            {moreInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameQuiz;
