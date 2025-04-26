import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-bar'>
      <span>SCW</span>
      <div className="navbar-links">
        <ul>
          <li>Accueil</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
      </div>  
        <a href="/login" className='btn'>Connexion</a>
    </div>
  )
}

export default Navbar