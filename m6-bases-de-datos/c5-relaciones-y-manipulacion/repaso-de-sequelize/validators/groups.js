const { check } = require('express-validator');

// Creamos una propiedad por cada formulario que queramos validar
module.exports = {
    createForm: [
        
        check('name')
            .notEmpty().withMessage('Debes completar el campo de nombre').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'), 

        check('categoryId')
            .notEmpty().withMessage('Debes elejir una categoría').bail(),

        check('repository')
            .notEmpty().withMessage('Debes completar el campo de repositorio').bail()
            // https://express-validator.github.io/docs/custom-validators-sanitizers.html
            .custom(value => value.startsWith('https://github.com/')).withMessage('Debe ser una url de GitHub'),
       
        check('description')
            .notEmpty().withMessage('Debes completar el campo de descripción').bail()
            .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),
    ],
    searchForm: [
        check('search')
            .notEmpty().withMessage('Debes completar el campo de busqueda').bail()
            .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
    ]
}