import React from "react";

interface QuizCardProps{
    i: number
    question: string
    answer: string
    moreInfo:string
}

const GameQuiz:React.FC<QuizCardProps> = ({i, question, answer, moreInfo}) => {
    return <div className="p-4 max-w-sm">
        <div className="flex  h-full dark:bg-gray-800 bg-myPurple p-4 flex-col">
            <div className="flex items-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium">{i +1}. {question}</h2>
            </div>
            <div className="flex flex-col justify-stretch flex-grow">
                <p className="text-gray-700">{answer}</p>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    {moreInfo}
                </p>
            </div>
        </div>
    </div>
}

export default GameQuiz;