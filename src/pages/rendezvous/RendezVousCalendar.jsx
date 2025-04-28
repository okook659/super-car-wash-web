import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './RendezVousCalendar.css';
import { useNavigate } from 'react-router-dom'; 

const RendezVousCalendar = () => {
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState({ totalDays: 0, filledDays: 0 });
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('/api/rendezvous/')
      .then(response => response.json())
      .then(data => {
        const formattedEvents = data.map(rdv => ({
          title: rdv.title,
          date: rdv.date
        }));
        setEvents(formattedEvents);

        // Calcul statistique
        const uniqueDates = new Set(formattedEvents.map(e => e.date));
        setStats({
          totalDays: 30, // 30 jours dans le mois (simplifié)
          filledDays: uniqueDates.size
        });
      });
  }, []);

  // ➔ Quand on clique sur une date, on va vers /planifier
  const handleDateClick = (info) => {
    navigate('/rendezvous/create');
  };


  const fillPercentage = (stats.filledDays / stats.totalDays) * 100;

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Calendrier des Rendez-vous</h1>
        <a href='/rendezvous/create' className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition duration-200 text-sm">
            Planifier
        </a>
      </div>

      <div className="flex gap-6">
        {/* Partie principale : Calendrier */}
        <div className="flex-3 bg-white p-4 rounded-2xl shadow-md">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: ''
            }}
            height="auto"
            contentHeight="auto"
            dayMaxEventRows={3}
          />
        </div>

        {/* Sidebar : Statistiques et Activité */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Carte Statistiques */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Statistiques</h2>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-600"
                  strokeWidth="3"
                  strokeDasharray={`${fillPercentage}, 100`}
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-700">{Math.round(fillPercentage)}%</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{stats.filledDays} jours remplis / {stats.totalDays}</p>
          </div>

          {/* Carte Activité récente */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Activité récente</h2>
            <ul className="space-y-2">
              {events.slice(0, 5).map((event, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {event.title} <span className="text-gray-400">({new Date(event.date).toLocaleDateString()})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendezVousCalendar;
