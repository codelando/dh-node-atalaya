module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.category > 1) {
        return res.redirect('/')
    }
    next();
};