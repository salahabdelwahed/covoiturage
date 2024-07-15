import React from "react";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
  return (
    <div className="header-container">
      <div className="container">
        <img src="./images/logo-free-covoiturage-white.png" alt="" />
        <ul className="SignLog">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {user ? (
            <></>
          ) : (
            <>
              <li>
                <Link to={"/login"}> Se connecter</Link>
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
