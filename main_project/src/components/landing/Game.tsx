import React, { useState } from "react";
import GameCard from "./GameCard.tsx";
import GameQuiz from "./GameQuiz.tsx";

interface Item {
  imageURL: string;
  country: string;
  signification: string;
  questionContent: string;
  options: string[];
  correctOption: string;
  id: number;
}

interface GameProps {
  questions: Item[];
}

const Game: React.FC<GameProps> = ({ questions }) => {
  const [draggedItem, setDraggedItem] = useState<Item | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [right, setRight] = useState<boolean[]>([]);

  const scoreMetric = (score: number): string => {
    if (score < 0.5) return "You could do better than this! Give it another go";
    if (score < 0.7 && score >= 0.5)
      return "Not bad but still room for improvement!";
    if (score >= 0.7 && score < 1) return "Almost perfect!";
    return "Perfect score! You really know your cultures!";
  };
  const handleDragStart = (_e: React.DragEvent<HTMLDivElement>, item: Item) => {
    setDraggedItem(item);
  };
  const handleDrop = (
    _e: React.DragEvent<HTMLDivElement>,
    targetOption: string,
  ) => {
    console.log("target option: ", targetOption);
    console.log("draggedItem: ", draggedItem);
    if (draggedItem?.correctOption === targetOption) {
      console.log(score + 1);
      setScore(score + 1);
      setRight([...right, true]);
    } else setRight([...right, false]);
    setModalIsOpen(true);
    setCurrentQuestion(currentQuestion + 1);
  };

  const startOver = () => {
    setScore(0);
    setRight([]);
    setCurrentQuestion(0);
  };

  return (
    <>
      {currentQuestion < questions.length && (
        <div className="container">
          <h1 className="title-font mb-4 text-left text-3xl font-medium sm:text-3xl">
            {questions[currentQuestion]!.questionContent}
          </h1>
        </div>
      )}

      <div className="flex min-h-screen flex-col items-center text-myYellow">
        {currentQuestion < questions.length ? (
          <>
            <div className="container mx-auto flex flex-col items-center px-5 py-8 md:flex-row">
              <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                <div
                  key={questions[currentQuestion].id}
                  className="item flex cursor-pointer items-center"
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(e, questions[currentQuestion])
                  }
                >
                  <img
                    src={questions[currentQuestion].imageURL}
                    className="h-96 w-full rounded-md object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                <div className="grid h-full w-full lg:grid-cols-2">
                  {/* Boxes */}
                  {questions[currentQuestion].options.map((option, i) => (
                    <div
                      key={i}
                      className="m-1"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, option)}
                    >
                      <GameCard text={option.toString()} styling={i + 1} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-left">
            <h2 className="mb-4 text-3xl font-bold">Game Over!</h2>
            <h3 className="text-2xl">
              Your Score: {score}/{questions.length}
            </h3>
            <p>{scoreMetric(score / questions.length)}</p>
            <div className="mt-4 flex flex-wrap justify-center">
              {questions.map((i, k) => (
                <GameQuiz
                  isRight={right[k]}
                  i={k}
                  answer={i.correctOption}
                  question={i.questionContent}
                  key={k}
                  moreInfo={i.signification}
                />
              ))}
            </div>
            <div
              className="flex justify-center py-5 hover:cursor-pointer"
              onClick={startOver}
            >
              <a className="group relative px-6 py-3 font-bold text-black">
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myBlue transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
                <span className="relative">Play Again</span>
              </a>
            </div>
          </div>
        )}
        {modalIsOpen && <p></p>}
      </div>
    </>
  );
};

export default Game;
