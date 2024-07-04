import { Link } from "react-router-dom";
import "./styles/Register.css"

function Register () {
    return (
        <div className="register">
            <h2>S'inscrire</h2>
            <div className="register_container">
            <hr />
            <div className="register_block">
            <h3>Je suis un chercheur d'emploi :</h3>
            <p>En vous inscrivant et en renseignant votre informations,
cela vous permettra de trouver des offres d’emploi 
adaptées à votre profil.</p>
            <Link to="/formulaire-inscription">
            <button className="btn one">S'inscrire</button>
            </Link>
            </div>
            <hr />
            <div className="register_block">
            <h3>Je suis un employeur :</h3>
            <p>En étant inscris en tant qu’employeur de profils RQTH, 
            vous bénéficier d’un accompagnement pour mieux comprendre comment fonctionne l’emploi de travailleurs atteint d’un handicap mais également une aide pour trouver les profils adaptés à vos offres d’emploi.
            </p>
            <Link to="/formulaire-inscription">
            <button className="btn one">S'inscrire</button>
            </Link>
            </div>
            <hr />
            <div className="register_block">
            <h3>Nous contacter</h3>
            <p>Vous avez besoin d’aide pour l’inscription ?
            Vous souhaitez des renseignements sur l’accompagnement ? Contactez-nous !
            </p>
            <button className="btn two">Nous contacter</button>
            </div>
            </div>
        </div>
    )
}

export default Register;