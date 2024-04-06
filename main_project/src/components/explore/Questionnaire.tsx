import React, { useState } from "react";
import SuburbMap from "./SuburbMap.tsx";
import Skeleton from "../../Skeleton.tsx";

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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const response = await fetch("https://fourtitude.xyz/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });
      const responseData = await response.json();
      setLoading(false);
      setLocationData(responseData.data);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div className="container mx-auto pb-24" id="quiz">
      <div className="px-8 pb-12 md:px-0 lg:w-128">
        <h1 className="mb-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl lg:text-6xl">
          Questionnaire
        </h1>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              {question.questionContent}
            </h2>
            <ul className="border-2 border-myDarkPurple">
              {splitOptions(question.options).map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`cursor-pointer  px-4 py-2 ${
                    answers[questionIndex] === option
                      ? "bg-myPurple text-white"
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
        <div
          onClick={handleSubmit}
          className="group relative inline-block px-4 py-2 font-medium"
        >
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-myPurple transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-myPurple"></span>
          <span className="relative text-black group-hover:text-black">
            Submit
          </span>
        </div>
        {error && <p>{errorMessage}</p>}
      </div>
      <div className="container mx-auto">
        {loading && <Skeleton />}
        {locationData && <SuburbMap locationData={locationData} />}
      </div>
    </div>
  );
};

export default Questionnaire;
