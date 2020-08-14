const bcrypt = require('bcryptjs');

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
            
            let user = usersModel.findByField('email', req.body.email);

            // Si existe el usuario
            if (user) {

                // Si la contraseña es correcta
                if (bcrypt.compareSync(req.body.password, user.password)) {

                    // Lo guardo en session
                    delete user.password;

                    req.session.user = user;

                    res.redirect('/');

                } else {
                    res.render('users/login', { 
                        errors: { password: { msg: 'El password es incorrecto' } } , 
                        user: req.body 
                    });
                }
            } 


        } else {
            console.log(errors.mapped());

            res.render('users/login', { 
                errors: errors.mapped(), 
                user: req.body 
            });
        }

    },
    logout: (req, res) => {
        req.session.destroy();

        res.redirect('/');
    },
}