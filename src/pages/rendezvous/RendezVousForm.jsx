import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RendezVousCreate() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [creneaux, setCreneaux] = useState([]);
  const [typesVehicule, setTypesVehicule] = useState([]); 
  const [formData, setFormData] = useState({
    client: '',
    service: '',
    date: '',
    type_vehicule: '', 
  });

  // Récupération des clients, services et types de véhicules lors du chargement du formulaire
  useEffect(() => {
    // Récupérer les clients
    axios.get('http://localhost:8000/api/clients/')
      .then(response => setClients(response.data))
      .catch(error => console.error('Erreur lors de la récupération des clients:', error));

    // Récupérer les services
    axios.get('http://localhost:8000/api/services/')
      .then(response => setServices(response.data))
      .catch(error => console.error('Erreur lors de la récupération des services:', error));

    // Récupérer les types de véhicules (ajouté)
    axios.get('http://localhost:8000/api/types_vehicule/') // Assurez-vous d'avoir une API pour cela
      .then(response => setTypesVehicule(response.data))
      .catch(error => console.error('Erreur lors de la récupération des types de véhicules:', error));
  }, []);

  // Fonction pour obtenir les créneaux disponibles en fonction de la date choisie
  const handleDateChange = (e) => {
    const date = e.target.value;
    setFormData({ ...formData, date });

    // Récupérer les créneaux disponibles pour la date
    axios.get(`http://localhost:8000/api/rendezvous/disponibilites/?date=${date}`)
      .then(response => setCreneaux(response.data.creneaux_disponibles))
      .catch(error => console.error('Erreur lors de la récupération des créneaux:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...formData,
      client: parseInt(formData.client),
  };
  console.log(newData); 
    axios.post('http://localhost:8000/api/rendezvous/', formData)
      .then(() => {
        navigate('/rendezvous');
      })
      .catch((error) => {
        console.error('Erreur lors de la création du rendez-vous:', error);
      });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-2xl">
        
        <h2 className="text-2xl font-bold text-center text-white mb-8">Créer un Rendez-vous</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
          {/* Sélection du client */}
          <div className="flex flex-col">
            <label htmlFor="client" className="text-gray-300 mb-2 text-2xl">Client</label>
            <select
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner un client</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>
                  {client.nom} - {client.email}
                </option>
              ))}
            </select>
          </div>

          {/* Sélection du service */}
          <div className="flex flex-col">
            <label htmlFor="service" className="text-gray-300 mb-2 text-2xl">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner un service</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.nom} - {service.description}
                </option>
              ))}
            </select>
          </div>

          {/* Sélection du type de véhicule */}
          <div className="flex flex-col">
                        <label htmlFor="type_vehicule" className="text-gray-300 mb-2 text-2xl">Type de Véhicule</label>
                        <select
                            id="type_vehicule"
                            name="type_vehicule"
                            value={formData.type_vehicule}
                            onChange={handleChange}
                            className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white"
                            required
                        >
                            <option value="">Sélectionner un type de véhicule</option>
                            <option value="voiture">Voiture</option>
                            <option value="moto">Moto</option>
                            <option value="camion">Camion</option>
                            <option value="camionnette">Camionnette</option>
                            <option value="utilitaire">Utilitaire</option>
                        </select>
                    </div>

          {/* Sélection de la date */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-300 mb-2 text-2xl">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Groupe des boutons */}
        <div className="flex justify-between mt-10 space-x-4">
          <button
            type="submit"
            className="w-1/2 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 text-base"
          >
            Créer
          </button>
          <button
            type="button"
            onClick={() => navigate("/rendezvous")}
            className="w-1/2 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition duration-300 text-base"
          >
            Annuler
          </button>
        </div>

      </form>
    </div>
  );
}

export default RendezVousCreate;
