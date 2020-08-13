const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');

const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        res.render('users/login');
    },
    authenticate: (req, res) => {
        let errors = validationResult(req);

        // Si no hubo errores de validación
        if (errors.isEmpty()) {

            res.send(req.body);

            let user = usersModel.findByField('email', req.body.email);


        } else {

            res.render('users/login', { 
                errors: errors.mapped(), 
                user: req.body 
            });
        }

    }
}