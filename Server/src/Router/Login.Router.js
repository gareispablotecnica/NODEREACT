const Express = require('express');

const Ruta = Express.Router();

const { RegistrarUsuario } = require('../Controller/Login.Controller');

Ruta.post('/RegistrarUser', RegistrarUsuario);

module.exports = Ruta;