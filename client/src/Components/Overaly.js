import React from "react";
import "../CSS/Overaly.css";
const Overaly = () => {
  return (
    <>
      <div className="over">
        <div>
          <h1>Une autre vision du covoiturage</h1>
          <p>Le covoiturage solidaire qui crée des liens</p>
          <button className="btn-service">Service</button>
        </div>
      </div>
      <div className="intro">
        <img src="./images/jeune-conducteur.jpg" alt="driver" />
        <div>
          <h1>Possédez-vous un véhicule?</h1>
          <p>
            Ne conduisez plus seuls ! <br></br>Faites des rencontres
            inoubliables et économisez plein de sous en partageant vos places
            libres et en transportant des colis.
          </p>
          <button className="btn-driver">Proposer un tarjet</button>
        </div>
      </div>
      <div className="block1">
        <div>
          <h1 >Vous cherchez une voiture?</h1>
          <p>3 solutions s’offrent à vous:</p>
          <ul>
            <li>
              Trouvez un conducteur qui vous emmène à votre destination finale
            </li>
            <li>Envoyez vos colis avec un conducteur de confiance</li>
            <li>
              Louez une voiture à 1€ et faites du covoiturage pour économiser
              vos frais de carburant et de péage
            </li>
          </ul>
          <button className="btn-driver">Rechercher un tarjet</button>
        </div> 
        <img src="./images/autostop.jpg" alt="" />
      </div> 
      <div className="block2"></div>
    </>
  );
};

export default Overaly;
