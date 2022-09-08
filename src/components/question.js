import React from "react";
import { Buttons } from "./buttons";
const Question = ({ hide, currentQuestion, correctAnswer, globalSolution }) => {
  return (
    <>
      <div className={`question ${hide ? "hide" : ""}`}>
        <p>{currentQuestion.question}</p>
        <div className="answers">
          {Object.values(currentQuestion.answer).map((item) => {
            return (
              <Buttons
                key={Math.random()}
                answer={item[0]}
                solution={item[1]}
                globalSolution={globalSolution}
                correctAnswer={correctAnswer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Question;
