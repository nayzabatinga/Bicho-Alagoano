import React, { useState } from 'react'
import './Login.css'

import { auth } from '../../services/firebase'

function Login({ history }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                // @TODO: Criar endpoint para buscar usuário por ID, para poder hierarquizar
                console.log(user.user.uid)
                // USER ROLE
                // history.push('/register/pet')

                // @TODO: Colocar no próprio componente de logout
                // auth.signOut()
                
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                <a href="/register/user/client">Cadastrar novo usuário</a>
            </form>
        </div>
    )
}

export default Login