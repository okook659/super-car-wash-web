import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VerticalBarChart from '../../components/Charts'
import PieChart from '../../components/Charts'
import { Chart as ChartJS, defaults } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Graph() {
  const [revenuTotal, setRevenuTotal] = useState();
  const [totalClients, setTotalClients] = useState();
  const [totalRendezVous, setTotalRendezVous] = useState();
  const [totalRendezVousAujourdhui, setTotalRendezVousAujourdhui] = useState();
  const [revenusParService, setRevenusParService] = useState([]);
  const [topClients, setTopClients] = useState([]);
  const [topServices, setTopServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/revenus_totaux/').then(res => {
      setRevenuTotal(res.data.revenus_totaux);
    });
    axios.get('http://localhost:8000/api/total_clients/').then(res => {
      setTotalClients(res.data.total_clients);
    });
    axios.get('http://localhost:8000/api/total_rendezvous/').then(res => {
      setTotalRendezVous(res.data.total_rendezvous);
    });
    axios.get('http://localhost:8000/api/rendezvous_aujourdhui/').then(res => {
      setTotalRendezVousAujourdhui(res.data.rendezvous_aujourdhui);
    });
    axios.get('http://localhost:8000/api/revenus_par_service/').then(res => {
      setRevenusParService(res.data);
    });
    axios.get('http://localhost:8000/api/top_clients/').then(res => {
      setTopClients(res.data);
    });
    axios.get('http://localhost:8000/api/top_services/').then(res => {
      setTopServices(res.data);
    });
  }, [])

  //graphiques


  return (
    <div className='text-white p-5 h-screen'>
      <h1>Statistiques</h1>
      <div className="bg-rose-500 shadow-md rounded-lg p-6 max-w-sm w-96 mt-6 mb-12 mx-auto">
        <h2 className="text-lg font-semibold text-white text-center">Revenu total</h2>
        <hr />
        <p className="mt-2 text-2xl font-bold text-white text-center">{revenuTotal}</p>
      </div>
      <hr />
      <div className="cards flex justify-around mt-6 mb-12">
        <div className="bg-orange-500 shadow-md rounded-lg p-6 max-w-sm w-48">
          <h2 className="text-lg font-semibold text-white text-center">Nombre de clients</h2>
          <hr />
          <p className="mt-2 text-2xl font-bold text-white text-center">{totalClients}</p>
        </div>
        <div className="bg-green-500 shadow-md rounded-lg p-6 max-w-sm w-48">
          <h2 className="text-lg font-semibold text-white text-center">Nombre de rendez-vous</h2>
          <hr />
          <p className="mt-2 text-2xl font-bold text-white text-center">{totalRendezVous}</p>
        </div>
        <div className="bg-purple-500 shadow-md rounded-lg p-6 max-w-sm w-48">
          <h2 className="text-lg font-semibold text-white text-center">Nombre de rendez-vous aujourd'hui</h2>
          <hr />
          <p className="mt-2 text-2xl font-bold text-white text-center">{totalRendezVousAujourdhui}</p>
        </div>
      </div>
      <hr />
      <div className='flex justify-around mt-6 mb-12 h-96'>
        <div className='h-full p-3 bg-slate-300'>
          <Bar data={{
            labels: revenusParService.map((item) => item.service__nom),
            datasets: [
              {
                data: revenusParService.map((item) => item.total),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192,19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              }
            ]
          }} />
        </div>
        <div className='p-3 bg-slate-300'>
          <Doughnut data={{
            labels: topClients.map((item) => item.nom),
            datasets: [
              { 
                data: topClients.map((item) => item.points_fidelite),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192,19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              }
            ]
          }} />
        </div>
      </div>
    </div>
  )
}

export default Graph