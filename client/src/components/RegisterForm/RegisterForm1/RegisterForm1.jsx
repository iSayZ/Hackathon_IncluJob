import "./RegisterForm1.css";
import { Link } from "react-router-dom";

function RegisterForm1() {
  return (
    <div>
      <div className="register_form_4_4_h2">
        <h2>S'inscrire en tant que chercheur d'emploi</h2>
      </div>
        <div className="register_form_info">
        <h3>Étape 1/4</h3>
        <p>Je renseigne mes informations personnelles</p>
        </div>
      <div className="register_form_1_4_all">
        <input
          className="register_form_1_input"
          placeholder="J'écris ici mon nom de famille"
          type="text"
        />
          <input
            className="register_form_1_input"
            placeholder="J'écris ici mon prénom"
            type="text"
          />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici ma date de naissance"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici le numéro et la rue où j'habite"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici le code postal de ma commune"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="J'écris ici le nom de ma commune"
          type="text"
        />
      </div>
      <div className="register_form_4_4_btn">
        <Link to={"/formulaire-inscription2"}>
        <button className="btn two">Étape suivante</button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm1;
