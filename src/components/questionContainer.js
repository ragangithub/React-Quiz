import React, { useState, useEffect } from "react";
import Question from "./question";
import promise from "../questionService";
const QuestionContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [hide, setHide] = useState(true);
  const [globalSolution, setGlobalSolution] = useState(null);
  const [restartFlag, setRestartFlag] = useState(false);
  const [restartHide, setRestartHide] = useState(true);

  const [counter, setCounter] = useState(1);

  let [currentQuestion, setCurrentQuestion] = useState();
  useEffect(() => {
    promise.then((data) => {
      setQuestions(data);
      setCurrentQuestion(data[0]);
    });
  }, []);
  useEffect(() => {
    promise.then((data) => {
      setQuestions(data);
      setCurrentQuestion(data[0]);
    });
  }, [restartFlag]);

  function handleNextQuestion() {
    if (counter >= questions.length) {
      setRestartHide(!restartHide);
      return;
    }
    setCurrentQuestion(questions[counter]);
    setCounter((counter) => counter + 1);
    setGlobalSolution(null);
  }
  function correctAnswer() {
    setGlobalSolution(true);
  }
  function restart() {
    setCounter(1);
    setGlobalSolution(null);
    setRestartFlag(!restartFlag);
    setRestartHide(!restartHide);
  }

  return (
    <div className="container">
      {questions.length > 0 && (
        <Question
          hide={hide}
          currentQuestion={currentQuestion}
          correctAnswer={correctAnswer}
          globalSolution={globalSolution}
        />
      )}
      <div className="controllers">
        <button
          className={`${hide ? "" : "hide"}`}
          onClick={() => setHide(false)}
        >
          Start
        </button>
        <button
          className={`${hide ? "hide" : ""}`}
          onClick={handleNextQuestion}
        >
          Next
        </button>
        <div className={`restart ${restartHide ? "hide" : ""}`}>
          <button onClick={restart}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
