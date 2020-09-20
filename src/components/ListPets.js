import React, { useEffect, useState } from 'react'
import './ListPets.css'
import api from '../services/api'

function ListPets(){
    const [ pets, setPets ] = useState([])
    useEffect(() => {
        async function list(){
            await api
            .get('/pet/list')
            .then(res => {
                setPets(res.data)
            })
            .catch(err => console.log(err.message))
        }
        list()
    }, [])
    
    async function deletePet(id){
        await api
        .delete(`/pet/delete/${id}`)
        .then(() => {
            setPets(pets.filter(pet => pet.id !== id))
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="list-pets">
            <ul>
                {pets.map(pet => (
                    <li key={pet.id}>
                        <img src="https://i.pinimg.com/originals/7f/2c/35/7f2c359c5dfcc05d5814ec4e601318d4.jpg" alt={pet.name}/>
                        <footer>
                            <h3>{pet.name}</h3>
                            <p>{pet.owner} | {pet.phone}</p>
                        </footer>
                        <button type="button" onClick={() => deletePet(pet.id)} >EXCLUIR</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default ListPets