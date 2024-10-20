import React, {useState} from 'react'
import './perfil.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'
import iconoPerfil from '../../assets/usuario.png'

function perfil(){
    const navigate = useNavigate()
    return( 
        <> 
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div id = "fondo">
            <div class ="cuadro1">
                <img src={iconoPerfil} class = "foto" />
                <div class = "texto">
                    <p>Usuario: Usuario1 </p>
                    <p>Monto: 0.0$ </p>
                    <p># de usuario: 0 </p>                    
                </div>
            </div>
            


        </div>
        </> 
    )
}

export default perfil
