import { Link } from "react-router-dom";
import "./CreateAnnounce.css";
import { useState, useEffect } from "react";
import myAxios from "../../services/myAxios";

function CreateAnnounce() {
  const [disabilities, setDisabilities] = useState();
  const [sectors, setSectors] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const [disabilitiesResponse, sectorsResponse] = await Promise.all([
          myAxios.get(`/api/disabilities`),
          myAxios.get(`/api/sectors`),
        ]);
        setDisabilities(disabilitiesResponse.data);
        setSectors(sectorsResponse.data);
        console.log(sectorsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const [activated, setActivated] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const active = (disabilityId) => {
    setActivated((prevState) => ({
      ...prevState,
      [disabilityId]: !prevState[disabilityId],
    }));
    console.log(activated);
  };

  return (
    <div>
      <div className="register_form_4_4_h2">
        <h2>Créer une annonce</h2>
      </div>
      <div className="register_form_info">
        <p>Je renseigne les informations du poste à pourvoir</p>
      </div>
      <div className="register_form_1_4_all">
        <input
          className="register_form_1_input"
          placeholder="Intitulé du poste"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="Date de début de contrat"
          type="text"
        />
        <input
          className="register_form_1_input"
          placeholder="Date de fin de contrat"
          type="text"
        />
        <input
          id="announce_create_localisation"
          className="register_form_1_input"
          placeholder="Localisation du lieu de travail"
          type="text"
        />
      </div>
      <div className="create_announce_all_filter">
        <div className="filter_checkbox">
          <div className="checkbox_container">
            <input type="checkbox" id="cdi" name="cdi" value="cdi" />
            <label htmlFor="cdi">CDI</label>
          </div>
          <div>
            <input type="checkbox" id="cdd" name="cdd" value="cdd" />
            <label htmlFor="cdd">CDD</label>
          </div>
          <div>
            <input type="checkbox" id="remote" name="remote" value="remote" />
            <label htmlFor="remote">Télétravail</label>
          </div>
        </div>
        <div className="create_annouce_input_select">
          <select className="input input_chevron" id="">
            <option value="">Sélectionnez un secteur d'activité</option>
            {sectors &&
              sectors.map((sector) => (
                <option key={sector.id_sector} value={sector.id_sector}>
                  {sector.name}
                </option>
              ))}
          </select>
        </div>
        <div className="annouce_create_describe_job">
          <input type="text" placeholder="Description du poste" />
        </div>
        <hr className="hr_90" />
        <div className="handicap_filter">
          <p>Handicap(s) adapté (s) à ce poste :</p>
          <div className="handicap_filter_container">
            {disabilities &&
              disabilities.map((disability) => (
                <button
                  key={disability.id_disability}
                  onClick={() => active(disability.id_disability)}
                  className={
                    activated[disability.id_disability]
                      ? "handicap_btn no_btn active"
                      : "handicap_btn no_btn"
                  }
                  type="button"
                  aria-label={`Bouton de sélection de l'${disability.name}`}
                >
                  <img
                    src={
                      activated[disability.id_disability]
                        ? `/assets/images/icons/${disability.id_disability}.svg`
                        : disability.pictogram
                    }
                    alt={`Icone de l'${disability.name}`}
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="create_annouce_handi_para">
        <p>
          Notre système vous propose automatiquement le ou les handicaps adaptés
          au poste proposé, vous pouvez personnaliser la sélection si vous
          estimez que l’emploi peut convenir à d’autres types de handicap.
        </p>
      </div>
      <div className="register_form_4_4_btn">
        <Link to={"/offres"}>
          <button className="btn two">Publier l'annonce</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAnnounce;
