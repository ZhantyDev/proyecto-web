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
            <div id="fondo">
                <div class = "container1">
                    <div id = "texto">
                        <div class = 'cuadritos'><p class = "letra"><strong>Armandoestebanquito</strong> es un banco digital colombiano fundado en 2024 por 
                            Santiago, Paula y Melani. Nos enfocamos en ofrecer servicios financieros accesibles, seguros y eficientes para todos.</p>
                        </div>
               
                        <div class = 'cuadritos'>
                            <p class = "letra"><strong>Misión:</strong> Proveer soluciones financieras innovadoras centradas en el cliente.</p>
                        </div>

                        <div class = 'cuadritos'>
                            <p class = "letra"><strong>Visión:</strong> Ser el banco líder en digitalización y accesibilidad financiera en Colombia para 2030.</p>
                        </div>
                        <div class = 'cuadritos'>                            
                            <p class = "letra"><strong>Valores:</strong> Transparencia, seguridad, innovación y compromiso social.</p>
                        </div>
                    </div>
                <div id="fotos">
                    <div class ="cuadritosNosotros">
                        <a class ="letra">Melany</a>
                        <img src= {fotoMela} class = "we" />                        
                    </div>
                    <div class ="cuadritosNosotros">
                        <a class ="letra">Paula</a>
                        <img src= {fotoPau} class = "we" />
                        
                    </div>
                    <div class ="cuadritosNosotros">
                        <a class ="letra">Santiago</a>
                        <img src= {fotoYo} class = "we"/>
                    </div>
                    
                </div>
                        
                </div>
                
                <div class = "container2">
                    <img src ={icon} ></img>
                </div>
            </div>

        </> 
    )
}

export default nosotros