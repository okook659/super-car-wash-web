import React from 'react'
import './Login.css'

function Login() {
  return (
   <div className='wrapper'>
    <div>
      <h2>Connectez-vous</h2>     
    </div>
    <div className='form-wrapper'>
      <form action="">
        <div className='input-wrapper'>
        <label htmlFor=""> Nom d'utilisateur
          <input type="text"/>
        </label>
        </div>
        <div className='input-wrapper'>
        <label htmlFor=""> Mot de passe
          <input type="password"/>
        </label>
        </div>
        <div className='submit-wrapper w-full bg-blue-900'>
        <input type="submit" value="Valider" className='text-white'/>
        </div>
      </form>
    </div>
   </div>
  )
}

export default Login