import { getConnection } from "../database/database.js";

export const registro = async(req, res)=>{   
    let connection 
    const cuenta_id = 1111111115
    const nombre ='santiago'
    const email = 'jdzamora@gmail.com'
    const contraseña = 'password123'
    const tipo = 'ahorros'

    const query = 'insert into Usuarios (cuenta_id, nombre, email, contraseña, tipo, saldo) values (?, ?, ?, ?, ? ,0)'
    connection = await  getConnection()
    const existe = await connection.query('select * from Usuarios where cuenta_id = ?', [cuenta_id])
    try {
        if (existe[0][0].nombre !=' '){
            console.log('usuario ya existente, intente con otro numero telefonico y/o correo electronico')
        }
        
    } catch (error) {
        const registrarUsuario = await connection.execute(query, [cuenta_id, nombre, email, contraseña, tipo])
        const us = await connection.query('select * from Usuarios where cuenta_id = ?', [cuenta_id])
        console.log('usuario registrado exitosamente, welcome ', us[0][0].nombre)
    }   
}