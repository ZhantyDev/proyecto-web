import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});


const getConnection = () => {
    return connection;
}

export {getConnection};

