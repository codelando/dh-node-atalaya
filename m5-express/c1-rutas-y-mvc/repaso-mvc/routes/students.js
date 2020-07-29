const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentsController');

router.get('/', controller.index);

router.get('/group/:id?', controller.getByGroup);

router.get('/name/:name', controller.getByName);

module.exports = router;