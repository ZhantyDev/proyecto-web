import React from "react";
import './Prestamos.css'
import { useNavigate } from 'react-router-dom';

function Prestamos(){

    return(
        <>
        <div id = "root">
        <div class = "cuadrado">
        <h1>Prestamos</h1>
        <div id="banco">
            <h4>Banco:</h4>
            <input type="combobox" name='bancoPrestamo' class = 'item'/>
        </div>
        <div id="monto">
            <h4>Monto:</h4>
            <input type="text" name='dineroPrestamo' class = 'item'/>
        </div>
        <button class = 'botonPrestamo'>Solicitar</button>
        
        </div>
        </div>
        </>
        )

}

export default Prestamos