// ---> Renderizar Express

/*
    CONST --> DECLARACION DE CONSTANTES
    Express --> Variable que almacena el framework Express
    require('express') --> Funcion que importa el modulo Express
*/

const Express = require('express');

// ---> Variable de Entorno Global
const App=Express();

// ---> Invocamos .env
require('dotenv').config();
// ---> Puerto de Conexion
const PORT=process.env.PORT || 5000;


const Router= require('./src/Router/Login.Router')
App.use('/api', Router);

App.use(Express.json());



// ---> .listen para escuchar al Servidror
App.listen(PORT, ()=>{
    console.log(`🚀 http://localhost:${PORT}`);
});

// ---> Parar el Servidor con CTRL + C