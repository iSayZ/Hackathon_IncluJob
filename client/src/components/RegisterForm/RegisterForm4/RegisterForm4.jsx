import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm4() {
  const [selectedDisabilities, setSelectedDisabilities] = useState([]);

  const handleDisabilityClick = (index) => {
    setSelectedDisabilities((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div>
      <div>
        <div className="register_form_4_4_h2">
          <h2>S'inscrire en tant que chercheur d'emploi</h2>
        </div>
        <div className="register_form_info">
          <h3>Étape 4/4</h3>
          <p>Je renseigne mon ou mes handicaps</p>
        </div>
        <div className="register_form_1_4_all">
          <div className="register_form_4_4_h2">
            <p>
              En nous indiquant ces informations, nous vous permettrons de
              trouver l’offre d’emploi la plus adaptée à votre profil. Nous nous
              engageons à respecter la confidentialité de vos informations
              personnelles
            </p>
          </div>
          <div>
            <h4 className="register_form_4_4_h2">
              Cliquez sur le ou les handicaps qui correspondent à votre profil :
            </h4>
          </div>
          <div className="all-disab">
            {[
              { img: "assets/images/icons/creative.svg", text: "Handicap psychique" },
              { img: "assets/images/icons/health.svg", text: "Maladies invalidantes" },
              { img: "assets/images/icons/unseen.svg", text: "Handicap visuel" },
              { img: "assets/images/icons/deafness.svg", text: "Handicap auditif" },
              { img: "assets/images/icons/disabled.svg", text: "Handicap moteur" },
              { img: "assets/images/icons/brain.svg", text: "Handicap intellectuel" }
            ].map((disability, index) => (
              <div
                key={index}
                className="register_disability"
                onClick={() => handleDisabilityClick(index)}
                style={{
                  backgroundColor: selectedDisabilities.includes(index) ? "green" : "transparent",
                  color: selectedDisabilities.includes(index) ? "white" : "black"
                }}
              >
                <img
                  className="register_disability_img"
                  src={disability.img}
                  alt={`Logo ${disability.text}`}
                />
                <p>{disability.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="register_form_4_4_btn">
          <Link to={"/offres"}>
            <button className="btn two">Valider mon profil</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm4;
