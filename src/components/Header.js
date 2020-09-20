import React from 'react'
import './Header.css'
function Header(){
    let pathname = window.location.pathname
    return (
        <div className="header">
            <h1>BICHO ALAGOANO</h1>
            {(pathname !== '/' && pathname !== '/register/user/client'  && pathname !== '/register/user/admin') ? (
                <ul>
                    <li>Logout</li>
                    <li>Excluir Conta</li>
                </ul>
            ): '' }
        </div>
    )
}

export default Header