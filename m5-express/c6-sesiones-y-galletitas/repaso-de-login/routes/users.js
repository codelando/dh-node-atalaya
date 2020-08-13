const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

const validate = require('../validators/users');


router.get('/login', controller.login);
router.post('/login', validate.loginForm, controller.authenticate);

module.exports = router;