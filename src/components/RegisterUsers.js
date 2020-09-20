import React, { useState } from 'react'
import api from '../services/api'
import './RegisterUsers.css'

function RegisterUsers({ history, match }){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const { role } = match.params

        await api.post('/user/register', {
            email,
            password,
            role: role
        })
        .then(res => {
            console.log(res.status, res.data)
            history.push('/')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="register-users">
            <form onSubmit={handleSubmit}>
                <h2>REALIZE SEU CADASTRO</h2>
                <input 
                    type="email" 
                    placeholder="seu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Sua senha"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default  RegisterUsers