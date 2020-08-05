const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '/../data/groups.json');
const groups = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.render('groups/index', { groups });
    },
    create: (req, res) => {
        res.render('groups/create');
    },
    store: (req, res) => {
        // nuevo grupo
        let newGroup = {
            id: 1,
            name: req.body.name,
            repository: req.body.repository,
            students: []
        }

        // agrego el nuevo grupo a los existentes
        groups.push(newGroup);

        console.log(groups);
        // guardar el nuevo listado en el archivo JSON

        //res.send(req.body);

        res.redirect('/groups')
    },
    edit: (req, res) => {

        // Grupo actualizado
        let newGroup = {
            id: req.params.id,
            name: req.body.name,
            repository: req.body.repository,
            students: []
        }

        // Quitar el grupo de mi array de grupos
        const group = groups.find(group => group.id == req.params.id);

        res.render('groups/edit', { group });
    },
    update: (req, res) => {
        res.send(req.body);
    },
    show: (req, res) => {

        // Busco el grupo
        const group = groups.find(group => group.id == req.params.id);

        res.render('groups/detail', { group });
    },
    destroy: (req, res) => {
        res.send(req.params);
    },
    search: (req, res) => {
        let results = [];

        if (req.query.search) {
            results = groups.filter(group => group.name.toLowerCase().includes(req.query.search.toLowerCase()));
        }

        console.log(results);

        res.render('groups/search', { groups: results, search: req.query.search });
    },
}