const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupsController');

// Todos los grupos
router.get('/', controller.index);

// Formulario de búsqueda
router.get('/search', controller.search);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', controller.store);

// Formulario de edición
router.get('/:id/edit', controller.edit);

// Procesamiento del formulario de edicion
router.put('/:id', controller.update);

// Detalle de un grupo - Ojo con el parámetro
router.get('/:id', controller.show);

// Procesamiento del formulario de edicion
router.delete('/:id', controller.destroy);

module.exports = router;