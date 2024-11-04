import React from 'react'
import './Ingreso.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Ingresoregistro(){
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', contraseña: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                navigate('/home');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
        }
    };

    return(
        <>
        <div id = "cuadro">
            <div className = "cuadrito" >
                <h1 className = "letra" >Inicio de sesion</h1>
                <input type="text" name='email' className = 'item' placeholder='Usuario' onChange={handleChange}/>
                <input type="password" name='contraseña' className = 'item' placeholder='Contraseña' onChange={handleChange}/>
                <div className = "div">
                    <button className = 'botonStyle' onClick={handleSubmit}>Iniciar</button>
                    <button className = 'botonStyle' onClick={()=>navigate('/registro')}>Registro</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ingresoregistro