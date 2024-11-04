import React, {useState} from 'react'
import './Retiros.css'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/retroceso-rapido.png'

function Retiros(){
    const navigate = useNavigate()
    const [monto, setmonto] = useState('')
    const[mensaje, setMensaje] = useState('')
    
    return(
        <>
        <div id = "root">
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div className = "cuadrado">
            <h1>Retiros</h1>
            <h3>Para realizar un retiro puede acercarse a un corresponsal bancario o cajero electrónico del banco Armandoestebanquito 
                y con su número de cuenta y el código a continuación puede retirar cualquier monto desde $10.000</h3>
            <h2>Codigo:</h2>
            <h3>Recuerde que para realizar este proceso tiene tiempo tiempo máximo de 30 minutos</h3>
            <button className='botonRetiro' onClick={()=>navigate('/home')}>Finalizar retiro</button>
        </div>
        </div>
        </>
        )
}

export default Retiros