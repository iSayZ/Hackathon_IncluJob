import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function RegisterForm2() {

  const { hash } = useLocation();

  useEffect(() => {
    console.log(hash)
    if (hash) {
      const element = document.getElementById("top");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
      <div>
        <div id="top" className="register_form_4_4_h2">
          <h2>S'inscrire en tant que chercheur d'emploi</h2>
        </div>
        <div className="register_form_info">
          <h3>Étape 2/4</h3>
          <p>Je renseigne mes informations de contact</p>
        </div>
        <div className="register_form_1_4_all">
          <input
            className="register_form_1_input"
            placeholder="J'écris ici mon numéro de téléphone"
            type="text"
          />
          <input
            className="register_form_1_input"
            placeholder="J'écris ici mon adresse email"
            type="text"
          />
          <input
            className="register_form_1_input"
            placeholder="J'écris ici un mot de passe"
            type="password"
          />

          <div className="register_form_4_4_h2">
            <h2>Vous êtes sous tutelle ?</h2>
            <h2>Renseignez ici les informations de contact de votre tuteur</h2>
          </div>
          <input
            className="register_form_1_input"
            placeholder="J'écris ici son nom"
            type="text"
          />
          <input
            className="register_form_1_input"
            placeholder="J'écris ici son prénom"
            type="text"
          />
          <input
            className="register_form_1_input"
            placeholder="J'écris ici son adresse email"
            type="text"
          />
          <input
            className="register_form_1_input"
            placeholder="J'écris ici son numéro de téléphone"
            type="text"
          />
        </div>
        <div className="register_form_4_4_btn">
          <Link to={"/formulaire-inscription3/#top"}>
            <button className="btn two">Étape suivante</button>
          </Link>
        </div>
      </div>
  );
}

export default RegisterForm2;
