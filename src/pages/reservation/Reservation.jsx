import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import '../home/Home.css'
import car3 from '../../assets/car3.jpg';
import axios from 'axios';
import './Reservation.css';  // Inclure le fichier CSS personnalisé

function Reservation() {
    const [services, setServices] = useState([]);
    const [typeVehicule, setTypeVehicule] = useState('voiture');
    const [serviceId, setServiceId] = useState('');
    const [date, setDate] = useState('');
    const [creneaux, setCreneaux] = useState([]);
    const [creneauChoisi, setCreneauChoisi] = useState('');
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('token');
    

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        axios.get('http://localhost:8000/api/services/')
            .then(res => setServices(res.data));
    }, []);

    useEffect(() => {
        if (date) {
            axios.get(`http://localhost:8000/api/rendezvous/disponibilites/?date=${date}`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then(res => setCreneaux(res.data.creneaux_disponibles))
            .catch(err => console.error(err));
        }
    }, [date]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(token);
        try {
            await axios.post(
                'http://localhost:8000/api/rendezvous/',
                {
                    service: serviceId,
                    type_vehicule: typeVehicule,
                    date: creneauChoisi
                },
                {
                    headers: { 
                        'Authorization': 'Token ' + localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                      }
                }
            );
            setMessage("Réservation effectuée avec succès !");
        } catch (error) {
            setMessage("Erreur lors de la réservation.");
            console.error(error.response?.data);
        }
    };

    return (
        <>
            <div className="header">
                <Navbar />
                <div className="header-content">
                    <span>Réservez votre lavage</span>
                    <img id="header-content-image" src={car3} alt="Voiture propre" />
                </div>
            </div>

            <div className="reservation-form">
                <h2>Formulaire de réservation</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Service :</label>
                        <select value={serviceId} onChange={e => setServiceId(e.target.value)} required>
                            <option value="">Choisissez un service</option>
                            {services.map(s => (
                                <option key={s.id} value={s.id}>{s.nom}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Type de véhicule :</label>
                        <select value={typeVehicule} onChange={e => setTypeVehicule(e.target.value)} required>
                            <option value="">Sélectionner un type de véhicule</option>
                            <option value="voiture">Voiture</option>
                            <option value="moto">Moto</option>
                            <option value="camion">Camion</option>
                            <option value="camionnette">Camionnette</option>
                            <option value="utilitaire">Utilitaire</option>
                        </select>
                    </div>

                    <div>
                        <label>Date :</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} required min={today} />
                    </div>

                    {date && (
                        <div>
                            <label>Créneau horaire :</label>
                            <select value={creneauChoisi} onChange={e => setCreneauChoisi(e.target.value)} required>
                                <option value="">Choisissez un créneau</option>
                                {creneaux.map((creneau) => (
                                <option key={creneau} value={creneau}>
                                    {new Date(creneau).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}                                    
                                </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <button type="submit">Réserver</button>
                </form>
            </div>
        </>
    );
}

export default Reservation;
