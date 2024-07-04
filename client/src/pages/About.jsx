import "./styles/About.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function About() {
  const [openResult, setOpenResult] = useState(false);
  const { hash } = useLocation();

  const handleOpenResult = () => {
    setOpenResult(!openResult);
  };

  

  useEffect(() => {
    console.log(hash)
    if (hash) {
      const element = document.getElementById("topp");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div id="topp" className="about">
          <h2>Notre démarche</h2>
      <div className="about_header">
        <div className="approach">
          <div>
            <img src="/assets/images/about.png" alt="" />
          </div>
          <p>
            IncluJob est la plateforme de recherche d’emplois qui s’adapte aux
            types de handicaps pour les travailleurs RQTH
          </p>
        </div>
        <div>
          <div className="stat_number">
            <p>
              Quelques chiffres sur la représentation des personnes en situation
              de handicap dans les Hauts-de-France
            </p>
            <button className="no_btn zoom" onClick={handleOpenResult}>
              <img
                src={
                  openResult
                    ? "/assets/images/icons/chevron_top.svg"
                    : "/assets/images/icons/chevron_bottom.svg"
                }
                alt=""
              />
            </button>
          </div>
          <div
            className={
              openResult ? "result_stat_number open" : "result_stat_number"
            }
          >
            <h2>Les types de handicaps :</h2>
            <div className="handicap">
              <div className="logo">
                <img
                  className=""
                  src="/assets/images/icons/unseen.svg"
                  alt=""
                />
              </div>
              <div>
                <h3>Handicap visuel</h3>
                <p>
                  (En France, 1 500 000 personnes sont malvoyantes, 60 000 sont
                  non-voyantes)
                </p>
                <a href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">
                  Source
                </a>
              </div>
            </div>
            <div className="handicap">
              <div className="logo">
                <img
                  className=""
                  src="/assets/images/icons/deafness.svg"
                  alt=""
                />
              </div>
              <h3>Handicap auditif</h3>
            </div>
            <div className="handicap">
              <div className="logo">
                <img
                  className=""
                  src="/assets/images/icons/disabled.svg"
                  alt=""
                />
              </div>
              <div>
                <h3>Handicap moteur</h3>
                <p>(Le handicap moteur représente 45% des handicaps)</p>
                <a href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">
                  Source
                </a>
              </div>
            </div>
            <div className="handicap">
              <div className="logo">
                <img
                  className=""
                  src="/assets/images/icons/creative.svg"
                  alt=""
                />
              </div>
              <h3>Handicap psychique et émotionnel</h3>
            </div>
            <div className="handicap">
              <div className="logo">
                <img className="" src="/assets/images/icons/brain.svg" alt="" />
              </div>
              <div>
                <h3>Déficience intellectuelles</h3>
                <p>
                  (On compte 700 000 personnes souffrant de déficiences
                  intellectuelles.)
                </p>
                <a href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">
                  Source
                </a>
              </div>
            </div>
            <div className="handicap">
              <div className="logo">
                <img
                  className=""
                  src="/assets/images/icons/health.svg"
                  alt=""
                />
              </div>
              <h3>Maladies invalidantes</h3>
            </div>
          </div>
        <div className="info">
            <p>
            80% des handicaps ne nécessitent aucun aménagement de poste de travail ou de compensation du handicap
            </p>
            <a href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">Source</a>
        </div>
        </div>
      </div>
        <div className="second_handicap">
        <div className="info second">
            <p>
            En 2021, d'après l'enquête vie quotidienne et santé, plus de 930 000 personnes en âge de travailler déclarent une maladie chronique ou un problème de santé durable dans la région et plus de 400 000 considèrent avoir un handicap. Outre l'état de santé, les personnes handicapées restent pénalisées sur le marché du travail pour accéder à un emploi du fait d'un âge plus élevé, d'un moindre niveau de formation et d'une mobilité géographique inférieure à la moyenne.
</p>
<p>
Enfin, en 2022, le taux de chômage des personnes handicapées est de 12 % selon l'Insee, près du double de celui de la population totale
            </p>
            <a href="https://www.google.com/search?client=opera&q=taix+de+chomage+chez+les+handicap%C3%A9s&sourceid=opera&ie=UTF-8&oe=UTF-">Source</a>
        </div>
        </div>
    </div>
  );
}

export default About;
