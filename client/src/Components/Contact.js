import React from "react";
import "../CSS/contact.css";
const Contact = () => {
  return (
    <div>
    <div>
    <div className="registre">
      <div className="container-reg">
        <h1>Inscription</h1>
        <div className="inscrit">
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="phone" name="phone" />
          <input type="password" placeholder="password" name="password" />
          <button className="reg-btn">Registre</button>
        </div>
        <p>
          Si vous avez un compte, vous pouvez{" "}
          <Link to={"/login"}>Connectez ici</Link>
        </p>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Contact;
