import app from './app.js'
import {metodoRegistro} from './controllers/registro.controller.js'

const main = () =>{
    app.listen(app.get('port'))
    console.log("el puerto de escucha es; ", app.get('port'))    
    console.log(metodoRegistro.Registro())    
}
main()