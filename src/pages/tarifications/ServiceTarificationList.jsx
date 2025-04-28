import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServiceTarificationList() {
    const [tarifications, setTarifications] = useState([]);
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/tarifications')
            .then((response) => {
                setTarifications(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des tarifs:', error);
            });
        
        axios.get('http://localhost:8000/api/services')
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des services:', error);
            });
    }, []);

    return (
        <div className="text-white p-5 h-screen bg-black">
            <h1 className="text-3xl mb-6">Tarifs des Services</h1>

            <a href='/tarifications/create' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg mb-3">
                Ajouter 
            </a>
            <table className="table w-full mt-4 text-lg border b-2 b-white">
                <thead className="border b-2 border-black">
                    <tr className="table-row">
                        <th className="p-3 font-semibold table-cell border b-1">Service</th>
                        <th className="p-3 font-semibold table-cell border b-1">Type de Véhicule</th>
                        <th className="p-3 font-semibold table-cell border b-1">Prix</th>
                        <th className="p-3 font-semibold table-cell border b-1">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tarifications.map((tarif) => (
                        <tr className="table-row" key={tarif.id}>
                            <td className="p-3 text-white table-cell text-center border b-1">{tarif.service}</td>
                            <td className="p-3 text-white table-cell text-center border b-1">{tarif.type_vehicule}</td>
                            <td className="p-3 text-white table-cell text-center border b-1">{tarif.prix}</td>
                            <td className="p-3 text-white table-cell text-center border b-1">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceTarificationList;
