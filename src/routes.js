import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import RegisterUsers from './components/RegisterUsers/RegisterUsers'
import RegisterPets from './components/RegisterPets/RegisterPets'
import ListPets from './components/ListPets/ListPets'
import Finalized from './components/Finalized/Finalized'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/register/user/:role"  component={RegisterUsers}/>
            <Route path="/register/pet"  component={RegisterPets}/>
            <Route path="/list/pet"  component={ListPets}/>
            <Route path="/finalized" component={Finalized}/>
        </BrowserRouter>
    )
}

export default Routes