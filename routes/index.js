const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const ProyectosController = require('../controllers/ProyectosController');

module.exports = function () {

    router.get('/mascota/:url', ProyectosController.ProyectoporUrl)

  
    return router;
}
