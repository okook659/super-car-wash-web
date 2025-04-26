import React, { useState } from 'react'



function Sidebar() {
  const [open, setOpen] = useState(true);
 
  return (
    <div className={`${open ? "w-72" : "w-20"} 
      duration-300
      h-screen p-5 pt-8 bg-blue-900 relative`}>
      <img src="./src/assets/control.png" className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${!open && "rotate-180"}`} alt=""
        onClick={() => setOpen(!open)}
      />
      <div className='flex gap-x-4 items-center'>
        <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Super car wash</h1>
      </div>
      <ul className='pt-6'>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md">
          <i className="fa-solid fa-house"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Accueil
            </a>
          </span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-9">
          <i className="fa-solid fa-user"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Clients
            </a>
          </span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2">
          <i className="fa-solid fa-handshake"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Rendez-vous
            </a>
          </span></li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2">
          <i className="fa-solid fa-truck"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/services">
              Services
            </a>
          </span></li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-2">
          <i className="fa-solid fa-chart-simple"></i>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>
            <a href="/clients">
              Graphique
            </a>
          </span></li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-9">
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

export default Sidebar