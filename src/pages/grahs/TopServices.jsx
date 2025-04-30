import React from 'react'
import { useState, useEffect } from 'react'
import '../../components/table.css'
import axios from 'axios'

function TopServices() {
  const [topServices, setTopServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/top_services/');
        setTopServices(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTopServices();
  }, []);

  if (loading) return <div className='text-white'>Loading...</div>;
  if (error) return <div className='text-red-500'>Error: {error}</div>;

  return (
    <div className='text-white'>
      <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
      <h1>Services les plus réservés</h1>
        <div className="ml-3">
            <div className="w-full max-w-sm min-w-[200px] relative">
     
            <div className="relative">
                <input
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-white text-white text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Rechercher un service... "
                />
                <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                type="button"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </button>
            </div>
            </div>
        </div>
    </div>
    <table className='table w-full mt-4 text-lg'>
                        <thead className='text-black'>
                            <tr className="table-row" >
                                <th className='p-3 text-lg table-cell border b-1'>Nom du service</th>
                                <th className='p-3 text-lg table-cell border b-1'>Rendez-vous</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                        {topServices.map(function (service) {
                        return (
                                <tr className="table-row" key={service.service}>
                                    <td className='p-3 table-cell text-center border b-1'> {service.service} </td>
                                    <td className='p-3 table-cell text-center border b-1'> {service.nombre_rendezvous} </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
    </div>
    
  );
}

export default TopServices