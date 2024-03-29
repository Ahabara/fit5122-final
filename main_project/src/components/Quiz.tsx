import {SetStateAction, useState} from "react";
import Game from "./Game.tsx";
import GameQuiz from "./GameQuiz.tsx";
import StartGame from "./StartGame.tsx";


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
        <section className="bg-gradient-to-b from-myBlack to-purple-900 text-amber-50 mx-auto px-12 py-8">
            <p className="text-6xl text-amber-50 max-w-lg pt-8">Ready To <span
                className="bg-myPurple px-2">Test</span> Your Knowledge?</p>
            <h1 className="text-2xl mb-8">Drag and Drop Game</h1>
            <StartGame/>
            <Game/>
            {showScore ? (
                <div className="text-left text-amber-50">
                    <h2 className="text-2xl font-bold">Quiz Completed!</h2>
                    <p className="text-xl mt-4">Your Score: {score}/{quizQuestions.length}</p>
                    <p>{scoreMetric(score / quizQuestions.length)}</p>
                    <div className="flex flex-wrap justify-center mt-4">
                        {quizQuestions.map((i, k) => (
                            <GameQuiz i={k} moreInfo={i.moreInfo} answer={i.answer} question={i.question} key={k}/>

                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4">{quizQuestions[currentQuestion].question}</h2>
                    <div className="grid grid-cols-2 gap-4 md:mx-44">
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