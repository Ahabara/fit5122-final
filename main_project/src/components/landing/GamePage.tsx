import { useEffect, useState } from "react";
import Game from "./Game.tsx";
import StartGame from "../StartGame.tsx";

export function GamePage() {
  const [questions, setQuestions] = useState<Item[]>([]);
  const [startGame, setStartGame] = useState(false);
  interface Item {
    imageURL: string;
    country: string;
    signification: string;
    questionContent: string;
    options: string[];
    correctOption: string;
    id: number;
  }
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fourtitude.xyz/game/items");
        if (!response.ok) {
          console.log("Failed to fetch data");
        }
        const data = await response.json();
        setQuestions(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems().catch((e) => console.log(e));
  }, []);

  function handleGame() {
    if (questions.length >= 0) {
      setStartGame(true);
    }
  }

  return (
    <section
      className="mx-auto bg-gradient-to-b from-myBlack to-purple-900 px-12 py-8 text-amber-50"
      id="game"
    >
      <p className="max-w-lg pt-8 text-6xl text-amber-50">
        Ready To <span className="bg-myPurple px-2">Test</span> Your Knowledge?
      </p>
      <h1 className="text-2xl">Drag and Drop Game</h1>
      <p className="mb-8">
        Drag and drop the image to the box that you think is correct!
      </p>
      {!startGame && <StartGame onClick={handleGame} />}
      {startGame && <Game questions={questions} />}
      {/*<Game />*/}
    </section>
  );
}
