import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Si tu utilises React Router
import axios from "axios";
import "./Client.css";
import { useNavigate } from "react-router-dom";

function ClientEdit() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    points_fidelite: 0,
  });

  // Charger les données du client
  useEffect(() => {
    axios.get(`http://localhost:8000/api/clients/${id}/`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Erreur de chargement du client:", error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "points_fidelite" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/clients/${id}/`, formData)
      .then((response) => {
        console.log("Client mis à jour avec succès:", response);
        navigate("/clients");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour:", error);
      });
  };

  return (
    <div className="w-full flex justify-center text-white py-8">
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-xl font-semibold mb-4">Modifier un client</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nom">
              Nom
            </label>
            <input
              name="nom"
              id="nom"
              type="text"
              placeholder="Entrez votre nom"
              className="w-full px-3 py-2 text-base border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-3 py-2 text-base border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="telephone">
              Téléphone
            </label>
            <input
              name="telephone"
              id="telephone"
              type="text"
              placeholder="Entrez votre téléphone"
              className="w-full px-3 py-2 text-base border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="points_fidelite">
              Points de fidélité
            </label>
            <input
              name="points_fidelite"
              id="points_fidelite"
              type="number"
              className="w-full px-3 py-2 text-base border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.points_fidelite}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full text-base mt-4 bg-blue-700 hover:bg-blue-500 transition duration-300 text-white font-bold py-2 px-4 rounded-lg"
          type="button"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

export default ClientEdit;
