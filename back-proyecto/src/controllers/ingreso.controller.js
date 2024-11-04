import {getConnection} from '../database/database.js'

let usuarioIngresado = null

const ingreso = async(req, res)=>{   
    let connection
    const { email, contraseña } = req.body

    try{
        connection = await getConnection()
        const [result] = await connection.query('select * from Usuarios where email = ?', [email])
        
        console.log("conectado")

        if (result.length === 0){
            console.log("Usuario no encontrado")
            return res.status(401).json({ message: "Usuario no encontrado" });
        }

        let usuario = result[0]

        if (contraseña === usuario.contraseña) {
            console.log("Usuario confirmado, bienvenido ", usuario.nombre);
            return res.status(200).json({ message: "Inicio de sesión exitoso", usuario });
        } else {
            console.log("Contraseña incorrecta");
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }
    } catch (error) {
        console.error("Error del servidor:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
}
 
export const metodoIngreso = {
    ingreso,
    usuarioIngresado
};