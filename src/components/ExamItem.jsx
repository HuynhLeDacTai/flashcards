import React from "react";
import { setCurrentTest } from "../utils/apiUtils";

const ExamItem = (props) => {
  const { exam } = props;

  const handleClickDetail = () => {
    const currentExam = {
      id: exam.id,
      name: exam.name,
      type: exam.type,
      timing: exam.timing,
      access: exam.access,
      amountOfQuestion: exam.amountOfQuestion,
    };
    console.log(currentExam);
    setCurrentTest(JSON.stringify(currentExam));
  };
  return (
    <>
      <div className="testitem-container">
        <div className="testitem-wrapper">
          <a href={`/online-exam/test/${exam.id}`} className="dark-test">
            <h2 className="testitem-title">{exam.name}</h2>
            <div className="testitem-info-wrapper">
              <div>
                <span className="testitem-info">
                  Bộ đề thi: IELTS C18 Full Test 1
                </span>
              </div>
              <div>
                <span className="testitem-info">
                  <span className="fa-regular fa-clock mr-1"></span>
                  {exam.timing} phút |
                  <span className="fa-regular fa-comment mr-1"></span>
                  1202
                  <span className="testitem-info">
                    {exam.amountOfQuestion} câu hỏi
                  </span>
                </span>
              </div>
            </div>
            <br />
            <div className="testitem-start-test">
              {/* <a
                href={`/online-exam/test/${exam.id}`}
                className="dark-test"
              ></a> */}
              <a
                href={`/online-exam/test/${exam.id}`}
                className="btn btn-block btn-outline-primary"
                onClick={() => handleClickDetail()}
              >
                Chi tiết
              </a>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ExamItem;
