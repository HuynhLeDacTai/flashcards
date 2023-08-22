import React from "react";
import Hero from "../components/Hero";
import "../styles/Hero.scss";
import FlashcardContent from "../components/FlashcardContent";

const Flashcard = () => {
  return (
    <div className="flashcards-wrapper">
      <Hero title={"Flashcards"} />
      <FlashcardContent />
    </div>
  );
};

export default Flashcard;
