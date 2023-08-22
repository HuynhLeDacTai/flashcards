import React from "react";
import "../styles/Review.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { getCardDetail } from "../api/flashcardApi";
import CardReview from "../components/CardReview";
import { getCurrentFlashcard } from "../utils/apiUtils";
import { shuffleArray } from "../utils/functionUtils";

const Review = (props) => {
  const [dataCard, setDataCard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const { mode } = props;

  useEffect(() => {
    const getData = async () => {
      const response = await getCardDetail(id);
      if (response && response.data) {
        mode === "random"
          ? setDataCard(shuffleArray(response.data))
          : setDataCard(response.data);
      }
    };
    getData();
  }, [id]);

  const handleNextCard = () => {
    if (currentIndex !== dataCard.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleBackCard = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(dataCard.length - 1);
    }
  };
  console.log(dataCard);
  return (
    <>
      <div className="site-wrapper">
        <div className="content-header">
          <div className="sm-container">
            <h1>Luyện tập: {getCurrentFlashcard().title}</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="review-term-wrapper">
            <div className="sm-container">
              <div className="flashcard-item-wrapper">
                <div
                  className="flashcard-review"
                  key={dataCard[currentIndex?.id]}
                >
                  <CardReview
                    name={dataCard[currentIndex]?.name}
                    defination={dataCard[currentIndex]?.defination}
                  />
                </div>
                <br />
                <div className="flashcard-review-controls">
                  <div
                    className="flashcard-action-back"
                    onClick={() => handleBackCard()}
                  >
                    <span class="fa-solid fa-backward"></span>Từ trước đó
                  </div>
                  <div
                    className="flashcard-action-next"
                    onClick={() => handleNextCard()}
                  >
                    <span class="fa-solid fa-forward"></span>Từ tiếp theo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
