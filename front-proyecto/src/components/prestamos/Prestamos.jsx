import React, {useState} from 'react'
import './Prestamos.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function Prestamos(){
    const navigate = useNavigate()
    return(
        <>
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div className = "cuadrado">
        <h1>Préstamos</h1>
        <p>Para solicitar tu préstamo en Banco Armandoestebanquito ingresa los siguientes datos:</p>
            <div id='monto'>
                <h4>Monto:</h4>
                <input type="number" name='dineroPrestamo' class = 'item'/>
            </div>
            <div id="plazo">
                <h4>Plazo (Tiempo en meses):</h4>
                <input type="number" name='plazo' class = 'item'/>
            </div>
            <button class = 'botonPrestamo'>Solicitar</button>
        </div>
        </>
        )
}

export default Prestamos