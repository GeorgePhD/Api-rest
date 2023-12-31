

const express = require('express');
const router = express.Router();
const ArticuloControlador = require('../controladores/articulo');


//First route
router.get('/ruta-de-prueba', ArticuloControlador.prueba);
router.get('/curso', ArticuloControlador.curso);

//ruta util
router.post('/crear', ArticuloControlador.crear);
router.get('/articulos/:ultimos?', ArticuloControlador.listar);
router.get('/articulo/:id', ArticuloControlador.uno);

module.exports = router;







