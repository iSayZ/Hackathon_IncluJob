import Confirmation from "./Confirmation/Confirmation"
import LookingJob from "./LookingJob/LookingJob"
import "./RegisterConfirmation.css"


function RegisterConfirmation() {
  return (
    <div className="all_register_confirmation">
        <div>
        < Confirmation />
        </div>
        <hr className="hr_90"/>
        <div>
        < LookingJob />
        </div>
        <hr className="hr_90"/>
         <div id="register_confirmation_contact" className="register_block">
            <h3>Nous contacter</h3>
            <p id="contact_confirmation_register">Vous avez besoin d’aide pour l’inscription ?
            Vous souhaitez des renseignements sur l’accompagnement ? Contactez-nous !
            </p>
            <button className="btn two">Nous contacter</button>
            </div>
    </div>
  )
}

export default RegisterConfirmation