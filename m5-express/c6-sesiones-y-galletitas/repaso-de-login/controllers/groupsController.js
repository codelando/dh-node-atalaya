const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const { validationResult } = require('express-validator');

const groupsModel = jsonTable('groups');
const categoriesModel = jsonTable('categories');

module.exports = {
    index: (req, res) => {
        // Micro desafío
        // 1. leer el archivo json
        // 2. convertir a formato JavaScript
        // 3. enviar los grupos a la vista

        let groups = groupsModel.all()

        res.render('groups/index',  { groups });
    },
    create: (req, res) => {
        let categories = categoriesModel.all();

        res.render('groups/create', { categories });
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // Micro desafío
            // 1. leer todos los grupos
            // 2. creo el grupo con los datos del formulario
            // 3. agrego el nuevo grupo a los existentes
            // 4. guardado el nuevo listado en el archivo JSON

            let group = req.body;
            group.image = 'default.png';

            if (req.file) {
                group.image = req.file.filename;
            } else if (req.body.oldImage) {
                group.image = req.body.oldImage;
            }

            delete group.oldImage;

            groupId = groupsModel.create(group);

            res.redirect('/groups/' + groupId);
        } else {
            let categories = categoriesModel.all();
            res.render('groups/create', { 
                categories, 
                errors: errors.mapped(), 
                group: req.body 
            });
        }
        

      
    },
    edit: (req, res) => {
        let group = groupsModel.find(req.params.id)
        let categories = categoriesModel.all();


        res.render('groups/edit', { group, categories });
    },
    update: (req, res) => {
        let group = req.body;

        group.id = req.params.id;
        
        if (req.file) {
            group.image = req.file.filename;
        } else if (req.body.oldImage) {
            group.image = req.body.oldImage;
        }

        delete group.oldImage;

        groupId = groupsModel.update(group);

        res.redirect('/groups/' + groupId)
    },
    show: (req, res) => {

        // Busco el grupo

        // Micro desafío
        // 1. Leer todos los grupos
        // 2. Obtener aquel que tiene el mismo id de la ruta
        // 3. Enviarlo a la vista
        
        let group = groupsModel.find(req.params.id);
        group.category = categoriesModel.find(group.categoryId);

        res.render('groups/detail', { group });
    },
    destroy: (req, res) => {

        let group = groupsModel.find(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/groups/' + group.image);
        
        groupsModel.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        res.redirect('/groups')
    },
    search: (req, res) => {
        
        let search = req.query.search;
        let groups = [];

        // Traigo todos los grupos

        // Filtro los grupos

        // Envío los grupos y lo que busco el usuario a la vista

        res.render('groups/search', { search, groups });
    },
}