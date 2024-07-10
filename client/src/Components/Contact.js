import React from "react";
import "../CSS/contact.css";
const Contact = () => {
  return (
    <div>
    <div>
    <div className="contact">
      <div className="container-contact">
        <h1>Contact</h1>
        <div className="form">
          <input type="text" placeholder="Username" name="Username" />
          <input type="text" placeholder="Email" name="Email" />
          <input type="text" placeholder="Subject" name="Subject" />
          <textarea placeholder="Message" name="msg" id="msg" />
          <button className="contact-btn">Envoyer</button>
        </div>
        <p>
        </p>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Contact;
