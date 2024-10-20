import React, {useState} from 'react'
import './ayuda.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function ayuda(){
    const navigate = useNavigate()
    return( 
        <>
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div id ="info">
            <h1 class = "texto">Ayuda</h1>
            <div class="texto">
                <h3>Preguntas Frecuentes</h3>
                <ul>
                    <li>¿Cómo abro una cuenta?</li>
                    <li>¿Cómo accedo a la banca en línea?</li>
                    <li>¿Qué hacer si olvido mi contraseña?</li>
                </ul>
            </div>

            <div class="texto">
                <h3>Guías</h3>
                <ul>
                    <li>Cómo abrir una cuenta</li>
                    <li>Uso de la banca en línea</li>
                    <li>Transferencias internacionales</li>
                </ul>
            </div>

            <div class="texto">
                <h3>Seguridad</h3>
                <p>Usamos encriptación avanzada y autenticación de dos factores para proteger tus datos.</p>
            </div>

            <div class="texto">
                <h3>Contacto</h3>
                <p>Teléfono: +57 1 234 5678</p>
                <p>Correo electrónico: soporte@armandoestebanquito.com</p>
                <p>Soporte en línea: Chatea con un agente desde nuestra app.</p>
            </div>

        </div>
        </> 
    )
}

export default ayuda