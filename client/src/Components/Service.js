import React from "react";
import "../CSS/service.css";
const Service = () => {
  return (
    <div>
      <div>
        <div className="registre">
          <div className="container-reg">
            <h1>Trajet</h1>
            <div className="inscrit">
              <label htmlFor="">lieu de depart :</label>
              <input
                type="text"
                placeholder="lieu de depart"
                name="lieu de depart"
              />
              <label htmlFor="">lieu d'arrive:</label>
              <input
                type="text"
                placeholder="lieu d'arrive"
                name="lieu d'arrive"
              />
              <label htmlFor="">Places:</label>
              <input type="number" placeholder="Places" name="Places" />
              <label htmlFor="">Description:</label>
              <textarea placeholder="Message" name="msg" id="msg" />
              <label htmlFor="">Prix:</label>
              <input type="text" placeholder="Prix" name="Prix" />
              <button className="reg-btn">Proposer un tarjet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
