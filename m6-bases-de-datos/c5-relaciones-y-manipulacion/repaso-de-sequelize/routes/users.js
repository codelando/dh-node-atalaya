const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const guestRoute = require('../middlewares/guestRoute')

const validate = require('../validators/users');


router.get('/login', guestRoute, controller.login);
router.post('/login', validate.loginForm, controller.authenticate);
router.get('/logout', controller.logout);


module.exports = router;