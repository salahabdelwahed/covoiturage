import React, { useEffect, useState } from "react";
import HomePage from "./Components/HomePage.js";
import Nav from "./Components/Nav.js";
import { Route, Routes } from "react-router-dom";
import Registre from "./Components/Registre.js";
import Login from "./Components/Login.js";
import Contact from "./Components/Contact.js";
import Service from "./Components/Service.js";

import axios from "axios";
import AdminPage from "./Components/AdminPage.js";
import Intro from "./Components/Intro.js";

function App() {
  const [client, setClient] = useState({});
  const [userAdmin, setuserAdmin] = useState(false);
  const [errorsVal, seterrorsVal] = useState([]);
  const [UserChange, setUserChange] = useState(false)
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const result = await axios.get("http://localhost:5050/sign/Current", {
          headers: { auth: localStorage.getItem("auth") },
        });
        setClient(result.data.User);
      } catch (err) {
        console.log(
          "Erreur lors de la récupération de l'utilisateur actuel",
          err
        );
      }
    };

    getCurrentUser();
  }, [UserChange]);

  return (
    <>
      <Nav client={client} setClient={setClient} setUserChange={setUserChange}/>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login errorsVal={errorsVal} seterrorsVal={seterrorsVal} setUserChange={setUserChange}/>}
        />
        <Route
          path="/registre"
          element={
            <Registre errorsVal={errorsVal} seterrorsVal={seterrorsVal} />
          }
        />
        {client && (
          <>
            <Route path="/user" element={<HomePage />} />{" "}
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Service" element={<Service />} />
          </>
        )}
        {userAdmin && (
          <>
            {" "}
            <Route path="/admin" element={<AdminPage />} />{" "}
            <Route path="/user" element={<HomePage />} />{" "}
          </>
        )}

        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
