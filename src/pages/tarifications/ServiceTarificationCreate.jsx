import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ServiceTarificationCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        service: "",
        type_vehicule: "",
        prix: 0,
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "prix" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/tarifications/', formData)
            .then(() => {
                navigate('/tarifications');
            })
            .catch((error) => {
                console.error("Erreur lors de la création:", error);
            });
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center text-white mb-8">Ajouter un Tarif</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
                    <div className="flex flex-col">
                        <label htmlFor="service" className="text-gray-300 mb-2 text-2xl">Service</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white"
                            required
                        >
                            <option value="">Sélectionner un service</option>
                            {/* Dynamically render services */}
                        </select>
                    </div>

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

                    <div className="flex flex-col">
                        <label htmlFor="prix" className="text-gray-300 mb-2 text-2xl">Prix</label>
                        <input
                            type="number"
                            id="prix"
                            name="prix"
                            value={formData.prix}
                            onChange={handleChange}
                            placeholder="Entrez le prix"
                            className="px-4 py-4 rounded-lg bg-black border border-gray-700 text-white"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-between mt-10 space-x-4">
                    <button
                        type="submit"
                        className="w-1/2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
                    >
                        Créer
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/tarifications")}
                        className="w-1/2 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg"
                    >
                        Retour
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ServiceTarificationCreate;
