import React, { useEffect, useState } from "react";
import HomePage from "./Components/HomePage.js";
import Nav from "./Components/Nav.js";
import { Route, Routes } from "react-router-dom";
import Registre from "./Components/Registre.js";
import Login from "./Components/Login.js";
import Contact from "./Components/Contact.js";
import Service from "./Components/Service.js";
import UserPage from "./Components/UserPage.js";
import axios from "axios";
import AdminPage from "./Components/AdminPage.js";

function App() {
  const [client, setClient] = useState({});
  const [userAdmin, setuserAdmin] = useState(false);
  const [errorsVal, seterrorsVal] = useState([]);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const result = await axios.get("http://localhost:5050/sign/Current", {
          headers: { auth: localStorage.getItem("auth") },
        });
        setClient(result.data.User); // Assurez-vous que "User" existe dans la réponse.
      } catch (err) {
        console.log("Erreur lors de la récupération de l'utilisateur actuel", err);
      }
    };

    getCurrentUser();
  }, []); 
 
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login errorsVal={errorsVal} seterrorsVal={seterrorsVal} />}
        />
        <Route
          path="/registre"
          element={
            <Registre errorsVal={errorsVal} seterrorsVal={seterrorsVal} />
          }
        />
        {client && <Route path="/user" element={<UserPage />} />}{" "}
        {userAdmin && (
          <>
            {" "}
            <Route path="/admin" element={<AdminPage />} />{" "}
            <Route path="/user" element={<UserPage />} />{" "}
          </>
        )}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
