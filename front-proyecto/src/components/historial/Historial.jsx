import React from 'react'
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
        <div >
        <h1 class="Letra">Historial de movimientos</h1>
        <div>
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
                <a href="#">Perfil</a>
                <a href="#">Configuración</a>
                <a href="#">Ayuda</a>
                <a href="#">Sobre Armandoestebanquito</a>
                <a href="#">Cerrar sesión</a>
        </div>
        </div>
        </>
    )
}

export default Historial