import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function RegisterForm3() {

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
    <div>
      <div className="register_form_4_4_h2">
        <h2>S'inscrire en tant que chercheur d'emploi</h2>
      </div>
      <div className="register_form_info">
        <h3>Étape 3/4</h3>
        <p>Je renseigne mon expérience professionnelle</p>
      </div>
      <div className="register_form_1_4_all">
        <input
          className="register_form_1_input"
          placeholder="J'écris ici l'intitulé du poste que j'ai exercé"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici le secteur d'activité"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici de début de contrat"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici de fin de contrat"
          type="text"
        />
      </div>
      <hr className="hr_90" />
      <div className="register_form_add_experience">
        <img
          src="/assets/images/icons/more_experience.svg"
          alt="Ajoutez une expérience"
        />
        <p>Ajouter une autre expérience professionnelle</p>
      </div>
      <div className="register_form_4_4_btn">
        <Link to={"/formulaire-inscription4/#top"}>
          <button className="btn two">Étape suivante</button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm3;
