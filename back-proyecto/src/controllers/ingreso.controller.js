import {getConnection} from '../database/database.js'


const ingreso = async(req, res)=>{   
    let connection
    const email = 'ana2@example.com'
    const contraseña = 'password123'
    try{
        connection = await  getConnection()
        const result = await connection.query('select * from Usuarios where email = ?', [email])
        console.log("conectado")
        console.log(result[0][0])
        if (result[0][0].lengt === 0){
            console.log("Usuario no encontrado")
            return false;
        }
        console.log("casi llega")
        if (contraseña == result[0][0].contraseña){
            const usuarioIngresado = result[0][0];
            console.log("usuario confirmado, bienvenido ", result[0][0].nombre)
            return true
        } else{
            console.log("Contraseña incorrecta")
            return false;
            
        }    
    }catch (error) {
        console.log(error);
        return false;
    }

    
}
export const metodoIngreso = {
    ingreso,
    usuarioIngresado
}
 

