import React, { useEffect } from "react";
import Question from "./Question";
import { useState } from "react";

const TestContent = (props) => {
  const [questions, setQuestions] = useState(props.questions);
  useEffect(() => {
    setQuestions(props.questions);
  }, [props.questions]);
  return (
    <>
      <div className="test-content contentblock">
        {/* <div className="custom-control custom-switch highlight-toggle-box">
          <label htmlFor="highlight-toggle" className="custom-control-label">
            <div className="toggle-box">
              <ToggleSwitch />
            </div>
            Highlight nội dung
          </label>
        </div> */}
        <div className="tab-content">
          <div className="tab-pane active show">
            <div className="test-question-wrapper">
              {questions.map((item, index) => {
                return <Question key={index} index={index} question={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestContent;
