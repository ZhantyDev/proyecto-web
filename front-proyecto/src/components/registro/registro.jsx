import React from 'react'
import './registro.css'
import { useNavigate } from 'react-router-dom';

function registro(){
    const navigate = useNavigate()
    return(
        <>
        <div id = "cuadro">
            <div class = "cuadrito" >
                <h1 class = "letra" >Registrarse</h1>
                <input type="text" name='input_usuario' class = 'item' placeholder='Usuario' />
                <a class ="letrica" name="mensaje"></a>
                <input type="password" name='input_contraseña' class = 'item' placeholder='Contraseña' />
                <button class = 'botonStyle' onClick={()=>navigate('/')}>Registrarse</button>
            </div>
        </div>
        </>
    )
}

export default registro