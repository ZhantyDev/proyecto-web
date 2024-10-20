import React from 'react'
import './Ingreso.css'
import { useNavigate } from 'react-router-dom';

function Ingresoregistro(){
    const navigate = useNavigate()
    return(
        <>
        <div id = "root">
            <div class = "cuadrito" >
                <h1 class = "letra" >Inicio de sesion</h1>
                <input type="text" name='input_usuario' class = 'item' placeholder='Usuario' />
                <input type="password" name='input_contraseña' class = 'item' placeholder='Contraseña' />
                <div class = "div">
                    <button class = 'botonStyle' onClick={()=>navigate('/home')}>Iniciar</button>
                    <button class = 'botonStyle' onClick={()=>navigate('/registro')}>Registro</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ingresoregistro