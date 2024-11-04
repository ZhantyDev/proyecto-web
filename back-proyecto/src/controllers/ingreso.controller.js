import {getConnection} from '../database/database.js'
import bcrypt from 'bcrypt'

let usuarioIngresado = null

const ingreso = async(req, res)=>{   
    let connection
    const { email, contraseña } = req.body

    try{
        connection = await  getConnection()
        const result = await connection.query('select * from Usuarios where email = ?', [email])
        
        console.log("conectado")
        console.log(result[0][0])

        if (result.length === 0){
            console.log("Usuario no encontrado")
            return res.status(401).json({ message: "Usuario no encontrado" });
        }
        const usuario = result[0]

        if (contraseña === usuario.contraseña) {
            console.log("Usuario confirmado, bienvenido ", usuario.nombre);
            usuarioIngresado = usuario.cuenta_id
            return res.status(200).json({ message: "Inicio de sesión exitoso", usuario });
        } else {
            console.log("Contraseña incorrecta");
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error del servidor" });
    } finally {
        if (connection) connection.release(); // Asegúrate de liberar la conexión
    }
}
export const metodoIngreso = {
    ingreso,
    usuarioIngresado
}
 

