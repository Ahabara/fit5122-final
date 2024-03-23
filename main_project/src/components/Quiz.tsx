import React, {SetStateAction, useState} from "react";

interface QuizCardProps{
    i: number
    question: string
    answer: string
    moreInfo:string
}
const Card:React.FC<QuizCardProps> = ({i, question, answer, moreInfo}) => {
    return <div className="p-4 max-w-sm">
        <div className="flex  h-full dark:bg-gray-800 bg-myPurple p-4 flex-col">
            <div className="flex items-center mb-3">
                {/*<div*/}
                {/*    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">*/}
                {/*    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                {/*         strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
                {/*        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>*/}
                {/*    </svg>*/}
                {/*</div>*/}
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

const Quiz = () => {
    const quizQuestions = [
        {
            country: "England",
            question: "What is the capital of England?",
            options: ["London", "Manchester", "Birmingham", "Liverpool"],
            answer: "London",
            moreInfo: "London is not only the capital of England but also the largest city in the country."
        },
        {
            country: "New Zealand",
            question: "Which city is the largest in New Zealand?",
            options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
            answer: "Auckland",
            moreInfo: "Auckland is the largest city in New Zealand, located on the North Island."
        },
        {
            country: "China",
            question: "Which river is the longest in China?",
            options: ["Yellow River", "Yangtze River", "Pearl River", "Mekong River"],
            answer: "Yangtze River",
            moreInfo: "The Yangtze River is the longest river in China and the third-longest river in the world."
        },
        {
            country: "India",
            question: "What is the currency of India?",
            options: ["Rupee", "Rupiah", "Taka", "Dinar"],
            answer: "Rupee",
            moreInfo: "The Indian Rupee is the official currency of India, issued by the Reserve Bank of India."
        },
        {
            country: "Philippines",
            question: "How many islands does the Philippines consist of approximately?",
            options: ["7100", "1000", "3000", "5000"],
            answer: "7100",
            moreInfo: "The Philippines consists of approximately 7,100 islands, making it the second-largest archipelago in the world."
        },
        {
            country: "Vietnam",
            question: "Which city is the capital of Vietnam?",
            options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
            answer: "Hanoi",
            moreInfo: "Hanoi is the capital and second-largest city of Vietnam, known for its rich history and cultural heritage."
        }
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleOptionSelect = (option: SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const scoreMetric = (score:number):string => {
        if (score < 0.5) return "You could do better than this! Give it another go"
        if (score < 0.7 && score >= 0.5) return "Not bad but still room for improvement!"
        if (score >= 0.7 && score < 1) return "Almost perfect!"
      return "Perfect score! You really know your cultures!"
    }

    const handleNextQuestion = () => {
        const correctAnswer = quizQuestions[currentQuestion].answer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }

        setSelectedOption('');
        if (currentQuestion + 1 < quizQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    return (
        <section className="bg-myBlack text-amber-50 mx-auto px-12 py-8">
            <p className="text-6xl text-amber-50 max-w-lg py-8">Ready To <span
                className="bg-myPurple px-2">Test</span> Your Knowledge?</p>
                {showScore ? (
                    <div className="text-left text-amber-50">
                        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
                        <p className="text-xl mt-4">Your Score: {score}/{quizQuestions.length}</p>
                        <p>{scoreMetric(score/quizQuestions.length)}</p>
                        <div className="flex flex-wrap justify-center mt-4">
                        {quizQuestions.map((i, k)=> (
                                <Card i={k} moreInfo={i.moreInfo} answer={i.answer} question={i.question} key={k}/>

                        ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{quizQuestions[currentQuestion].question}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {quizQuestions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`p-2  border border-white hover:bg-purple-300 ${
                                        selectedOption === option ? 'bg-myPurple text-white' : 'bg-gray-950'
                                    }`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <button
                            className="mt-4 p-2 bg-myPurple text-white border border-white"
                            onClick={handleNextQuestion}
                            disabled={!selectedOption}
                        >
                            Next
                        </button>
                    </div>
                )}
        </section>
    );
};

export default Quiz;