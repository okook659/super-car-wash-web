import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ServiceCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/services/', formData)
      .then(() => {
        navigate('/services');
      })
      .catch((error) => {
        console.error("Erreur lors de la création:", error);
      });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-2xl">
        
        <h2 className="text-2xl font-bold text-center text-white mb-8">Ajouter un Service</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
          <div className="flex flex-col">
            <label htmlFor="nom" className="text-gray-300 mb-2 text-2xl">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Entrez le nom du service"
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-300 mb-2 text-2xl">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Entrez la description"
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          
        </div>

        <div className="flex justify-between mt-10 space-x-4">
          <button
            type="submit"
            className="w-1/2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 text-base"
          >
            Créer
          </button>
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="w-1/2 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition duration-300 text-base"
          >
            Retour
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceCreate;
