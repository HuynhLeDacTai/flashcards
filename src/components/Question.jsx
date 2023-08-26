import React, { useState } from "react";
import "../styles/Question.scss";

const Question = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { question, index } = props;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="question-wrapper">
        <div className="question-number">
          <strong>{index + 1}</strong>
        </div>
        <div className="question-content">
          <div className="question-text">{question?.content}</div>
          <div className="question-answers">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="question-38400-A"
                value="A"
                checked={selectedOption === "A"}
                onChange={handleOptionChange}
              />
              <label className="form-check-label">
                A. {question?.choice_1}
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value="B"
                id="question-38400-B"
                checked={selectedOption === "B"}
                onChange={handleOptionChange}
              />
              <label htmlFor="question-38400-B" className="form-check-label">
                B. {question?.choice_2}
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value={"C"}
                id="question-38400-C"
                checked={selectedOption === "C"}
                onChange={handleOptionChange}
              />
              <label htmlFor="question-38400-C" className="form-check-label">
                C. {question?.choice_3}
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value={"D"}
                id="question-38400-D"
                checked={selectedOption === "D"}
                onChange={handleOptionChange}
              />
              <label htmlFor="question-38400-D" className="form-check-label">
                D. {question?.choice_4}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
