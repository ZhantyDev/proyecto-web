import React from 'react'
import './Principal.css'
import { useNavigate } from 'react-router-dom';

function Principal(){
    const navigate = useNavigate()
    return(
        <>
        <div class='ppal'>
            <h1 class='letra'>Bienvenido a su banco Armandoestebanquito</h1>
            <h2 class='letra'>Saldo disponible: $$$</h2>
            <button>Historial</button>
            <button class='botones' onClick={()=>navigate('/transacciones')}>Transferencias</button>
            <button class='botones'>Depósitos</button>
            <button class='botones'>Retiros</button>
            <button class='botones' onClick={()=>navigate('/prestamos')}>Préstamos</button>
        </div>
        </>
    )
}

export default Principal