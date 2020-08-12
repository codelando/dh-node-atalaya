# Middlewares

## Estructura básica

```
(req, res, next) => {
    // código
    next();
}
```

## De aplicación

Corren con cada request

`app.use(middleware)`

## De ruteador

Corren para todas las rutas de un archivo de rutas

`router.use(middleware)`

## De ruta

Corren en una ruta específica

`router.get('/', middleware1, middleware2, controller.action);`

# Express Validator

## En la ruta o el archivo de validaciones

`const { check } = require('express-validator');`

`check('fieldname').is...().withMessage('Error message')`


## En el controlador

`const { validationResult } = require('express-validator');`

`let errors = validationResult(req);`

`errors.isEmpty()`

`errors.mapped()`

## En la vista

`errors.fieldname.msg()`
