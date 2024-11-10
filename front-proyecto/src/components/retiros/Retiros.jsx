import React, {useState} from 'react'
import './Retiros.css'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/retroceso-rapido.png'
import { useUser } from '../../context'

function Retiros(){
    const{user, actualizar} = useUser();
    const navigate = useNavigate()
    const [monto, setMonto] = useState('')
    const [codigoRetiro, setCodigoRetiro] = useState(null);
    const[mensaje, setMensaje] = useState('')

    const cuenta_id = JSON.parse(localStorage.getItem('usuario')).cuenta_id;
    
    const generarCodigoRetiro = async () => {
        if (!monto || monto < 10) {
            setMensaje("Por favor ingrese una cantidad válida (mínimo $10.00).");
            return;
        }

        const cuenta_id = JSON.parse(localStorage.getItem('usuario')).cuenta_id;
    
        try {
            const response = await fetch("http://localhost:3000/api/retiros", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cantidad: monto, cuenta_id })
            });

            const data = await response.json();
            if (response.ok) {
                setCodigoRetiro(data.codigoRetiro);
                actualizar('saldo', user.saldo-monto)
                setMensaje("Retiro exitoso");
            } else {
                setMensaje(data.message || "Error en el retiro");
            }
        } catch (error) {
            console.error("Error al generar el código de retiro:", error);
            setMensaje("Error en el servidor");
        }
    };

    return(
        <>
        <div id = "root">
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div className = "cuadrado">
            <h1>Retiros</h1>
            <div id="monto">
                <h3>Cantidad a retirar</h3>
                <input type="number" name='numeroCuenta' className = 'item' value={monto}  onChange={(e) => setMonto(e.target.value)} min="10" placeholder="Ingrese la cantidad" />
            </div>
            <h3>Para realizar un retiro puede acercarse a un corresponsal bancario o cajero electrónico del banco Armandoestebanquito 
                y con su número de cuenta y el código a continuación puede retirar cualquier monto desde $10.00</h3>
            <h2>Codigo:</h2>{codigoRetiro ? (
                    <>
                        <h2>Código: {codigoRetiro}</h2>
                        <p>Recuerde que tiene 30 minutos para realizar el retiro.</p>
                    </>
                ) : (
                    <button className="botonRetiro" onClick={generarCodigoRetiro}>Generar Código</button>
                )}

                    {mensaje && <p>{mensaje}</p>}
                <button className="botonRetiro" onClick={() => navigate('/home')}>Finalizar retiro</button>
        </div>
        </div>
        </>
        )
}

export default Retiros