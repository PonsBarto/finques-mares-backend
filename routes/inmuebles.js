// routes/inmuebles.js
const express = require('express');
const router = express.Router();
const inmuebleController = require('../controllers/inmuebleController');

// Crear un nuevo inmueble
router.post('/', inmuebleController.createInmueble);

// Obtener todos los inmuebles
router.get('/', inmuebleController.getAllInmuebles);

// Obtener un inmueble por ID
router.get('/:id', inmuebleController.getInmuebleById);

// Actualizar un inmueble
router.put('/:id', inmuebleController.updateInmueble);

// Eliminar un inmueble
router.delete('/:id', inmuebleController.deleteInmueble);

module.exports = router;
