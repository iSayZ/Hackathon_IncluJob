import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import { useSettings } from "../../contexts/SettingsContext";

function BurgerMenu() {
  const { toggleBurgerMenu, isOpen, isDarkMode, togglePopup } = useSettings();

  const handleLinkClick = () => {
    toggleBurgerMenu();
  };

  return (
    <div className={isOpen ? "burger_menu open" : "burger_menu"}>
      <button
        className="exit_burger_menu no_btn zoom"
        aria-label="Bouton pour fermer le menu de navigation"
        onClick={toggleBurgerMenu}
      >
        <img
          src={isDarkMode ? "/assets/images/icons/close-yellow.svg" : "/assets/images/icons/close-white.svg"}
          alt="Icone du bouton de fermeture"
        />
      </button>
      <div className="burger_menu_container">
        <nav className="nav_burger_menu">
          <Link
            to="/inscription"
            aria-label="Aller vers la rubrique : 'Se connecter / S'inscrire'"
            onClick={handleLinkClick}
          >
            Se connecter / S'inscrire
          </Link>
          <Link
            to="/#search"
            aria-label="Aller vers la rubrique : 'Recherche un emploi'"
            onClick={handleLinkClick}
          >
            Recherche un emploi
          </Link>
          <Link
            to="/creation-annonce"
            aria-label="Aller vers la rubrique : 'Création d'annonce'"
            onClick={handleLinkClick}
          >
            Création d'annonce
          </Link>
          <Link
            to="/a-propos"
            aria-label="Aller vers la rubrique : 'Notre concept'"
            onClick={handleLinkClick}
          >
            Notre concept
          </Link>
          <Link
            to="/"
            aria-label="Aller vers la rubrique : 'Acceuil'"
            onClick={handleLinkClick}
          >
            Accueil
          </Link>
          <br />
          <br />
          <button
            className="no_btn zoom"
            type="button"
            onClick={togglePopup}
            aria-label="Ouvrir le menu : 'Paramètres d'accessibilité'"
          >
            Paramètres d'accessibilité
          </button>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
