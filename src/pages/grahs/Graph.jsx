import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Graph() {
  const [totalClients, setTotalClients] = useState();
  const [totalRendezVous, setTotalRendezVous] = useState();
  useEffect(() => {
    axios.get('http://localhost:8000/api/total_clients/').then(res => {
      setTotalClients(res.data.total_clients);
    });
    axios.get('http://localhost:8000/api/total_rendezvous/').then(res => {
      setTotalRendezVous(res.data.total_rendezvous);
    })
  }, [])

  return (
    <div className='text-white p-5 h-screen'>
      <h1>Statistiques</h1>
      <div className="cards">
          <div className="card-one">
            { totalClients }
          </div>
          <div className="card-two">
            { totalRendezVous }
          </div>
      </div>
    </div>
  )
}

export default Graph