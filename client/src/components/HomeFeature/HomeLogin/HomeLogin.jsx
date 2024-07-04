import "./HomeLogin.css"
import { Link } from "react-router-dom"

function HomeLogin() {
  return (
    <div>
        <div className="home_login_para">
            <p>Connectez-vous ou inscrivez-vous pour recevoir
            des offres d’emploi adaptées à votre profil</p>
        </div>
        <div className="home_login_btn">
          <Link to ="/inscription">
        <button className="btn one">Se connecter</button>
          </Link>
          <Link to="/inscription">
        <button className="btn one">S'inscrire</button>
          </Link>
        </div>
        <hr className="hr_90"/>
    </div>
    
  )
}

export default HomeLogin