import React from 'react'
import './registro.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function registro(){
    const navigate = useNavigate()
    const [form, setForm] = useState({ cuenta_id: '', nombre: '', email: '', contraseña: '', tipo: '' , saldo:0});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/registro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error en el registro:", error);
        }
        console.log(form);
    }

    return(
        <>
        <div id = "cuadro">
            <div className = "cuadrito" >
                <h1 className = "letra" >Registro</h1>
                <a className = 'txt'>Tipo de cuenta</a>
               <select
                    id="tipoCuenta"
                    name = 'tipo'
                    className = 'item'
                    placeholder='Tipo de cuenta'
                    onChange={handleChange}>
                    <option value="ahorros">Ahorros</option>
                    <option value="corriente">Corriente</option>
                </select>
                <input 
                    type="text" 
                    name='cuenta_id' 
                    className = 'item' 
                    placeholder='Usuario(numero telefonico)'
                    onChange={handleChange}
                />
                <input 
                    type="text"
                     name='nombre' 
                     className = 'item' 
                     placeholder='Nombre' 
                     onChange={handleChange}
                />
                <input 
                    type="email" 
                    name='email' 
                    className = 'item' 
                    placeholder='Email'
                    onChange={handleChange}
                />               
                <input 
                    type="password"
                    name='contraseña'
                    className = 'item' 
                    placeholder='Contraseña' 
                    onChange={handleChange}
                />
                <a className ="letrica" name="mensaje"></a>
                <button className = 'botonStyle' onClick={handleSubmit}>Registrarse</button>
            </div>
        </div>
        </>
    )
}

export default registro