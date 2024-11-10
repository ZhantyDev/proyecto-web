import React, {useState} from 'react'
import './Depositos.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function Depositos(){
    const navigate = useNavigate()
    const [numeroCuenta, setNumeroCuenta] = useState('');
    const [dineroDepositado, setDineroDepositado] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleNumeroCuentaChange = (e) => {
        setNumeroCuenta(e.target.value);
    };

    const handleDineroDepositadoChange = (e) => {
        setDineroDepositado(e.target.value);
    };

    const handleConfirmar = async () => {
        if (!numeroCuenta || !dineroDepositado) {
            setMensaje('Por favor, complete todos los campos.');
            return;
        }

        const cantidad = parseFloat(dineroDepositado);
        if (isNaN(cantidad) || cantidad <= 0) {
            setMensaje('El monto debe ser un número positivo.');
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/depositos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "usuario": localStorage.getItem('usuario')
                },
                body: JSON.stringify({ numeroCuenta, dineroDepositado: cantidad })
            });

            const data = await response.json();
            if (response.ok) {
                setMensaje(data.message || "Depósito exitoso");
                setTimeout(() => navigate('/home'), 2000); 
            } else {
                setMensaje(data.message || "Error en el depósito");
            }
        } catch (error) {
            console.error("Error al realizar el depósito:", error);
            setMensaje("Error en el servidor");
        }
    }

    return(
        <>
        <div id = "rootDepositos">
            <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
            <div className = "cuadradoDepositos">
                <h1>Depósitos</h1>
                <div id="cuenta">
                    <h4>Numero de cuenta:</h4>
                    <input type="number" name='numeroCuenta' className = 'item' value={numeroCuenta} onChange={handleNumeroCuentaChange}/>
                </div>
                <div id="monto">
                    <h4>Dinero:</h4>
                    <input type="text" name='dineroDepositado' className = 'item' value={dineroDepositado} onChange={handleDineroDepositadoChange}/>
                </div>
                <button className = 'botonDeposito' onClick={handleConfirmar}>Confirmar</button>
            </div>
        </div>
        </>
    )
}

export default Depositos