// Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifie si un token est présent
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className='nav-bar'>
      <span>SCW</span>
      <div className="navbar-links">
        <ul>
          <li><a href="/">Accueil</a></li>
          {isAuthenticated && <li><a href="/reservation">Réservations</a></li>}
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
      <div>
        {!isAuthenticated ? (
          <>
            <a href="/login" className='btn'>Connexion</a>
            <a href="/register" className='btn'>Créer un compte</a>
          </>
        ) : (
          <button
            className="btn"
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/';
            }}
          >
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
