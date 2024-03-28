import React, { useState } from 'react';
import GameCard from "./GameCard.tsx";
import GameQuiz from "./GameQuiz.tsx";
interface Item {
    id: number;
    question: string;
    correct: boolean;
    options: { id: number; text: string; correct: boolean }[];
    correctOption: string
}

const Game: React.FC = () => {
    const [draggedItem, setDraggedItem] = useState<Item | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const questions: Item[] = [
        {
            id: 1,
            question: 'What is Mingzhis role',
            correct: true,
            correctOption: "Back End",
            options: [
                { id: 1, text: 'Back End', correct: true },
                { id: 2, text: 'Front End', correct: false },
                { id: 3, text: "UI Designer", correct: false },
                { id: 4, text: 'Data Scientist', correct: false },
            ],
        },
        {
            id: 2,
            question: 'How many siblings does Erman have',
            correct: false,
            correctOption: "Way Too Many",
            options: [
                { id: 1, text: 'Just One', correct: false },
                { id: 2, text: 'Only Two', correct: false },
                { id: 3, text: 'Only Child', correct: false },
                { id: 4, text: "Way Too Many", correct: true },
            ],
        },
        {
            id: 3,
            question: 'Where is Aneri from',
            correct: false,
            correctOption : "Gujarat",
            options: [
                { id: 1, text: 'Gujarat', correct: true },
                { id: 2, text: 'Uttar Pradesh', correct: false },
                { id: 3, text: 'Tamil Nadu', correct: false },
                { id: 4, text: "Bihar", correct: false },
            ],
        },
    ];
    const scoreMetric = (score:number):string => {
        if (score < 0.5) return "You could do better than this! Give it another go"
        if (score < 0.7 && score >= 0.5) return "Not bad but still room for improvement!"
        if (score >= 0.7 && score < 1) return "Almost perfect!"
        return "Perfect score! You really know your cultures!"
    }

    // Event handler for when an item starts being dragged
    const handleDragStart = (_e: React.DragEvent<HTMLDivElement>, item: Item) => {
        setDraggedItem(item);
    };

    // Event handler for when an item is dropped into a box
    const handleDrop = (_e: React.DragEvent<HTMLDivElement>, targetOption: { id: number; text: string; correct: boolean }) => {
        if (draggedItem && targetOption.correct) {
            setScore(score + 1);
        }
        setModalIsOpen(true);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        // justify-center removed
        <div className=" min-h-screen text-myYellow flex flex-col items-center ">
            {currentQuestion < questions.length ? (
                <>
                    <h1>{questions[currentQuestion].question.toString()}</h1>

                        <div
                            key={questions[currentQuestion].id}
                            className="item flex items-center w-32 p-4 rounded-lg cursor-pointer"
                            draggable
                            onDragStart={(e) => handleDragStart(e, questions[currentQuestion])}
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/15271/15271526.png" alt=""/>
                        </div>

                    <div className="grid md:grid-cols-2">

                        {/* Boxes */}
                        {questions[currentQuestion].options.map((option) => (
                            <div
                                key={option.id}
                                className="p-4 mr-4"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleDrop(e, option)}
                            >
                                <GameCard text={option.text} styling={option.id}/>
                            </div>
                        ))}
                    </div>
                    {/* Draggable Item */}

                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">Game Over!</h2>
                    <h3 className="text-lg">Your Score: {score}</h3>
                    <p>{score}/{questions.length}</p>
                    <p>{scoreMetric(score / questions.length)}</p>
                    <div className="flex flex-wrap justify-center mt-4">
                        {questions.map((i, k) => (
                            <GameQuiz i={k} answer={i.correctOption} question={i.question} key={k} moreInfo={"Remember to change me"}/>
                        ))}
                    </div>
                </div>
            )}
            {modalIsOpen && <p></p>}
        </div>
    );
};

export default Game;
