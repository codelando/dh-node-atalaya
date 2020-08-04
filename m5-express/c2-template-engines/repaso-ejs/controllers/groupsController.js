const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '/../data/groups.json');
const groups = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.render('groups/index', { groups });
    },
    detail: (req, res) => {

        // Busco el grupo
        const group = groups.find(group => group.id == req.params.id);

        res.render('groups/detail', { group });
    }
}