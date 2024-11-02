import express from 'express';
import router from './routes/routes.estebanquito.js'
import cors from 'cors'
import config from './config.js';

//se crea una instancia de express
const app = express();
app.use(express.json())

//defino un puerto
app.set('port', process.env.PORT || 3000);

//importar rutas
//app.use(router);

//configuracion de cors
app.use(cors({origin: 'http://localhost:5173'}))
app.use('/api', router )
export default app;
