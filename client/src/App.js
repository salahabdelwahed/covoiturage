import React from "react";
import HomePage from "./Components/HomePage.js";
import Nav from "./Components/Nav.js";
import { Route, Routes } from "react-router-dom";
import Registre from "./Components/Registre.js";
import Login from "./Components/Login.js";
import Contact from "./Components/Contact.js";
import Service from "./Components/Service.js";


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registre" element={<Registre/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes> 
   
    </>
  );
};

export default App;
