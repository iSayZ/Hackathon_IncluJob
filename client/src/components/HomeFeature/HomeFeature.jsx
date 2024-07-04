import CardOfferHome from "../CardOfferHome/CardOfferHome";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeLogin from "./HomeLogin/HomeLogin";
import "./HomeFeature.css";
import { useEffect, useState } from "react";
import myAxios from "../../services/myAxios";
import Caroussel from "../Caroussel/Caroussel";

function HomeFeature() {

  const [offer, setOffer] = useState(); 
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
       {offer && offer.map((offer) => 
        <CardOfferHome offer={offer} />
      )} 

       </div>
      <HomeAbout />
    </div>
  );
}

export default HomeFeature;
