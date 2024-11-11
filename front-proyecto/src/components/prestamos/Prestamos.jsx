import React, { useState } from 'react';
import './Prestamos.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png';
import { useUser } from '../../context';

function Prestamos() {
    const { user, actualizar } = useUser();
    const navigate = useNavigate();
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSolicitar = async () => {
        if (!monto || !plazo) {
            setMensaje('Por favor, complete todos los campos');
            return;
        }

        const cantidad = parseFloat(monto);
        if (isNaN(cantidad) || cantidad <= 0) {
            setMensaje('El monto debe ser un número positivo');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/prestamos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cuenta_id: user.cuenta_id, monto: cantidad, plazo }),
            });

            const data = await response.json();
            if (response.ok) {
                setMensaje(data.message || "Su solicitud ha sido aprobada");
                actualizar('saldo', Number(user.saldo)+cantidad);
                setTimeout(() => navigate('/home'), 2000);
            } else {
                setMensaje(data.message || "No ha sido posible hacer la solicitud de préstamo");
            }
        } catch (error) {
            console.error('Error al solicitar el préstamo:', error);
            setMensaje("Error en el servidor");
        }
    };

    return (
        <>
            <button className='btnRetroceder' onClick={() => navigate('/home')}>
                <img src={icon} className='icono' />
            </button>
            <div className="cuadrado">
                <h1>Préstamos</h1>
                <p>Recuerda que para solicitar un préstamo debes contar con al menos el 10% del valor que deseas prestar disponible en tu cuenta bancaria</p>
                <p>Para solicitar tu préstamo en Banco Armandoestebanquito ingresa los siguientes datos:</p>
                <div id='monto'>
                    <h4>Monto:</h4>
                    <input type="number" name='dineroPrestamo' value={monto} onChange={(e) => setMonto(e.target.value)} className='item' />
                </div>
                <div id="plazo">
                    <h4>Plazo (Tiempo en meses):</h4>
                    <input type="number" name='plazo' value={plazo} onChange={(e) => setPlazo(e.target.value)} className='item' />
                </div>
                <button className='botonPrestamo' onClick={handleSolicitar}>Solicitar</button>
                {mensaje && <p>{mensaje}</p>}
            </div>
        </>
    );
}

export default Prestamos;

