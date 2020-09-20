import React from 'react'
import './Login.css'

function Login(){
    return (
        <div className="login">
            <form>
                <h2>LOGIN</h2>
                <input  type="email" placeholder="Digite aqui o seu email"/>
                <input type="password" placeholder="Digite sua senha"/>
                <button type="submit">Login</button>
                <a href="/register/user/client">Cadastrar novo usuário</a>
            </form>
        </div>
    )
}

export default Login