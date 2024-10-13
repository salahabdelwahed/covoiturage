import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Login.css";

const Login = ({ errorsVal, seterrorsVal, setUserChange }) => {
  const [user, setuser] = useState({});
  const navigator = useNavigate();
  const handelchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  const loginUser = () => {
    axios
      .post("http://localhost:5050/sign/login", user)
      .then(
        (result) => localStorage.setItem("auth", result.data.userToken),
        seterrorsVal([]),
        setUserChange(true),
        navigator("/user")
      )
      .catch((err) =>
        
        seterrorsVal(
          err.response.data.msg
            ? [err.response.data.msg]
            : err.response.data.errors
        )
      );
  };
  return (
    <div className="login">
      <div className="container-log">
        <h1>Connexion</h1>
        <div className="connexion">
          <input
            onChange={(e) => handelchange(e)}
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            onChange={(e) => handelchange(e)}
            type="password"
            placeholder="password"
            name="password"
          />
          <button className="login-btn" onClick={() => loginUser()}>
            Se connecter
          </button>
        </div>
        <p>
          {errorsVal &&
            errorsVal.map((error, index) => <p key={index}> {error} </p>)}
          Si vous n'avez pas de compte, vous pouvez{" "}
          <Link to={"/registre"}>inscrit ici</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
