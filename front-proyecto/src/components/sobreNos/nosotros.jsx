import React, {useState} from 'react'
import './nosotros.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/imagen_banco.jpg';
import icon2 from '../../assets/retroceso-rapido.png'
import fotoMela from '../../assets/fotosNosotros/mela.jpg'
import fotoPau from '../../assets/fotosNosotros/paula.jpg'
import fotoYo from '../../assets/fotosNosotros/yo.jpg'


function nosotros(){
    const navigate = useNavigate()
    return( 
        <>
         <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon2} className='icono2'/></button>
            <div id="fondo2">
                <div id = "container1">
                    <div id = "textos">
                        <div id='principal1'>
                            <div className = 'cuadritos'>
                                <h3>Armandoestebanquito</h3>
                                <p>Es un banco digital colombiano fundado en 2024 por Santiago, Paula y Melany. Nos enfocamos en ofrecer servicios financieros accesibles, seguros y eficientes para todos.</p>
                            </div>
                        </div>
                        <div id='VMV'>
                            <div className = 'cuadritos'>
                                <h2>Misión</h2>
                                <p>Proveer soluciones financieras innovadoras centradas en el cliente.</p>
                            </div>

                            <div className = 'cuadritos'>
                                <h2>Visión</h2>
                                <p>Ser el banco líder en digitalización y accesibilidad financiera en Colombia para 2030.</p>
                            </div>
                            <div className = 'cuadritos'> 
                                <h2>Valores</h2>                           
                                <p>Transparencia, seguridad, innovación y compromiso social.</p>
                            </div>
                        </div>
                    </div>
                    <div id = "container2">
                        <img id='Casita' src ={icon} ></img>
                    </div>     
                </div>
                <div id="fotos">
                    <div className ="cuadritosNosotros">
                        <a className ="letra">Melany</a>
                        <img src= {fotoMela} className = "we" />                        
                    </div>
                    <div className ="cuadritosNosotros">
                        <a className ="letra">Paula</a>
                        <img src= {fotoPau} className = "we" />
                    </div>
                    <div className ="cuadritosNosotros">
                        <a className ="letra">Santiago</a>
                        <img src= {fotoYo} className = "we"/>
                    </div>
                </div> 
            </div>
        </> 
    )
}

export default nosotros