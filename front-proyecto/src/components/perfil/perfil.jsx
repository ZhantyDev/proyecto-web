import React, {useState} from 'react'
import './perfil.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'
import iconoPerfil from '../../assets/usuario.png'
import { useUser } from '../../context.jsx';

function perfil(){
    const navigate = useNavigate()
    const {user} = useUser()
    return( 
        <> 
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div id = "fondo">
            <div className ="cuadro1">
                <img src={iconoPerfil} className = "foto" />
                <div className = "texto">
                    <p>Usuario: {user.nombre} </p>
                    <p>Monto: {user.saldo}$ </p>
                    <p># de usuario: {user.cuenta_id} </p>                    
                </div>
            </div>
            


        </div>
        </> 
    )
}

export default perfil
