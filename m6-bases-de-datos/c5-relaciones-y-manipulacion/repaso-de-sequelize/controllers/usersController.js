const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');
const usersTokensModel = jsonTable('usersTokens');


const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        return res.render('users/login');
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

                    // Si pidió que lo recordemos
                    if (req.body.remember) {

                        // Generamos un token seguro, eso para que no pueda entrar cualquiera
                        // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
                        const token = crypto.randomBytes(64).toString('base64');

                        usersTokensModel.create({userId: user.id, token });

                        // Seteamos una cookie en el navegador   msec   seg  min  hs  dias  meses
                        res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 24 * 30 * 3} )
                    } 
                    
                    return res.redirect('/');

                // Si la contraseña es incorrecta, volvemos al formulario con un error
                } else {
                    return res.render('users/login', { 
                        errors: { password: { msg: 'El password es incorrecto' } } , 
                        user: req.body 
                    });
                }
            } else {
                return res.render('users/login', { 
                    errors: { email: { msg: 'El email no está registrado' } } , 
                    user: req.body 
                });
            }


        } else {
            console.log(errors.mapped());

            return res.render('users/login', { 
                errors: errors.mapped(), 
                user: req.body 
            });
        }

    },
    logout: (req, res) => {

        // Borro todas los tokens del usuario (lo deslogueo de todos los dispositivos)
        let userTokens = usersTokensModel.findAllByField('userId', req.session.user.id);
        userTokens.forEach(userToken => {
            usersTokensModel.delete(userToken.id);
        });

        // Borro solo el token del dispositivo desde donde se está logeando
        // let userToken = usersTokensModel.findByField('token', req.cookies.userToken);
        // usersTokensModel.delete(userToken.id);

        res.clearCookie('userToken');
        
        req.session.destroy();

        return res.redirect('/');
    },
}