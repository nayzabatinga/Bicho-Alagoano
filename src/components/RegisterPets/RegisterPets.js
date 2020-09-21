import React, { useState } from 'react'
import './RegisterPets.css'
import api from '../../services/api'

function RegisterPets({ history }){
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setAvatar] = useState([])
    
    const headers = { 'Content-Type': 'multipart/form-data' }

    async function handleSubmit(e){
        e.preventDefault()
        await api.post('/registerPets', {
            name,
            owner,
            phone,
            avatar
        }, { headers })
        .then(res => {
            history.push('/finalized')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="register-pets">
            <form onSubmit={handleSubmit}>
                <h2>CADASTRE SEU PET</h2>
                <input
                    placeholder="Nome do pet"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="Seu nome"
                    value={owner}
                    onChange={e => setOwner(e.target.value)}
                />
                <input
                    placeholder="Telefone para contato"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label htmlFor="choosefile">Agora, uma foto do seu pet</label>
                <input
                    id="choosefile"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={e => setAvatar(e.target.files[0])}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default RegisterPets