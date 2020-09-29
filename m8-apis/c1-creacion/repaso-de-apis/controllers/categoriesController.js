const { category } = require('../database/models')

module.exports = {
    index: (req, res) => {
        category.findAll({ include: 'groups' })
            .then(categories => {
                return res.render('categories/index',  { categories });
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },
}