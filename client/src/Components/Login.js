import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css"
const Login = () => {
  return (
    <div className="login">
    <div className="container-log">
      <h1>Connexion</h1>
      <div className="connexion">
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button className="login-btn">Se connecter</button>
      </div>
      <p>
      Si vous n'avez pas de compte, vous pouvez{" "}
          <Link to={"/registre"}>inscrit ici</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
