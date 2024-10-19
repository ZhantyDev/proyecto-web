import React from 'react'
import './Ingresoregistro.css'
import { useNavigate } from 'react-router-dom';

function Ingresoregistro(){
    const navigate = useNavigate()
    return(
        <>
        <div id = "root">
        <div class = "cuadrito">
        <h1>inicio de sesion</h1>
        <input type="text" name='input_usuario' class = 'item' placeholder='Usuario' />
        <input type="text" name='input_contraseña' class = 'item' placeholder='Contraseña' />
        <button class = 'botonStyle' onClick={()=>navigate('/home')}>Iniciar</button>
        </div>

        </div>
        </>
    )
}

export default Ingresoregistro