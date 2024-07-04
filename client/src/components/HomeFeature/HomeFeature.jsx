import CardOfferHome from "../CardOfferHome/CardOfferHome";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeLogin from "./HomeLogin/HomeLogin";
import "./HomeFeature.css";
import { useEffect, useState } from "react";
import myAxios from "../../services/myAxios";

function HomeFeature() {

  const [offer, setOffer] = useState();
  useEffect(
    () => {
      const getData = async () => {
        const offerResponse = await myAxios.get('api/offers');
        setOffer(offerResponse.data)
      }

      getData();
    }, []
  )

  return (
    <div className="feature_home_all">
      <HomeLogin />
      <p className="home_feature_offer_para">Les offres d'emplois récentes</p>
      <div className="card_container">
      {offer && offer.map((offer) => 
        <CardOfferHome offer={offer} />
      )}
      </div>
      <HomeAbout />
    </div>
  );
}

export default HomeFeature;
