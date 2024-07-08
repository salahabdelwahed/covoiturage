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
          <h1>Vous cherchez une voiture?</h1>
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
      <h1 className="title">POURQUOI FREECOVOITURAGE</h1>
      <div className="block2">
        <div className="blk-2x">
          <h2>Zéro commission pour les passagers</h2>
          <img src="./images/green_money_saving.png" alt="" />
          <p>
            Aucun frais caché. Les passagers ne payent aucune commission. Seule
            une éco-contribution de 1€ est demandée au conducteur pour assurer
            le maintien et le bon fonctionnement de la plateforme.
          </p>
        </div>
        <div className="blk-2x">
          <h2>Paiement sécurisé</h2>
          <img src="./images/secure_payment.png" alt="" />
          <p>
            Paiement simplifié et entièrement sécurisé par CB. C’est la garantie
            d’être payé et de voyager en toute sérénité!
          </p>
        </div>
        <div className="blk-2x">
          <h2>Simple et pratique</h2>
          <img src="./images/simple_pratique.png" alt="" />
          <p>
            Notre site web et nos applications mobiles ont été conçues pour être
            intuitifs, rapides et pratiques.
          </p>
        </div>
      </div>
    </>
  );
};

export default Overaly;
