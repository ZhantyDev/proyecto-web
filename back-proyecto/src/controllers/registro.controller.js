import {getConnection} from '../database/database.js'

let usuarioRegistrado = []
const Registro = async(req, res)=>{   
    let connection
    const email = 'carlos1@example.com'
    const contraseña = 'password123'
    try{
        connection = await  getConnection()
        const result = await connection.query('select * from Usuarios where email = ?', [email])
        console.log("conectado")
        console.log(result[0][0])
        if (result[0][0].lengt === 0){
            console.log("no llego")
            return false;
        }
        console.log("casi llega")
        if (contraseña == result[0][0].contraseña){
            usuarioRegistrado = result[0];
            console.log("llego")
            return true
        } else{
            console.log("casi casa pero no caso")
            return false;
            
        }    
    }catch (error) {
        console.log(error);
        return false;
    }
}
export const metodoRegistro = {
    Registro,
    usuarioRegistrado
}
 

