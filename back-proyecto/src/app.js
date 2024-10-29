import express from 'express';
import router from './routes/routes.pokemones.js'
import cors from 'cors'

//se crea una instancia de express
const app = express();

//defino un puerto
app.set('port', 3000);

//importar rutas
app.use(router);

//configuracion de cors
app.use(cors({origin: 'http://localhost:5173'}))

export default app;
