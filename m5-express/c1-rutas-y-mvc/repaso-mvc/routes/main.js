const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Página de inicio');
});

module.exports = router;