import React, {useState} from 'react'
import './ayuda.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function ayuda(){
    const navigate = useNavigate()
    return( 
        <>
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div>
        <h1 id = "titulo">Ayuda</h1>
            <div id ="info">
                <div className="texto">
                    <h2>Preguntas Frecuentes</h2>
                    <ul>
                        <li>¿Cómo abro una cuenta?</li>
                        <li>¿Cómo accedo a la banca en línea?</li>
                        <li>¿Qué hacer si olvido mi contraseña?</li>
                    </ul>
                </div>

                <div className="texto">
                    <h2>Guías</h2>
                    <ul>
                        <li>Cómo abrir una cuenta</li>
                        <li>Uso de la banca en línea</li>
                        <li>Transferencias internacionales</li>
                    </ul>
                </div>

                <div className="texto">
                    <h2>Seguridad</h2>
                    <p>Usamos encriptación avanzada y autenticación de dos factores para proteger tus datos.</p>
                </div>

                <div className="texto">
                    <h2>Contacto</h2>
                    <p>Teléfono: +57 1 234 5678</p>
                    <p>Correo electrónico: soporte@armandoestebanquito.com</p>
                </div>

            </div>
        </div>
        </> 
    )
}

export default ayuda