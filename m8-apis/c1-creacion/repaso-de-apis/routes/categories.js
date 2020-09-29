const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoriesController');

// Todos los grupos
router.get('/', controller.index);

module.exports = router;