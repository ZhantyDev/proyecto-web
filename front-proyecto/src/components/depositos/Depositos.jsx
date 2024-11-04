import React, {useState} from 'react'
import './Depositos.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function Depositos(){
    const navigate = useNavigate()
    const [banco, setBanco] = useState('');

    const handleBancoChange = (e) => {
        setBanco(e.target.value);
    };

    return(
        <>
        <div id = "root">
            <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
            <div className = "cuadrado">
                <h1>Depósitos</h1>
                <div id="cuenta">
                    <h4>Numero de cuenta:</h4>
                    <input type="number" name='numeroCuenta' className = 'item' />
                </div>
                <div id="monto">
                    <h4>Dinero:</h4>
                    <input type="text" name='dineroDepositado' className = 'item'/>
                </div>
                <button className = 'botonDeposito'>Confirmar</button>
            </div>
        </div>
        </>
    )
}

export default Depositos