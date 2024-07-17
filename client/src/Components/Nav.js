import React from "react";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";

const Nav = ({ client, setClient, setUserChange }) => {
  const logoutFunc = () => {
    localStorage.removeItem("auth");
    setClient(null);
    setUserChange(false);
  };
  return (
    <div className="header-container">
      <div className="container">
        <img src="./images/logo-free-covoiturage-white.png" alt="" />
        <ul className="SignLog">
          {client ? (
            <>
              {" "}
              <li>
                <Link to={"/login"}> Se connecter</Link>
              </li>
              <li>
                <Link to={"/registre"}>S'inscrire</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/Service"}> Service</Link>
              </li>
              <li>
                <Link to={"/Contact"}> Contact</Link>
              </li>
              <li id="logOut" onClick={() => logoutFunc()}>
                Logout
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
