// createForm: [
        
//     check('name')
//         .notEmpty().withMessage('Debes completar el campo de nombre').bail()
//         .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'), 

//     check('categoryId')
//         .notEmpty().withMessage('Debes elejir una categoría').bail(),

//     check('repository')
//         .notEmpty().withMessage('Debes completar el campo de repositorio').bail()
//         // https://express-validator.github.io/docs/custom-validators-sanitizers.html
//         .custom(value => value.startsWith('https://github.com/')).withMessage('Debe ser una url de GitHub'),
   
//     check('description')
//         .notEmpty().withMessage('Debes completar el campo de descripción').bail()
//         .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),
// ],




// on load

// identificamos el form

// identificamos los inputs

// creamos nuestras funciones de validación

// agregamos los eventos a cada input

// agregamos el evento al form

// si todo va bien dejamos que se envíe