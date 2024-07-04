import { useState } from "react";
import "./CardOfferHome.css";

function CardOfferHome() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoritedClick = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className="all_card_home_info_offer">
      <div className="card_home_info_offer">
        <div className="card_home_logo_company">
          <img
            src="assets/images/icons/nike.png"
            alt="Image du logo de l'entreprise"
          />
        </div>
        <div className="card_home_info_h2">
          <h2>INTITULÉ EMPLOI SUR DEUX LIGNES</h2>
        </div>
        <div className="card_image_favoris" onClick={handleFavoritedClick}>
          <img
            src={
              isFavorited
                ? "assets/images/icons/heart.svg"
                : "assets/images/icons/fullheart.svg"
            }
            alt="Mettre en favoris"
          />
        </div>
      </div>
      <div className="card_home_info_hour_type">
        <p>Type de contrat </p>
        <p className="card_home_info_separator">-</p>
        <p>Nombre d’heures</p>
      </div>
      <div className="card_info_name_date">
        <p className="card_home_name_date">Nom entreprise</p>
        <p className="card_home_info_separator">-</p>
        <p className="card_home_info_date">Date de publication</p>
      </div>
      <div className="card_home_input">
        <input placeholder="Ville, Code postal, Département" type="text" />
      </div>
      <div className="card_home_para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices. [...]
        </p>
        <hr />
        <p className="card_home_disability_requiered">
          Handicap(s) adapté(s) au poste :
        </p>
      </div>
      <div className="all_logo_disability">
        <img
          className="logo_disability"
          src="assets/images/icons/disabled.svg"
          alt="Logo"
        />
        <img
          className="logo_disability"
          src="assets/images/icons/deafness.svg"
          alt="Logo"
        />
        <img
          className="logo_disability"
          src="assets/images/icons/unseen.svg"
          alt="Logo"
        />
        <img
          className="logo_disability"
          src="assets/images/icons/creative.svg"
          alt="Logo"
        />
        <img
          className="logo_disability"
          src="assets/images/icons/brain.svg"
          alt="Logo"
        />
        <img
          className="logo_disability"
          src="assets/images/icons/health.svg"
          alt="Logo"
        />
      </div>
      <div className="card_home_container_button">
        <button className="btn two" type="button">
          Postuler
        </button>
      </div>
    </div>
  );
}

export default CardOfferHome;
