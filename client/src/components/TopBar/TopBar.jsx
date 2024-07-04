import "./TopBar.css"
import { useSettings } from "../../contexts/SettingsContext";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function TopBar () {

    const { toggleBurgerMenu, isDarkMode } = useSettings();
    const { hash } = useLocation();

    useEffect(() => {
      console.log(hash)
      if (hash) {
        const element = document.getElementById("#top");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);



    return (
        <>
            <div className="top_bar">
                <Link to="/#top" >
                <div className="logo"><img id="#top" src={isDarkMode ? "/assets/images/logo-yellow.svg" : "/assets/images/logo.svg"} alt="Logo de IncluJob" /></div>
                </Link>
                <div className="title">
                <h2>IncluJob</h2>
                <cite>"Un emploi pour chacun, une chance pour tous !"</cite>
                </div>
                <button className="btn_burger_menu no_btn zoom" type="button" onClick={toggleBurgerMenu} aria-label="Bouton d'ouverture du menu de navigation"><img src={isDarkMode ? "/assets/images/icons/burger-menu-yellow.svg" : "/assets/images/icons/burger-menu-white.svg"} alt="Icone du menu" /></button>
            </div>
            <div className="banner">
                <img src="/assets/images/banner.jpg" alt="Bannière du haut de page" />
            </div>
        </>
    )
}

export default TopBar;