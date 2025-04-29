import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`${open ? "w-72" : "w-20"} 
      duration-300 
      h-screen p-5 pt-8 bg-blue-900 relative`}>
    
      <i className={`fa-solid fa-circle-left fa-2x text-white text-lg absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></i>
      <div className='flex gap-x-4 items-center'>
        
        <i className={`cursor-pointer fa-solid text-white text-lg pl-1.5 fa-cloud-bolt duration-500 ${open && "rotate-[360deg]"}`}></i>
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Super car wash</h1>
      </div>
      <ul className='pt-6'>
        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md">
          <i className="fa-solid fa-house"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Accueil
            </a>
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-9">
          <i className="fa-solid fa-user"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Clients
            </a>
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2">
          <i className="fa-solid fa-handshake"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/rendezvous">
              Rendez-vous
            </a>
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2">
          <i className="fa-solid fa-truck"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/services">
              Services
            </a>
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2">
          <i className="fa-solid fa-chart-simple"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Graphique
            </a>
          </span>
        </li>
        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-9">
          <i className="fa-solid fa-tag"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/tarifications">
              Tarifs
            </a>
          </span>
        </li>

        <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-9">
          <i className="fa-solid fa-door-open"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Déconnexion
            </a>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
