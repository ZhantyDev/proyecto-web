import React, {useState} from 'react'
import './Historial.css'
import { useNavigate } from 'react-router-dom';

function Historial(){
    const navigate = useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return(
        <>
        <div id='ppal' >
        <h1 class="Letra">Historial de movimientos</h1>
        <div id='tablaa'>
        <table>
            <tr>
                <th class="Letra" >Tipo de movimiento</th>
                <th class="Letra" >Cantidad de dinero</th>
                <th class="Letra" >Cuenta receptora</th>
            </tr>
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