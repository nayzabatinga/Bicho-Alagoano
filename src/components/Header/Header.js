import React from 'react'
import './Header.css'

import { auth } from '../../services/firebase'

function Header(){
    let pathname = window.location.pathname

    async function logout(){
        auth.signOut()
    }
    return (
        <div className="header">
            <h1>BICHO ALAGOANO</h1>
            <p>{pathname}</p>
            {(pathname !== '/' && pathname !== '/register/user/client' && pathname !== '/register/user/admin') ? (
                <button type="button" onClick={logout}>Logout</button>
            ): '' }
        </div>
    )
}

export default Header