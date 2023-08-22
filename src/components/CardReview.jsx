import React from "react";
import "../styles/Review.scss";
import { useState } from "react";

const CardReview = (props) => {
  const [flip, setFlip] = useState(false);
  const { name, defination } = props;
  return (
    <>
      <div className="flashcard-flip flip-btn" onClick={() => setFlip(!flip)}>
        <span className="fa-solid fa-repeat"></span>
      </div>
      <div className="flashcard-isnew">Từ mới</div>
      <div
        className={`flipable ${flip ? "flipme" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="flashcard-front">
          <h1>{name}</h1>
        </div>
        <div className="flashcard-back">
          <div className="row">
            <div className="col">
              <div className="flashcard-back-content">
                <div className="back-defination" style={{ fontWeight: "500" }}>
                  Định nghĩa:
                </div>
                <div className="back-content">{defination}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardReview;
