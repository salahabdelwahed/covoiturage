import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/Registre.css";
const Registre = ({ errorsVal, seterrorsVal }) => {
  const [user, setuser] = useState({});
  const handelchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  const registerUser = () => {
    axios
      .post("http://localhost:5050/sign/registre", user)
      .then(
        (result) => (
          localStorage.setItem("auth", result.data.userToken), seterrorsVal([])
        )
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
    <div>
      <div className="registre">
        <div className="container-reg">
          <h1>Inscription</h1>
          <div className="inscrit">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={(e) => handelchange(e)}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={(e) => handelchange(e)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => handelchange(e)}
            />
            <button onClick={() => registerUser()} className="reg-btn">
              Inscrit
            </button>
          </div>
          <p>
            {errorsVal &&
              errorsVal.map((error, index) => <p key={index}> {error} </p>)}
            Si vous avez un compte, vous pouvez{" "}
            <Link to={"/login"}>Connectez ici</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registre;
