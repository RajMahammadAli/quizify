import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function () {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [totalNumber, setTotalNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAns, setUserAns] = useState([]);

  const { handleResult } = useContext(AuthContext);

  const navigate = useNavigate();
  const question = questions[questionCount];
  useEffect(() => {
    axios
      .get("/Question.json")
      .then((res) => {
        setQuestions(res.data.questions);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  const handleNext = () => {
    if (questionCount === questions.length) {
      return;
    }
    setQuestionCount(questionCount + 1);
    setIsSelected(false);
  };
  const handlePrevious = () => {
    if (questionCount === 0) {
      return;
    }
    setQuestionCount(questionCount - 1);
  };

  const handleOption = (item) => {
    setIsSelected(true);
    setSelectedOption(item);
    let userAnswers = [...userAns, item];
    setUserAns(userAnswers);
    if (item === question.correctAnswer) {
      setTotalNumber(totalNumber + 1);
    }
  };

  const handleSubmit = () => {
    navigate("/result");
    handleResult(totalNumber, questions);
  };

  console.log(userAns);

  return (
    <>
      <div className="w-[50%] grid grid-cols-1 mx-auto m-8">
        <Card
          question={question}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          questionCount={questionCount}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          handleOption={handleOption}
          selectedOption={selectedOption}
          userAns={userAns}
          questions={questions}
          handleSubmit={handleSubmit}
        ></Card>
      </div>
    </>
  );
}
