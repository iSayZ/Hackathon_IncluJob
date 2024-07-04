import CardOfferHome from "../CardOfferHome/CardOfferHome";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeLogin from "./HomeLogin/HomeLogin";
import "./HomeFeature.css";
import { useEffect, useState } from "react";
import myAxios from "../../services/myAxios";
import Caroussel from "../Caroussel/Caroussel";

function HomeFeature() {

  const [offer, setOffer] = useState(); 

  function getRandomSlice(array) {
    // Mélange le tableau avec l'algorithme de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Retourne les 10 premiers éléments du tableau mélangé
    return array.slice(0, 10);
}

  useEffect(
    () => {

      const getData = async () => {
        const offerResponse = await myAxios.get('api/offers');
        setOffer(offerResponse.data)
      }

      getData();
      console.log(offer)
    }, []
  )

  return (
    <div className="feature_home_all">
      <HomeLogin />
      <p className="home_feature_offer_para">Les offres d'emplois récentes</p>
      <div id="card_container_yes_caroussel" className="card_container">
       {offer && <Caroussel offers={offer} /> }
      </div>
       <div id="card_container_no_caroussel" className="card_container">
       {offer && getRandomSlice(offer).map((offer) => 
        <CardOfferHome offer={offer} />
      )} 

       </div>
      <HomeAbout />
    </div>
  );
}

export default HomeFeature;
