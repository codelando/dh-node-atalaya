const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupsController');
const validate = require('../validators/groups');

const userRoute = require('../middlewares/userRoute');
const adminRoute = require('../middlewares/adminRoute');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/groups'),
    filename: (req, file, callback) => {
        callback(null, 'group-' + Date.now() + path.extname(file.originalname)) 
    }
});

const upload = multer({ storage });

// router.use(userRoute);

// Todos los grupos
router.get('/', controller.index);

// Formulario de búsqueda
router.get('/search', validate.searchForm, controller.search);

// Formulario de creación
router.get('/create', userRoute, controller.create);

// Procesamiento del formulario de creación
router.post('/', userRoute, upload.single('image'), validate.createForm, controller.store);

// Formulario de edición
router.get('/:id/edit', userRoute, controller.edit);

// Procesamiento del formulario de edicion
router.put('/:id', userRoute, upload.single('image'), controller.update);

// Detalle de un grupo - Ojo con el parámetro
router.get('/:id', controller.show);

// Procesamiento del formulario de edicion
router.delete('/:id', userRoute, adminRoute, controller.destroy);

module.exports = router;