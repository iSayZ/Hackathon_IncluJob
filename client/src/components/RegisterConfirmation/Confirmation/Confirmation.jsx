import "./Confirmation.css";

function Confirmation() {
  return (
    <div>
      <div className="all_confirmation">
        <h2>Confirmation d'inscription</h2>
        <div className="confirmation_image_container">
        <img src="/assets/images/icons/confirmation-inscription.png" alt="" />

        </div>
        <h3>Votre Profil à bien été pris en compte !</h3>
        <div className="confirmation_para_container">
        <p>
          Surveillez votre boîte de reception, nous vous enverrons une confirmation
          d'inscription montrant que votre profil a bien été validé par nos
          équipes.
        </p>

        </div>
      </div>
    </div>
  );
}

export default Confirmation;
