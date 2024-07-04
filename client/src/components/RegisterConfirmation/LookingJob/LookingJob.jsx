import "./LookingJob.css"
import { Link } from "react-router-dom"

function LookingJob() {
  return (
    <div className="all_looking">
      <div className="looking_h3">
        <h3>Votre profil à bien été pris en compte !</h3>
      </div>
      <div className="looking_btn">
      <Link to="/" className="btn one">Rechercher un emploi</Link>
      </div>
    </div>
  )
}

export default LookingJob