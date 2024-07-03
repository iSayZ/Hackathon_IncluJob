import React, { useState } from "react";
import "./SettingsButton.css";
import { useSettings } from "../../contexts/SettingsContext";

function SettingsButton() {
  const { isDarkMode, hangleToggleTheme, hangleToggleSize } = useSettings();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="all_setting_button">
        <button
          className="setting_button_image no_btn zoom"
          aria-label="Bouton pour ouvrir le menu configuration"
          onClick={togglePopup}
        >
          <img
            src={
              isDarkMode
                ? "/assets/images/icons/setting_button_image.svg"
                : "/assets/images/icons/setting_button_image.svg"
            }
            alt="bouton de configuration"
          />
        </button>

      <div
        className={`all_setting_popup ${isPopupVisible ? "visible" : "hidden"}`}
      >
        <h2>Paramètres d'accessibilité</h2>
        <button
          className="exit_setting_menu no_btn zoom"
          aria-label="Bouton pour fermer le menu configuration"
          onClick={togglePopup}
        >
          <img
            src={
              isDarkMode
                ? "/assets/images/icons/close-yellow.svg"
                : "/assets/images/icons/close-white.svg"
            }
            alt="Icone du bouton de fermeture"
          />
        </button>
        <div id="setting_checkbox_theme" className="setting_checkbox">
          <p>Mode contraste</p>
          <div className="checkbox_theme_mode">
            <div className="checkbox_toggle">
              <input className="tgl tgl-light" id="cb1-6" type="checkbox" />
              <label
                onClick={hangleToggleTheme}
                className="tgl-btn"
                htmlFor="cb1-6"
              />
            </div>
          </div>
        </div>
        <div className="setting_checkbox">
          <p>Mode aggrandissement</p>
          <div className="checkbox_toggle">
            <input className="tgl tgl-light" id="cb1-7" type="checkbox" />
            <label
              onClick={hangleToggleSize}
              className="tgl-btn"
              htmlFor="cb1-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsButton;
