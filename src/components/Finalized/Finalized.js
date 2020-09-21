import React from 'react'
import './Finalized.css'
import checked from '../../assets/checked.png'

function Finalized(){
    return (
        <div className="finalized">
            <img src={checked} alt="checked"/>
            <h1>Obrigado por participar da seleção BICHO ALAGOANO</h1>
            <h2>Caso seu pet seja selecionado, retornaremos no número indicado por você. Fique atento(a)!</h2>
        </div>
    )
}

export default Finalized