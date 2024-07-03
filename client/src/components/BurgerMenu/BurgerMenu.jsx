import "./BurgerMenu.css"
import { Link } from "react-router-dom";
import { useSettings } from "../../contexts/SettingsContext";

function BurgerMenu () {

    const { toggleBurgerMenu, isOpen, isDarkMode } = useSettings();

    return (
        <div className={isOpen ? "burger_menu open" : "burger_menu"}>
            <button className="exit_burger_menu no_btn zoom" aria-label="Bouton pour fermer le menu de navigation" onClick={toggleBurgerMenu}><img src={isDarkMode ? "/assets/images/icons/close-yellow.svg" : "/assets/images/icons/close-white.svg" } alt="Icone du bouton de fermeture" /></button>
            <div className="burger_menu_container">
                <nav className="nav_burger_menu">
                    <Link to="/" aria-label="Aller vers la rubrique : 'Se connecter / S'inscrire'">Se connecter / S'inscrire</Link>
                    <Link to="/" aria-label="Aller vers la rubrique : 'Se connecter / S'inscrire'">Recherche un emploi</Link>
                    <Link to="/" aria-label="Aller vers la rubrique : 'Se connecter / S'inscrire'">Notre concept</Link>
                    <Link to="/" aria-label="Aller vers la rubrique : 'Se connecter / S'inscrire'">Nous contacter</Link>
                    <br />
                    <br />
                    <Link to="/" aria-label="Aller vers la rubrique : 'Se connecter / S'inscrire'">Paramètres d'accessibilité</Link>
                </nav>
            </div>
        </div>
    )
}

export default BurgerMenu;