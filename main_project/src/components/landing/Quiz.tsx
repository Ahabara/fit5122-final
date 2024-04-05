import { SetStateAction, useState } from "react";
import GameQuiz from "./GameQuiz.tsx";

const Quiz = () => {
  const quizQuestions = [
    {
      country: "England",
      question: "What is the capital of England?",
      options: ["London", "Manchester", "Birmingham", "Liverpool"],
      answer: "London",
      moreInfo:
        "London is not only the capital of England but also the largest city in the country.",
    },
    {
      country: "New Zealand",
      question: "Which city is the largest in New Zealand?",
      options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
      answer: "Auckland",
      moreInfo:
        "Auckland is the largest city in New Zealand, located on the North Island.",
    },
    {
      country: "China",
      question: "Which river is the longest in China?",
      options: ["Yellow River", "Yangtze River", "Pearl River", "Mekong River"],
      answer: "Yangtze River",
      moreInfo:
        "The Yangtze River is the longest river in China and the third-longest river in the world.",
    },
    {
      country: "India",
      question: "What is the currency of India?",
      options: ["Rupee", "Rupiah", "Taka", "Dinar"],
      answer: "Rupee",
      moreInfo:
        "The Indian Rupee is the official currency of India, issued by the Reserve Bank of India.",
    },
    {
      country: "Philippines",
      question:
        "How many islands does the Philippines consist of approximately?",
      options: ["7100", "1000", "3000", "5000"],
      answer: "7100",
      moreInfo:
        "The Philippines consists of approximately 7,100 islands, making it the second-largest archipelago in the world.",
    },
    {
      country: "Vietnam",
      question: "Which city is the capital of Vietnam?",
      options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
      answer: "Hanoi",
      moreInfo:
        "Hanoi is the capital and second-largest city of Vietnam, known for its rich history and cultural heritage.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const scoreMetric = (score: number): string => {
    if (score < 0.5) return "You could do better than this! Give it another go";
    if (score < 0.7 && score >= 0.5)
      return "Not bad but still room for improvement!";
    if (score >= 0.7 && score < 1) return "Almost perfect!";
    return "Perfect score! You really know your cultures!";
  };

  const handleNextQuestion = () => {
    const correctAnswer = quizQuestions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // TODO Process the data returned from the API
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }

  return (
    // TODO make dynamic and connect to SuburbMap
    <div id="quiz">
      {showScore ? (
        <div className="text-left text-black">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-xl">
            Your Score: {score}/{quizQuestions.length}
          </p>
          <p>{scoreMetric(score / quizQuestions.length)}</p>
          <div className="mt-4 flex flex-wrap justify-center">
            {quizQuestions.map((i, k) => (
              <GameQuiz
                i={k}
                moreInfo={i.moreInfo}
                answer={i.answer}
                question={i.question}
                key={k}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            {quizQuestions[currentQuestion].question}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:mx-44">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`border border-white p-2 text-myYellow hover:bg-purple-300 ${
                  selectedOption === option
                    ? "bg-myPurple text-white"
                    : "bg-gray-800"
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="mt-4 border border-white bg-myPurple p-2 text-white"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
