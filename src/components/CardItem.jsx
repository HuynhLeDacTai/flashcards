import React from "react";
import "../styles/DetailFlashcard.scss";

const CardItem = (props) => {
  const { deleteCard, editCard } = props;
  return (
    <>
      <div className="contentblock">
        <div className="row">
          <div className="card-content">
            <h2 className="h3">
              {props.name}
              <span className="audio-player">
                <span className="audio-player-btn">
                  <span className="fa-solid fa-volume-high"></span>
                </span>
              </span>
              <span style={{ fontSize: "1rem", fontWeight: "400" }}>UK</span>
              <span className="audio-player">
                <span className="audio-player-btn">
                  <span className="fa-solid fa-volume-high"></span>
                </span>
              </span>
              <span style={{ fontSize: "1rem", fontWeight: "400" }}>US</span>
              <a
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  marginLeft: "0.25rem",
                }}
                href="/#"
                onClick={(event) => {
                  event.preventDefault();
                  editCard(event, props.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </a>
            </h2>
            <div style={{ fontWeight: "500" }}>Định nghĩa</div>
            <div style={{ whiteSpace: "pre-line", marginBottom: "0.5rem" }}>
              {props.defination}
            </div>
          </div>
        </div>
        <div className="delete-content">
          <a
            href="/#"
            onClick={(event) => {
              event.preventDefault();
              deleteCard(event, props.id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardItem;
