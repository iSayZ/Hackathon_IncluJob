import "./HomeLogin.css"

function HomeLogin() {
  return (
    <div>
        <div className="home_login_para">
            <p>Connectez-vous ou inscrivez-vous pour recevoir
            des offres d’emploi adaptées à votre profil</p>
        </div>
        <div className="home_login_btn">
        <button className="btn one">Se connecter</button>
        <button className="btn one">S'inscrire</button>
        </div>
        <hr className="hr_90"/>
    </div>
    
  )
}

export default HomeLogin