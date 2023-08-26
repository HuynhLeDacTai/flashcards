import React from "react";
import TestContent from "../components/TestContent";
import TestNavigation from "../components/TestNavigation/TestNavigation";
import "../styles/Practice.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAllQuestionByTestID } from "../api/testApi";
import { useState } from "react";

const Practice = () => {
  const [questions, setQuestions] = useState([]);
  const testId = useParams();
  useEffect(() => {
    const getQuestions = async () => {
      const response = await getAllQuestionByTestID(testId.id);
      if (response && response.data) {
        setQuestions(response.data);
      }
    };
    getQuestions();
  }, []);
  return (
    <>
      <div className="site-content-wrapper">
        <div className="content-wrapper">
          <div className="xl-container">
            <h1 className="h4" style={{ textAlign: "center" }}>
              ETS TOEIC 2022 Test 2{" "}
              <a href="" className="btn btn-sky btn-sm">
                Thoát
              </a>
            </h1>
            <h5 style={{ textAlign: "center", fontWeight: "500" }}>
              Bộ đề thi: ETS TOEIC 2022
            </h5>
            <form action="" className="test-form">
              <div className="test-wrapper" style={{ position: "relative" }}>
                <TestContent questions={questions} />
                <TestNavigation />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practice;
