import { useEffect, useState } from "react";
import Questionnaire from "./Questionnaire.tsx";
import Skeleton from "../../Skeleton.tsx";

interface Question {
  questionContent: string;
  options: string;
}
const ExplorerQuiz = () => {
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fourtitude.xyz/quiz");
        if (!response.ok) {
          console.log("Failed to fetch data");
          setLoading(false);
          setShowError(true);
        }
        const data = await response.json();
        setLoading(false);
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowError(true);
      }
    };

    fetchItems().catch((e) => console.log(e));
  }, []);

  if (showError) {
    return <h1 className="text-center">Error Fetching Data</h1>;
  }

  return (
    <div>
      {loading && <Skeleton />}
      <Questionnaire questions={data} />
    </div>
  );
};

export default ExplorerQuiz;
