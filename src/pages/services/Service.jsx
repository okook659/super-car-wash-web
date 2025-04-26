import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Service.css'
import { useNavigate } from 'react-router';

function ServiceList() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/services').then(res => {
            console.log(res.data)
            setServices(res.data);
        })
    }, [])

    const handleDelete = (id) => {
        if (confirm("Voulez-vous supprimer ce service ?") === true) {
            axios.delete(`http://localhost:8000/api/services/${id}/`)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert("Opération annulée");
        }
    }

    return (
        <div className='text-white p-5 h-screen bg-black'>
            <h1 className='text-3xl mb-6'>Liste des services</h1>
            <a href='/services/create' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg mb-3 inline-block">
                Ajouter
            </a>
            <table className='table w-full mt-4 text-lg border b-2 b-white'>
                <thead className='border b-2 border-black'>
                    <tr className="table-row">
                        <th className='p-3 font-semibold table-cell border b-1'>Nom</th>
                        <th className='p-3 font-semibold table-cell border b-1'>Description</th>
                        <th className='p-3 font-semibold table-cell border b-1'>Prix</th>
                        <th className='p-3 font-semibold table-cell border b-1'>Type de véhicule</th>
                        <th className='p-3 font-semibold table-cell border b-1'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {services.map((service) => (
                        <tr className="table-row" key={service.id}>
                            <td className='p-3 text-white table-cell text-center border b-1'>{service.nom}</td>
                            <td className='p-3 text-white table-cell text-center border b-1'>{service.description}</td>
                            <td className='p-3 text-white table-cell text-center border b-1'>{service.prix}</td>
                            <td className='p-3 text-white table-cell text-center border b-1'>{service.type_vehicule}</td>
                            <td className='p-3 text-white table-cell text-center border b-1'>
                                <div className="flex text-center justify-center">
                                    <a href={`/services/edit/${service.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                                        <i className="fa-solid fa-pen-to-square" title="Modifier"></i>
                                    </a>
                                    <span className="ml-2"></span>
                                    <button onClick={() => handleDelete(service.id)} type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                        <i className="fa-solid fa-trash" title="Supprimer"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ServiceList;
