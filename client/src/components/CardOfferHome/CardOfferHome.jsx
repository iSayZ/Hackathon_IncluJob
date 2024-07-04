import { useState } from "react";
import "./CardOfferHome.css";
``;
import { useSettings } from "../../contexts/SettingsContext";
import { Link } from "react-router-dom"

function CardOfferHome({ offer }) {
  const { isDarkMode } = useSettings();
  const [isFavorited, setIsFavorited] = useState(true);

  const handleFavoritedClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="all_card_home_info_offer">
          <div className="card_image_favoris" onClick={handleFavoritedClick}>
          <img
            src={
              isFavorited
                ? "/assets/images/icons/heart.svg"
                : "/assets/images/icons/fullheart.svg"
            }
            alt="Mettre en favoris"
          />
        </div>
      <div className="header_offer">
        <div className="header_top">
          <div className="logo">
            <img src={offer.logo} alt={`Logo d'entreprise de ${offer.name}`} />
          </div>
          <h2>{offer.name}</h2>
        </div>
        <h3>Type de contrat : {offer.contract}</h3>
        <div className="company_name"> 
          <p id="publication_date">Publié le {offer.date}</p>
        </div>
        <div className="location">
          <img
            src="/assets/images/icons/location.png"
            alt="Icone de localisation"
          />
          <p>{offer.location}</p>
        </div>
      </div>
      <div className="card_home_para">
        <p className="card_content">{offer.content}</p>
        <hr />
        <p className="card_home_disability_requiered">
          Handicap(s) adapté(s) au poste :
        </p>
      </div>
      <div className="all_logo_disability">
        {offer.offer_disability.map((disability) =>
                  <img key={disability.id_disability_fk}
                  className="logo_disability"
                  src={disability.pictogram} alt={`Icone de l'${disability.name}`}
                />
        )}
      </div>
      <div className="card_home_container_button">
        <button className={isDarkMode ? "btn two dark" : "btn two" } type="button">
          Postuler
        </button>
        <Link to={`/offre/${offer.id_offer}`} className={isDarkMode ? "btn one dark" : "btn one" } type="button">
          Voir plus
        </Link>
      </div>
    </div>
  );
}

export default CardOfferHome;
