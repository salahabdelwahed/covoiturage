import React, { useState } from "react";
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

const App = () => {
  const [user, setuser] = useState(null);
  const [Admin, setAdmin] = useState(false);
  const [errorsVal, seterrorsVal] = useState([]);

  const getCurrentUser = async () => {
    await axios
      .get("http://localhost:5050/sign/current", {
        headers: { auth: localStorage.getItem("auth") },
      })
      .then((result) => setuser(result.data.user))
      .catch((err) => console.log("err from current", err));
  };
  getCurrentUser();
  return (
    <>
      <Nav user={user} />
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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        {user && <Route path="/user" element={<UserPage />} />}{" "}
        {Admin && (
          <>
            {" "}
            <Route path="/admin" element={<AdminPage />} />{" "}
            <Route path="/user" element={<UserPage />} />{" "}
          </>
        )}
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
