import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import RegisterUsers from './components/RegisterUsers'
import RegisterPets from './components/RegisterPets'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/register/user/:role"  component={RegisterUsers}/>
            <Route path="/register/pet"  component={RegisterPets}/>
        </BrowserRouter>
    )
}

export default Routes