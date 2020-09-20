import React from 'react'
import './Login.css'

function Login(){
    return (
        <div className="login">
            <form>
                <h2>LOGIN</h2>
                <input  type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">Login</button>
                <a href="/register/user/client">Cadastrar novo usuário</a>
            </form>
        </div>
    )
}

export default Login