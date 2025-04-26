import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Service.css'

function ServiceList() {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/services').then(res => {
            console.log(res.data)
            setServices(res.data);
        })
    }, [])
    return(
        <div className='text-white p-5 h-screen'>
            <h1 className='text-xl mb-2' >Liste des services</h1>
            <table className='w-full text-sm text-black bg-white'>
                <thead className='bg-gray-50 border-b-2 border-gray-200' >
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left' >nom</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>prix</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>type de vehicule</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                    {services.map(function(service){
                        return(
                            <tr key={service.id}>
                                <td className='p-3 text-sm text-gray-700'> {service.nom} </td>
                                <td className='p-3 text-sm text-gray-700'> {service.description} </td>
                                <td className='p-3 text-sm text-gray-700'> {service.prix} </td>
                                <td className='p-3 text-sm text-gray-700'> {service.type_vehicule} </td>
                                <td className='p-3 text-sm text-gray-700'> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ServiceList