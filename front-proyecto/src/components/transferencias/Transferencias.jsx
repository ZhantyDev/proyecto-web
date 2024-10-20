import React, {useState} from 'react'
import './Transferencias.css'
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/retroceso-rapido.png'

function Transferencias(){
    const navigate = useNavigate()
    const [banco, setBanco] = useState('');

    const handleBancoChange = (e) => {
        setBanco(e.target.value);
    };

    return(
        <>
        <div id = "root">
        <button className='btnRetroceder' onClick={()=>navigate('/home')}><img src={icon} className='icono'/></button>
        <div className = "cuadrado">
        <h1>Transferencias</h1>
        <div id="banco">
            <h4>Banco:</h4>
            <select
            name="banco"
            className="item"
            value={banco}
            onChange={handleBancoChange}
            >
                <option value="">--Seleccione un banco--</option> {/* Opción predeterminada */}
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
            <h4>Numero de cuenta:</h4>
            <input type="number" name='numeroCuenta' className = 'item' />
        </div>
        <div id="monto">
            <h4>Dinero:</h4>
            <input type="number" name='dineroPrestamo' className = 'item'/>
        </div>
        <button className = 'botonTransaccion'>Confirmar</button>
        
        </div>
        </div>
        </>
    )
}

export default Transferencias