import "./styles/About.css";
import { useState } from "react";

function About() {
  const [openResult, setOpenResult] = useState(false);

  const handleOpenResult = () => {
    setOpenResult(!openResult);
  };

  return (
    <div className="about">
          <h2 className="title_header">Notre démarche</h2>
      <div className="about_header">
        <div className="approach">
          <div className="approach_img">
            <img src="/assets/images/about.jpg" alt="" />
          </div>
          <h2>
            IncluJob est la plateforme de recherche d’emplois qui s’adapte aux
            types de handicaps pour les travailleurs RQTH
          </h2>
        </div>
        <div>
          <div className="stat_number">
            <h2>
              Quelques chiffres sur la représentation des personnes en situation
              de handicap dans les Hauts-de-France
            </h2>
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
            className="result_stat_number"
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
                Source : <a target="_blank" href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">
                https://www.c2rp.fr/dossier/handicap---les-types-de-handicap
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
                Source : <a target="_blank" href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">
                https://www.c2rp.fr/dossier/handicap---les-types-de-handicap
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
                Source : <a target="_blank" href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">
                https://www.c2rp.fr/dossier/handicap---les-types-de-handicap
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
        <div className="info first">
            <p>
            <span className="focus-text">80% </span> des handicaps ne nécessitent aucun aménagement de poste de travail ou de compensation du handicap
            </p>
            <span id="white">Source : </span><a target="_blank" href="https://www.c2rp.fr/dossier/handicap---les-types-de-handicap">https://www.c2rp.fr/dossier/handicap---les-types-de-handicap</a>
        </div>
        </div>
      </div>
        <div className="second_handicap">
        <div className="info second">
            <p>
            En 2021, d'après l'enquête vie quotidienne et santé, plus de <span className="focus-text">930 000 personnes en âge de travailler déclarent une maladie chronique ou un problème de santé</span> durable dans la région et plus de <span className="focus-text">400 000 considèrent avoir un handicap</span>. Outre l'état de santé, les personnes handicapées restent pénalisées sur le marché du travail pour accéder à un emploi du fait d'un âge plus élevé, d'un moindre niveau de formation et d'une mobilité géographique inférieure à la moyenne.
</p>
<p>
Enfin, en 2022, <span className="focus-text">le taux de chômage des personnes handicapées est de 12 %</span> selon l'Insee, près du double de celui de la population totale
            </p>
            Source : <a target="_blank" href="https://www.google.com/search?client=opera&q=taix+de+chomage+chez+les+handicap%C3%A9s&sourceid=opera&ie=UTF-8&oe=UTF-">https://www.google.com/search?client=opera&q=taix+de+chomage+chez+les+handicap%C3%A9s&sourceid=opera&ie=UTF-8&oe=UTF-</a>
        </div>
        <hr />
        <div className="info third">
                    <p>
                    Pour notre étude nous nous sommes basés sur <span className="focus-text">la tranche d'âge des actifs entre 20 et 59 ans</span> dans les différents départements des Hauts de France, pour l'année 2023.
                    </p>
                    <p>
                    On retrouve :
                    </p>
                    <ul id="first-list">
                      <li>Aisne</li>
                      <li>Nord</li>
                      <li>Oise</li>
                      <li>Pas de Calais</li>
                      <li>Somme</li>
                    </ul>
                    <p>
                    Les difficultés rencontrées par les personnes handicapées lors de la l'insertion professionnelle sont:
                    </p>
                    <ul>
                      <li>La discrimination</li>
                      <li>Les limitations de déplacements</li>
                      <li>Niveau d'étude</li>
                    </ul>
        </div>
        <hr />
        <div>
          <div className="block_graph">
          <h2>Nombre de personne en situation de handicap classés par handicap pour 2023</h2>
            <img className="graph_container" src="/assets/images/Graph_1.jpg" alt="" />
            <cite>Source : www.agefiph.fr/</cite>
          </div>
          <hr />
          <div className="block_graph">
          <h2>Nombre de personnes atteintes de handicap par catégorie </h2>
            <img className="graph_container" src="/assets/images/Graph_2.jpg" alt="" />
            <cite>Source : www.agefiph.fr/</cite>
          </div>
          <hr />
          <div className="block_graph">
          <h2>Nombre de personne en situation de handicap classés par handicap pour 2023</h2>
            <img className="graph_container" src="/assets/images/Graph3.jpg" alt="" />
            <cite>Source : https://hauts-de-france.handidonnees.fr/page/population </cite>
          </div>
        </div>
        </div>
    </div>
  );
}

export default About;
