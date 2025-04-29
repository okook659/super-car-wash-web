import React, { useState } from 'react';
import './Login.css';  // Assurez-vous que ce fichier existe pour vos styles
import car from '../assets/car.jpg';  // L'image d'arrière-plan
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');  // État pour le nom d'utilisateur
  const [password, setPassword] = useState('');  // État pour le mot de passe
  const [error, setError] = useState('');  // Gérer les erreurs de connexion
  const navigate = useNavigate(); // Pour la redirection après connexion réussie

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Réinitialiser l'erreur avant chaque nouvelle tentative

    try {
      // Envoie de la requête de connexion à l'API Django
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });

      // Si la connexion est réussie et qu'un token est retourné
      if (response.data.token) {
        // Sauvegarde du token dans localStorage
        localStorage.setItem('token', response.data.token);

        // Récupérer le rôle de l'utilisateur depuis la réponse
        const role = response.data.user.role;


        console.log('Login success:', response.data);

        // Redirection vers la page de réservation si l'utilisateur est un client
        if (role === 'client') {
          navigate('/');
        } else {
          navigate('/clients');
        }
        
      }
    } catch (error) {
      // Si une erreur se produit, afficher un message d'erreur
      setError("Nom d'utilisateur ou mot de passe incorrect");
      console.error(error.response?.data?.message || 'Erreur lors de la connexion');
    }
  };

  return (
    <div className="flex h-screen rounded-xl text-white justify-between items-center">
      <div className="w-1/2 h-full">
        <img src={car} alt="Car" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 px-8">
        <form onSubmit={handleSubmit} className="form-container">
          <h1 className="text-3xl font-semibold mb-6">Connexion</h1>

          {/* Affichage de l'erreur, si elle existe */}
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
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="button-wrapper mt-6">
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
