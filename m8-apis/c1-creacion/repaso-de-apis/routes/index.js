const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.index);
router.get('/503', (req, res) => {
    res.render('503');
});

module.exports = router;