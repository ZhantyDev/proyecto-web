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
                <input type="text" name='input_usuario' class = 'item' placeholder='Usuario(numero telefonico)' />
                <input type="text" name='input_nombre' class = 'item' placeholder='Nombre' />
                <input type="email" name='input_email' class = 'item' placeholder='Email' />
                <input type="text" name='input_tipo' class = 'item' placeholder='Tipo de cuenta(corriente/ahorros)' />
                <input type="password" name='input_contraseña' class = 'item' placeholder='Contraseña' />
                <a class ="letrica" name="mensaje"></a>
                <button class = 'botonStyle' onClick={()=>navigate('/')}>Registrarse</button>
            </div>
        </div>
        </>
    )
}

export default registro