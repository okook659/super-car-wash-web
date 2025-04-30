import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios';

function RevenuParService() {
    const [revenusParService, setRevenusParService] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/revenus_par_service/').then(res => {
            console.log(res.data)
            setRevenusParService(res.data)
        })
    }, [])

   
  return (
    <div>
        <h1 className='text-white'>Les revenus par service</h1>
    </div>
  )
}

export default RevenuParService