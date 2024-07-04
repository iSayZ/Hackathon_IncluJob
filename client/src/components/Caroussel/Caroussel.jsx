import React, { useState } from "react";
import "./Caroussel.css";
import CardOfferHome from "../CardOfferHome/CardOfferHome";

const Caroussel = ({ offers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = offers.length; // Utiliser la longueur des offres

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
        {offers.map((offer, index) => (
          <div
            className={`carousel_item ${index === currentIndex ? "active" : ""}`}
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }} // Afficher seulement l'élément actif
          >
            <CardOfferHome offer={offer} /> {/* Passer l'offre comme prop */}
          </div>
        ))}
      </div>
      <button className="carousel_control next" onClick={handleNext}>
        ›
      </button>
      <div className="carousel_indicators">
        {offers.map((_, index) => (
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
