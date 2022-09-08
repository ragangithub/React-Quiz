import React from "react";

export const Buttons = ({
  answer,
  solution,
  correctAnswer,
  globalSolution,
}) => {
  return (
    <>
      <button
        className={`btn ${
          globalSolution === null
            ? ""
            : globalSolution && solution === true
            ? "green"
            : "red"
        }`}
        onClick={() => correctAnswer(solution)}
      >
        {answer}
      </button>
    </>
  );
};
