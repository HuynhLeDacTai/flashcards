import React from "react";
import "../styles/Hero.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Hero = (props) => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content container">
          <h1 className="hero-title">
            <span>
              <i className="far fa-clone"></i>
            </span>
            {props.title}
          </h1>
          <br />
          <ul className="hero-menu">
            <li className="hero-menu-item">
              <Link to="/flashcards/me" className="nav-link" exact>
                List từ của tôi
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="/flashcards/me/studying" className="nav-link" exact>
                Đang học
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="/flashcards/discover" className="nav-link active" exact>
                Khám phá
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
