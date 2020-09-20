import React, { useState } from 'react'
import './RegisterPets.css'
import api from '../services/api'

function RegisterPets(){
    const [ name, setName] = useState('')
    const [ owner, setOwner] = useState('')
    const [ phone, setPhone] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        await api.post('/pet/register', {
            name,
            owner,
            phone
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
    }

    return (
        <div className="register-pets">
            <form onSubmit={handleSubmit}>
                <h2>CADASTRE SEU PET</h2>
                <input
                    placeholder="Nome do deu pet aqui"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="Seu nome aqui"
                    value={owner}
                    onChange={e => setOwner(e.target.value)}
                />
                <input
                    placeholder="Seu telefone aqui"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default RegisterPets