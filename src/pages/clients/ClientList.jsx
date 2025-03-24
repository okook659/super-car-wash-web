import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Client.css'

function ClientList() {
    const [clients, setClients] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8000/api/clients').then(res => {
            console.log(res.data)
            setClients(res.data);
        })
    }, [])
  return (
    <div className='text-white p-5 h-screen'>
        <h1 className='text-xl mb-2'>Liste des clients</h1>
        <table className='w-full text-sm text-black bg-white'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nom</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Téléphone</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Points de fidelite</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
                {clients.map(function(client){
                    return (
                        <tr key={client.id}>
                        <td className='p-3 text-sm text-gray-700'> {client.nom} </td>
                        <td className='p-3 text-sm text-gray-700'> {client.email} </td>
                        <td className='p-3 text-sm text-gray-700'> {client.telephone} </td>
                        <td className='p-3 text-sm text-gray-700'> {client.points_fidelite} </td>
                        <td className='p-3 text-sm text-gray-700'>  </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ClientList