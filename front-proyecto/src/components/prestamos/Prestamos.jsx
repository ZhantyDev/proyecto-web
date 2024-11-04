import React, {useState} from 'react'
import './Prestamos.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function Prestamos(){
    const navigate = useNavigate()
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSolicitar = async () => {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        const cuenta_id = usuario ? usuario.cuenta_id : null;
        console.log(localStorage.getItem('usuario')); // Verifica el contenido de usuario
    
        if (!cuenta_id) {
            setError('Error: No se encontró el identificador de la cuenta. Por favor, inicia sesión nuevamente.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/api/prestamos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'usuario': JSON.stringify(usuario)
                },
                body: JSON.stringify({ cuenta_id, monto: parseFloat(monto), plazo }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setError(data.error);
                setSuccess('');
            } else {
                setSuccess(data.message);
                console.log('Datos enviados:', { cuenta_id, monto, plazo });
                setError('');
                setMonto('');
                setPlazo('');
            }
        } catch (error) {
            setError('Error al solicitar el préstamo. Intenta de nuevo.');
            setSuccess('');
        }
    };

    return(
        <>
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div className = "cuadrado">
        <h1>Préstamos</h1>
        <p>Para solicitar tu préstamo en Banco Armandoestebanquito ingresa los siguientes datos:</p>
            <div id='monto'>
                <h4>Monto:</h4>
                <input type="number" name='dineroPrestamo' value={monto}  onChange={(e) => setMonto(e.target.value)} className='item' />
            </div>
            <div id="plazo">
                <h4>Plazo (Tiempo en meses):</h4>
                <input type="number" name='plazo' value={plazo} onChange={(e) => setPlazo(e.target.value)} className='item'/>
            </div>
            <button className = 'botonPrestamo' onClick={handleSolicitar}>Solicitar</button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
        </div>
        </>
        )
}

export default Prestamos