import CardOfferHome from "../CardOfferHome/CardOfferHome";
import HomeAbout from "./HomeAbout/HomeAbout";

import HomeLogin from "./HomeLogin/HomeLogin";
import "./HomeFeature.css";

function HomeFeature() {
  return (
    <div className="feature_home_all">
      <HomeLogin />
      <p className="home_feature_offer_para">Les offres d'emplois récentes</p>
      <CardOfferHome />
      <HomeAbout />
    </div>
  );
}

export default HomeFeature;
