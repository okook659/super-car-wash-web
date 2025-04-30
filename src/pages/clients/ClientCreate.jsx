import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ClientCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    points_fidelite: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "points_fidelite" ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/clients/', formData)
      .then(() => {
        navigate('/clients');
      })
      .catch((error) => {
        console.error("Erreur lors de la création du client:", error);
      });
  };

  return (
    <div className="bg-black flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-2xl">
        
        <h2 className="text-2xl font-bold text-center text-white mb-8">Ajouter un Client</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
          <div className="flex flex-col">
            <label htmlFor="nom" className="text-gray-300 mb-2 text-2xl">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2 text-2xl">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="telephone" className="text-gray-300 mb-2 text-2xl">Téléphone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Entrez votre téléphone"
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
          <label htmlFor="points_fidelite" className="text-gray-300 mb-2 text-2xl">Points de fidélité</label>
          <input
            type="number"
            id="points_fidelite"
            name="points_fidelite"
            value={formData.points_fidelite}
            readOnly
            className="px-4 py-4 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 focus:outline-none cursor-not-allowed"
          />
        </div>

        </div>

        {/* Groupe des boutons sur la même ligne */}
        <div className="flex justify-between mt-10 space-x-4">
          <button
            type="submit"
            className="w-1/2 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 text-base"
          >
            Ajouter
          </button>
          <button
            type="button"
            onClick={() => navigate("/clients")}
            className="w-1/2 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition duration-300 text-base"
          >
            Annuler
          </button>
        </div>

      </form>
    </div>
  );
}

export default ClientCreate;
