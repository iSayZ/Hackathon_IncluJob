import "./styles/OfferDetails.css"
import { useEffect, useState } from "react";
import myAxios from "../services/myAxios";
import { useParams , Link } from "react-router-dom"
import { useSettings } from "../contexts/SettingsContext";

function OfferDetails () {

    const { id } = useParams();
    const { isDarkMode } = useSettings();
    const [offer, setOffer] = useState();

    useEffect(() => {
        const getData = async () => {
          try {
            const offerResponse = await
              myAxios.get(`/api/offers/${id}`);
            setOffer(offerResponse.data);
            console.log(offerResponse.data)

        } catch (err) {
            console.log(err);
        }
    };
    
    getData();
    console.log(offer)
      }, [id]);
    
    return (
        <>
        {offer &&
        <>
        <div className="offer_details">
            <div className="header_offer">
                <div className="header_top">
                    <div className="logo"><img src={offer.logo} alt={`Logo d'entreprise de ${offer.name}`} /></div>
                    <h2>{offer.title}</h2>
                </div>
            </div>
            <h3>{offer.contract}</h3>
            <div className="company_name">
            <h4>{offer.name}</h4><p id="publication_date">Publié le {offer.date}</p>
            </div>
            <div className="location">
                <img src={isDarkMode ? "/assets/images/icons/location-white.png" : "/assets/images/icons/location.png"} alt="Icone de localisation" />
            <p>{offer.location}</p>
            </div>
            <hr />
            <p>{offer.content}</p>
            <hr />
            <div className="offer_disabilities">
                <h3>Handicap(s) adapté(s) au poste :</h3>
                <div className="disabilities_icons">
                    {offer.offer_disability.map((disability) =>
                        <div className="handicap_btn"><img src={isDarkMode ? `/assets/images/icons/${disability.id_disability_fk}.svg` : disability.pictogram} alt={`Icone de l'${disability.name}`} /></div>
                    )}
                </div>
            </div>
            <button className="btn two">Postuler</button>
            <hr />
            <div className="connexion">
                    <h3>Connectez-vous ou inscrivez-vous pour recevoir
                    des offres d’emploi adaptées à votre profil</h3>
                    <Link to ="/inscription">
                    <button className="btn one">Se connecter</button>
                    </Link>
                    <Link to ="/inscription">
                    <button className="btn one">S'inscrire</button>
                    </Link>
            </div>
        </div>
        </>
        }
        </>
    )
}

export default OfferDetails;