import React from "react";
import "../CSS/Overaly.css";

const Overaly = () => {
  return (
    <>
      <div className="over">
        <div>
          <h1>Une autre vision du covoiturage</h1>
          <p>Le covoiturage solidaire qui crée des liens</p>
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
              Louez une voiture et faites du covoiturage pour économiser vos
              frais de carburant et de péage
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
      <h1 className="title">A LA POINTE DE L'INNOVATION</h1>
      <p className="tag">Mieux que BlaBlaCar? à vous de juger !</p>
      <div className="block2">
        <div className="blk-2x">
          <h2>Des options vraiment pratiques</h2>
          <img src="./images/fc_handshake.png" alt="" />
          <p>
            Prix dégressif, Porte à porte, Publication express,
            Colis-voiturage... des fonctionnalités innovantes et pratiques,
            développées grâce aux retours de nos membres, que vous ne trouverez
            que sur Free Covoiturage.
          </p>
        </div>
        <div className="blk-2x">
          <h2>Location de voiture</h2>
          <img src="./images/fc_car_rental.png" alt="" />
          <p>
            Vous ne trouvez pas de covoiturage pour le trajet que vous cherchez?
            Pas de panique, Louez une voiture grâce à nos partenaires et faites
            du covoiturage.
          </p>
        </div>
        <div className="blk-2x">
          <h2>Entièrement engagés pour la planète</h2>
          <img src="./images/fc_tree.png" alt="" />
          <p>
            10 trajets réservés = un arbre planté. Voici notre contribution
            concrète à la sauvegarde de notre chère planète.
          </p>
        </div>
      </div>
      <h1 className="title">ILS PARLENT DE NOUS</h1>
      <div className="block3">
        <img src="./images/d5a06162881f47abde8ca2f7b57b769e-of.svg" alt="" />
        <img src="./images/Maddyness.png" alt="" />
        <img src="./images/consocollaborative.png" alt="" />
        <img src="./images/wedemain.png" alt="" />
      </div>
      <div className="footer">
        <p>design by Abdelwahed SALAH © 2024</p>
      </div>
    </>
  );
};

export default Overaly;
