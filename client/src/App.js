import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav.js";
import { Route, Routes } from "react-router-dom";
import Registre from "./Components/Registre.js";
import Login from "./Components/Login.js";
import Contact from "./Components/Contact.js";
import Service from "./Components/Service.js";
import axios from "axios";
import AdminPage from "./Components/AdminPage.js";
import Intro from "./Components/Intro.js";
import Overaly from "./Components/Overaly.js";

function App() {
  const [client, setClient] = useState(null);
  const [userAdmin, setUserAdmin] = useState(false);
  const [errorsVal, seterrorsVal] = useState([]);
  const [userChange, setUserChange] = useState(false);

  const getCurrentUser = async () => {
    await axios
      .get("http://localhost:5050/sign/Current", {
        headers: { auth: localStorage.getItem("auth") },
      })
      .then((result) => {
        setClient(result.data.user);
        setUserAdmin(result.data.user.isAdmin);
      })
      .catch((error) => console.log("err from Current", error));
  };
  
  useEffect(() => {
    getCurrentUser()
  }, [userChange])
  
  return (
    <>
      <Nav
        client={client}
        setClient={setClient}
        setUserChange={setUserChange}
        userAdmin={userAdmin}
      />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/login"
          element={
            <Login
              errorsVal={errorsVal}
              seterrorsVal={seterrorsVal}
              setUserChange={setUserChange}
            />
          }
        />
        <Route
          path="/registre"
          element={
            <Registre errorsVal={errorsVal} seterrorsVal={seterrorsVal} />
          }
        />
        <>
          {/* Routes pour client et admin */}
          {client || userAdmin ? (
            <>
              <Route path="/user" element={<Overaly />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Service" element={<Service />} />
            </>
          ) : null}

          {/* Routes spécifiques à l'admin */}
          {userAdmin && <Route path="/admin" element={<AdminPage />} />}

          {/* Route pour pages non trouvées */}
          <Route path="*" element={<h1>Page not found</h1>} />
        </>
      </Routes>
    </>
  );
}

export default App;
