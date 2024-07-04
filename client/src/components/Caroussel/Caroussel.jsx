import React, { useState } from "react";
import "./Caroussel.css";
import CardOfferHome from "../CardOfferHome/CardOfferHome";
import { useSettings } from "../../contexts/SettingsContext";



const Caroussel = ({ offers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const limitedOffers = offers.slice(0, 19); // Limiter à 19 cartes
  const totalCards = limitedOffers.length; // Utiliser la longueur des offres limitées
  const {isDarkMode} = useSettings()

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className="carousel_container">
      <button className={ isDarkMode? "carousel_control prev dark"  : "carousel_control prev"}  onClick={handlePrev}>
        
      </button>
      <div className="carousel">
        {limitedOffers.map((offer, index) => (
          <div
            className={`carousel_item ${index === currentIndex ? "active" : ""}`}
            key={index}
            style={{ display: index === currentIndex ? "flex" : "none" }} // Afficher seulement l'élément actif
          >
            <CardOfferHome offer={offer} /> {/* Passer l'offre comme prop */}
          </div>
        ))}
      </div>
      <button className={ isDarkMode? "carousel_control next dark"  : "carousel_control next"}  onClick={handleNext}>
        
      </button>
      <div className="carousel_indicators">
        {limitedOffers.map((_, index) => (
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
