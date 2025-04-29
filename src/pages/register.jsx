import React, { useState } from 'react';
import './Login.css';
import car from '../assets/car.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username,
        password,
        email,
      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError("Erreur lors de l'inscription. Veuillez réessayer.");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="flex h-screen rounded-xl text-white justify-between items-center">
      <div className="w-1/2 h-full">
        <img src={car} alt="Car" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 px-8">
        <form onSubmit={handleRegister} className="form-container">
          <h1 className="text-3xl font-semibold mb-6">Inscription Client</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-medium">Nom d'utilisateur</label>
            <div className="input-wrapper mt-2">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <div className="input-wrapper mt-2">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-medium">Mot de passe</label>
            <div className="input-wrapper mt-2">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="button-wrapper mt-6">
            <button type="submit" className="w-full p-3 text-white rounded-md">S'inscrire</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
