import React from "react";
import "../CSS/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ client, setClient, setUserChange }) => {
  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("auth");
    setClient(null); // Réinitialiser le client à null
    setUserChange(false);
    navigate("/");
  };

  return (
    <div className="header-container">
      <div className="container">
        <img src="./images/logo-free-covoiturage-white.png" alt="" />
        <ul className="SignLog">
          {client ? (
            <>
              <li>
                <Link to={"/user"}>Accueil</Link>
              </li>
              <li>
                <Link to={"/Service"}>Service</Link>
              </li>
              <li>
                <Link to={"/Contact"}>Contact</Link>
              </li>
              <li id="logOut" onClick={logoutFunc}>
                Déconnexion
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/login"}>Se connecter</Link>
              </li>
              <li>
                <Link to={"/registre"}>S'inscrire</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
