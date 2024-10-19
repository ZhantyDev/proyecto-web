import React from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom';

function Transacciones(){
    return(
        <>
        <div id = "root">
        <div class = "cuadrado">
        <h1>Transacciones</h1>
        <div id="banco">
            <h4>Banco:</h4>
            <input type="combobox" name='bancoPrestamo' class = 'item'/>
        </div>
        <div id="cuenta">
            <h4>Numero de cuenta:</h4>
            <input type="number" name='numeroCuenta' class = 'item' />
        </div>
        <div id="monto">
            <h4>Dinero:</h4>
            <input type="text" name='dineroPrestamo' class = 'item'/>
        </div>
        <button class = 'botonTransaccion'>Confirmar</button>
        
        </div>
        </div>
        </>
    )
}

export default Transacciones