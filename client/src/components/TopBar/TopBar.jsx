import "./TopBar.css"
import { useSettings } from "../../contexts/SettingsContext";
import { Link } from "react-router-dom";

function TopBar () {

    const { toggleBurgerMenu, isDarkMode } = useSettings();

    return (
        <>
            <div className="top_bar">
                <div className="logo">Logo</div>
                <h2>IncluJob</h2>
                <button className="btn_burger_menu no_btn zoom" type="button" onClick={toggleBurgerMenu} aria-label="Bouton d'ouverture du menu de navigation"><img src={isDarkMode ? "/assets/images/icons/burger-menu-yellow.svg" : "/assets/images/icons/burger-menu-white.svg"} alt="Icone du menu" /></button>
            </div>
            <div className="banner">
                <img src="/assets/images/banner.jpg" alt="Bannière du haut de page" />
            </div>
        </>
    )
}

export default TopBar;