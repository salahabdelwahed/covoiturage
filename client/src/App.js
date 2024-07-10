import React from "react";
import HomePage from "./Components/HomePage.js";
import Contact from "./Components/Contact.js";
import Service from "./Components/Contact.js";
import Nav from "./Components/Nav.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
