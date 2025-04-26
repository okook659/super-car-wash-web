import React from 'react'
import './Login.css'
import car from '../assets/car.jpg'

function Login() {
  return (
    <div className='flex h-screen rounded-xl text-white justify-between content-center'>
      <div className='w-1/2 h-full'>
        <img src={car} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 content-center'>
        <form action="">
      <h1>Connexion</h1>
          <div>
            <div>
              <label htmlFor="username"> Nom d'utilisateur
              </label>
            </div>
            <div className='input-wrapper'>
              <input type="text" id='username' name='username' />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password"> Mot de passe
              </label>
            </div>
            <div className='input-wrapper'>
              <input type="password" id="password" name='password' />
            </div>

          </div>
          <div className='button-wrapper'>
            <button type='submit'>Valider</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login