import "./TopBar.css"
import { useSettings } from "../../contexts/SettingsContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

function TopBar () {

    const location = useLocation();
    const [showBanner, setShowBanner] = useState(false);

    useEffect (
        () => {
            setShowBanner(location.pathname === "/")
        }, [location]
    )

    const { toggleBurgerMenu, isDarkMode } = useSettings();

    return (
        <>
            <div className="top_bar">
                <div className="logo"><img src={isDarkMode ? "/assets/images/logo-yellow.svg" : "/assets/images/logo.svg"} alt="Logo de IncluJob" /></div>
                <div className="title">
                <h2>IncluJob</h2>
                <cite>"Un emploi pour chacun, une chance pour tous !"</cite>
                </div>
                <button className="btn_burger_menu no_btn zoom" type="button" onClick={toggleBurgerMenu} aria-label="Bouton d'ouverture du menu de navigation"><img src={isDarkMode ? "/assets/images/icons/burger-menu-yellow.svg" : "/assets/images/icons/burger-menu-white.svg"} alt="Icone du menu" /></button>
            </div>
            {showBanner &&
            <div className="banner" id="#top">
                <img src="/assets/images/banner.jpg" alt="Bannière du haut de page" />
            </div>
            }
        </>
    )
}

export default TopBar;