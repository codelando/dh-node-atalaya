const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');
const usersTokensModel = jsonTable('usersTokens');


module.exports = (req, res, next) => {
    // Si hay un usuario en sesión
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;

    // O si tiene la cookie de recordar
    } else if (req.cookies.userToken) {

        let userToken = usersTokensModel.findByField('token', req.cookies.userToken);

        // Y si existe el token en base
        if (userToken) {
            let user = usersModel.find(userToken.userId);
            
            // Si existe un usuario para ese token
            if (user) {
                delete user.password;
                
                req.session.user = user;
                res.locals.user = user;
            }
        // Si no existe el token en base, le borramos la cookie
        } else {
            res.clearCookie('userToken');
        }
    }
    next();
};