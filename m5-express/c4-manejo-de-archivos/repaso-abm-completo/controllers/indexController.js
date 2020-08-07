const path = require('path');

module.exports = {
    index: (req, res) => {
        res.redirect('/groups');
    }
}