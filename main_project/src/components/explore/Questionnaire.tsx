import React, { useState } from "react";
import SuburbMap from "./SuburbMap.tsx";

interface Question {
  questionContent: string;
  options: string;
}

interface CensusData {
  ethnic: string;
  suburb: string;
  population: number;
  percentage: number;
}

interface AddressObj {
  street1: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
  addressString: string;
}

interface TripAdvisorData {
  locationId: string;
  name: string;
  distance: string;
  bearing: string;
  addressObj: AddressObj;
}

interface LocationData {
  census: CensusData;
  tripAdvisor: {
    data: TripAdvisorData[];
  };
}

const Questionnaire: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const handleOptionSelect = (questionIndex: number, answer: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  const splitOptions = (options: string): string[] => {
    return options.split("&");
  };

  const handleSubmit = async () => {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == undefined) {
        setError(true);
        setErrorMessage("Please complete the questions");
        return;
      }
    }
    setError(false);
    try {
      const response = await fetch("https://fourtitude.xyz/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });
      const responseData = await response.json();
      setLocationData(responseData.data);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-lg">
        <h1 className="mb-4 text-3xl font-semibold">Questionnaire</h1>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              {question.questionContent}
            </h2>
            <ul>
              {splitOptions(question.options).map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`cursor-pointer rounded-md px-4 py-2 ${
                    answers[questionIndex] === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleOptionSelect(questionIndex, option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {error && <p>{errorMessage}</p>}
      </div>
      <div className="container mx-auto">
        {locationData && <SuburbMap locationData={locationData} />}
      </div>
    </>
  );
};

export default Questionnaire;
