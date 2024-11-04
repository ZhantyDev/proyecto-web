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
                <button className='botones' onClick={()=>navigate('/retiros')}>Retiros</button>
                <button className='botones' onClick={()=>navigate('/prestamos')}>Préstamos</button>
            </div>

            <button className='menu-button' onClick={toggleSidebar}>☰</button>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <a href="#" className="closebtn" onClick={toggleSidebar}>×</a>
                <a onClick={()=> navigate('/perfil')}>Perfil</a>
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
                <a onClick={()=> navigate('/ayuda')}>Ayuda</a>
                <a onClick={()=>navigate('/nosotros')}>Sobre Armandoestebanquito</a>
                <a onClick={() => {localStorage.removeItem('usuario'); navigate('/'); // Redirige al inicio de sesión
}}>Cerrar sesión</a>
            </div>
        </div>
        </>
    )
}

export default Principal