import React from 'react'
import "../CSS/navbar.css"

const Nav = () => {
  return (
    <div className='header-container'>
    <div className="container">
      <img src="./images/logo-free-covoiturage-white.png" alt="" />
      <ul className='SignLog'>
      <li><a href="link"> Se connecter</a></li>
      <li><a href="link">S'inscrire</a></li>
      <li><a href="link">Contact</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Nav
