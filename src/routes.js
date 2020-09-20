import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import RegisterUsers from './components/RegisterUsers'
import RegisterPets from './components/RegisterPets'
import ListPets from './components/ListPets'
import Finalized from './components/Finalized'

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