import React, {useState} from 'react'
import './Historial.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context';

function Historial(){
    const navigate = useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [transacciones, setTransacciones] = useState([]);
    const {user} = useUser()
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    const fetchTransacciones = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/historial', { // Cambia la URL según tu configuración
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cuenta_id: 3122222222 }), // Aquí va el ID de la cuenta
            });

            const data = await response.json();

            if (response.ok) {
                setTransacciones(data.info); // Guarda las transacciones en el estado
            } else {
                setError(data.message || 'Error al obtener el historial');
            }
        } catch (error) {
            setError('Error de red o de servidor');
            console.error('Error:', error);
        }
    };

    fetchTransacciones();



    return(
        <>
        <div id='ppal' >
        <h1 class="Letra">Historial de movimientos</h1>
        <div id='tablaa'>
            <table>
                <thead>
                    <tr>
                        <th className="Letra">Tipo de movimiento</th>
                        <th className="Letra">Cantidad de dinero</th>
                        <th className="Letra">Cuenta receptora</th>
                    </tr>
                </thead>
                <tbody>
                    {transacciones.length > 0 ? (
                        transacciones.map((transaccion, index) => (
                            <tr key={index}>
                                <td>{transaccion.tipo_movimiento}</td>
                                <td>{transaccion.cantidad}</td>
                                <td>{transaccion.cuenta_receptora}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" class = 'Letra'>No hay transacciones disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <button className='menu-button' onClick={toggleSidebar}>☰</button>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <a href="#" className="closebtn" onClick={toggleSidebar}>×</a>
                <a href="#" onClick={()=> navigate('/perfil')}>Perfil</a>
                <div class="dropdown">
                    <button className='dropbtn' onClick={toggleSidebar}> Transacciones </button>
                    <div class="dropdown-content">
                        <a href="#" onClick={()=>navigate('/transferencias')}>Transferencias</a>
                        <a href="#" onClick={()=>navigate('/depositos')}>Depósitos</a>
                        <a href="#" onClick={()=>navigate('/prestamos')}>Préstamos</a>
                        <a href="#" onClick={()=>navigate('/retiros')}>Retiros</a>
                        <a href="#" onClick={()=>navigate('/historial')}>Historial</a>
                    </div>                  
                </div>
                <a href="#" onClick={()=> navigate('/ayuda')}>Ayuda</a>
                <a href="#" onClick={()=>navigate('/nosotros')}>Sobre Armandoestebanquito</a>
                <a href="#" onClick={() => {localStorage.removeItem('usuario'); navigate('/');}}>Cerrar sesión</a>
        </div>
        </div>
        </>
    )
}

export default Historial