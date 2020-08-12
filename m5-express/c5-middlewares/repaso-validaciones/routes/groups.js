const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupsController');
const m1 = require('../middlewares/m1');
const m2 = require('../middlewares/m2');
const m3 = require('../middlewares/m3');
const maintenanceMode = require('../middlewares/maintenance');
const validate = require('../validators/groups');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/groups'),
    filename: (req, file, callback) => {
        callback(null, 'group-' + Date.now() + path.extname(file.originalname)) 
    }
});

const upload = multer({ storage });

// Para aplicar los middlewares a todo el archivo
// router.use(m1);
// router.use(m2);
// router.use(m3);

// Todos los grupos
router.get('/', m1, m2, m3, controller.index);

// Formulario de búsqueda
router.get('/search', validate.searchForm, controller.search);

// Formulario de creación
router.get('/create' ,controller.create);

// Procesamiento del formulario de creación
router.post('/', upload.single('image'), validate.createForm, controller.store);

// Formulario de edición
router.get('/:id/edit', controller.edit);

// Procesamiento del formulario de edicion
router.put('/:id', upload.single('image'), controller.update);

// Detalle de un grupo - Ojo con el parámetro
router.get('/:id', controller.show);

// Procesamiento del formulario de edicion
router.delete('/:id', controller.destroy);

module.exports = router;