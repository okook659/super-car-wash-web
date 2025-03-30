import React, { useState } from 'react'
import './Client.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

function ClientCreate() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    points_fidelite: 0
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name == "points_fidelite" ? Number(value) : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post('http://localhost:8000/api/clients/', formData).then(
      function(response){
        console.log(response);
      }
    ).catch(function(error){
      console.log(error);
    });
    navigate('/clients')
  }

  return (
   c

  )
}

export default ClientCreate