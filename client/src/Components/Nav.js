import React from "react";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header-container">
      <div className="container">
        <img src="./images/logo-free-covoiturage-white.png" alt="" />
        <ul className="SignLog">
          <li>
            <Link to={"/"}> Se connecter</Link>
          </li>
          <li>
            <Link to={"/sign"}>S'inscrire</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
