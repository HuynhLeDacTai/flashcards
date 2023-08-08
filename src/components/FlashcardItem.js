import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FlashcardItem = (props) => {
  return (
    <>
      <div className="flashcard-item card-item">
        <div className="flashcard-item-container card-item-content">
          <Link to="/flashcard/lists/1">
            <div className="flashcard-item-content">
              <div className="item-title">{props.name}</div>
              <div className="item-content">
                <div>
                  <span className="far fa-clone"></span>0 từ
                </div>
                <div className="item-description">
                  <i>{props.desc}</i>
                </div>
              </div>
              <div className="item-user">
                <span className="item-user-avatar">{props.user.charAt(0)}</span>
                <span className="item-user-username">{props.user}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FlashcardItem;
