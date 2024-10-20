import React, {useState} from 'react'
import './Principal.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/depositphotos_119717876-stock-illustration-refund-flat-vector-icon.jpg';


function Principal(){
    const navigate = useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return(
        <>
        <div id='ppal'>
            <h1 className='letra'>Bienvenido a su banco Armandoestebanquito</h1>
            <h2 className='letra'>Saldo disponible: $$$</h2>
            <div className='boton-container'>
                <button className='btnHistorial' onClick={()=>navigate('/historial')}><img src={icon} className='icono'/></button>
                <button className='botones' onClick={()=>navigate('/transferencias')}>Transferencias</button>
                <button className='botones' onClick={()=>navigate('/depositos')}>Depósitos</button>
                <button className='botones'>Retiros</button>
                <button className='botones' onClick={()=>navigate('/prestamos')}>Préstamos</button>
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

export default Principal