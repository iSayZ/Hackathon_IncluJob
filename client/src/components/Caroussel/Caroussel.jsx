import React, { useState } from "react";
import "./Caroussel.css";
import CardOfferHome from "../CardOfferHome/CardOfferHome";

const Caroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 3; // Change this if you have more cards
  const cards = Array.from({ length: totalCards }, (_, i) => (
    <CardOfferHome key={i} />
  ));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className="carousel_container">
      <button className="carousel_control prev" onClick={handlePrev}>
        ‹
      </button>
      <div className="carousel">
        {cards.map((card, index) => (
          <div
            className={`carousel_item ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            {card}
          </div>
        ))}
      </div>
      <button className="carousel_control next" onClick={handleNext}>
        ›
      </button>
      <div className="carousel_indicators">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Caroussel;
