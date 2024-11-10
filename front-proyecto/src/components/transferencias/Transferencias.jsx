import React, { useState } from 'react';
import './Transferencias.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'
import { useUser } from '../../context'

function Transferencias() {
    const{user, actualizar} = useUser();
    const navigate = useNavigate();
    const [banco, setBanco] = useState('');
    const [numeroCuenta, setNumeroCuenta] = useState('');
    const [monto, setMonto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleBancoChange = (e) => {
        setBanco(e.target.value);
    };

    const handleNumeroCuentaChange = (e) => {
        setNumeroCuenta(e.target.value);
    };

    const handleMontoChange = (e) => {
        setMonto(e.target.value);
    };

    const handleConfirmar = async () => {
        if (!banco || !numeroCuenta || !monto) {
            setMensaje('Por favor, complete todos los campos.');
            return;
        }

        const cantidad = parseFloat(monto);
        if (isNaN(cantidad) || cantidad <= 0) {
            setMensaje('El monto debe ser un número positivo.');
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/transferencias", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "usuario": localStorage.getItem('usuario') 
                },
                body: JSON.stringify({ banco, numeroCuenta, monto: cantidad })
            });

            const data = await response.json();
            if (response.ok) {
                setMensaje(data.message || "Transferencia exitosa");
                actualizar('saldo', user.saldo-cantidad)
                setTimeout(() => navigate('/home'), 2000);
            } else {
                setMensaje(data.message || "Error en la transferencia");
            }
        } catch (error) {
            console.error("Error al realizar la transferencia:", error);
            setMensaje("Error en el servidor");
        }
    }

    return (
        <>
            <div id="root">
                <button className='btnRetroceder' onClick={() => navigate('/home')}><img src={icon} className='icono' /></button>
                <div className="cuadrado">
                    <h1>Transferencias</h1>
                    <div id="banco">
                        <h4>Banco:</h4>
                        <select
                            name="banco"
                            className="item"
                            value={banco}
                            onChange={handleBancoChange}
                        >
                            <option value="">--Seleccione un banco--</option>
                            <option value="banco1">Armandoestebanquito</option>
                            <option value="banco3">Banco Davivienda SA</option>
                            <option value="banco3">BBVA Colombia</option>
                            <option value="banco3">Banco AV Villas</option>
                            <option value="banco3">Banco Agrario</option>
                            <option value="banco3">Banco Popular</option>
                            <option value="banco3">Banco de Bogota</option>
                            <option value="banco2">Bancolombia</option>
                            <option value="banco3">NU</option>
                        </select>
                    </div>
                    <div id="cuenta">
                        <h4>Número de cuenta:</h4>
                        <input type="number" name='cuenta_id2' className='item' value={numeroCuenta} onChange={handleNumeroCuentaChange} />
                    </div>
                    <div id="monto">
                        <h4>Monto:</h4>
                        <input type="number" name='monto' className='item' value={monto} onChange={handleMontoChange} />
                    </div>
                    <button className='botonTransaccion' onClick={handleConfirmar}>Confirmar</button>
                    {mensaje && <p>{mensaje}</p>}
                </div>
            </div>
        </>
    );
}

export default Transferencias;
