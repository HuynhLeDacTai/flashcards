import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setCurrentFlashcard } from "../store/actions/authActions";
import { useDispatch } from "react-redux";

const FlashcardItem = (props) => {
  const dispatch = useDispatch();

  const currentFlashcard = {
    id: props.id,
    title: props.title,
    user: props.user,
    amount: props.amount,
  };

  useEffect(() => {
    const storedFlashcard = localStorage.getItem("currentFlashcard");
    if (storedFlashcard) {
      const parsedFlashcard = JSON.parse(storedFlashcard);
      dispatch(setCurrentFlashcard(parsedFlashcard));
    }
  }, [dispatch]);

  const handleStoreFlashcard = () => {
    localStorage.setItem("currentFlashcard", JSON.stringify(currentFlashcard));
  };
  return (
    <>
      <div className="flashcard-item card-item" key={props.id}>
        <div
          className="flashcard-item-container card-item-content"
          onClick={() => handleStoreFlashcard()}
        >
          <Link to={`/flashcard/lists/${props.id}`} exact>
            <div className="flashcard-item-content">
              <div className="item-title">{props.title}</div>
              <div className="item-content">
                <div>
                  <span className="far fa-clone"></span>
                  {props.amount} từ
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
