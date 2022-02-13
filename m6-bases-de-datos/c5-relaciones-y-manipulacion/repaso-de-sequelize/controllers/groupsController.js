const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const { validationResult } = require('express-validator');

const groupsModel = jsonTable('groups');
const categoriesModel = jsonTable('categories');

const { tag, group, category } = require('../database/models');
const { where } = require('sequelize');

module.exports = {
    index: (req, res) => {
        // let groups = groupsModel.all()
        // res.render('groups/index',  { groups });

        group.findAll({ include: 'category' })
            .then(groups => {
                return res.render('groups/index',  { groups });
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })

    },
    create: (req, res) => {
        // let categories = categoriesModel.all();
        // res.render('groups/create', { categories });

        category.findAll()
            .then(categories => {
                return res.render('groups/create',  { categories });
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // Micro desafío
            // 1. leer todos los grupos
            // 2. creo el grupo con los datos del formulario
            // 3. agrego el nuevo grupo a los existentes
            // 4. guardado el nuevo listado en el archivo JSON

            let newGroup = req.body;
            newGroup.image = 'default.png';

            if (req.file) {
                newGroup.image = req.file.filename;
            } else if (req.body.oldImage) {
                newGroup.image = req.body.oldImage;
            }

            delete newGroup.oldImage;

            // groupId = groupsModel.create(group);
            // res.redirect('/groups/' + groupId);

            group.create(newGroup)
                .then(newGroup => {
                    return res.redirect('/groups/' + newGroup.id);
                })
            

        } else {
            // let categories = categoriesModel.all();

            category.findAll()
                .then(categories => {
                    return res.render('groups/create',  { 
                        categories,
                        errors: errors.mapped(), 
                        group: req.body
                    });
                })
                .catch(error => {
                    console.log(error);
                    return res.redirect('/');
                })
        }
    },
    edit: async (req, res) => {
        // let group = groupsModel.find(req.params.id)
        // let categories = categoriesModel.all();
        // res.render('groups/edit', { group, categories });

        const categories = await category.findAll();
        const tags = await tag.findAll();
 
        group.findByPk(req.params.id, { include: [ 'category', 'tags' ] })
        .then(group => {
            return res.render('groups/edit',  { group, categories, tags });
        })
        .catch(error => {
            console.log(error);
            return res.redirect('/');
        })
    },
    update: async (req, res) => {

        let tags = await tag.findAll({ where: { id: req.body.tagId }})

        let updatedGroup = req.body;
        
        // updatedGroup.id = req.params.id;
        
        if (req.file) {
            updatedGroup.image = req.file.filename;
        } else if (req.body.oldImage) {
            updatedGroup.image = req.body.oldImage;
        }
        
        delete updatedGroup.oldImage;
        
        // groupId = groupsModel.update(group);
        // res.redirect('/groups/' + groupId)
        
        // Va por acá la cosa
        // https://stackoverflow.com/questions/38524938/sequelize-update-record-and-return-result

        // Find or create
        // https://stackoverflow.com/questions/28821812/sequelize-many-to-many-how-to-create-a-new-record-and-update-join-table

        group.update(updatedGroup, { where: { id: req.params.id }, include: 'tags' , returning: true })
        .then(updatedGroup => {
            console.log(updatedGroup);
            // updatedGroup.setTags(tags)
            return res.redirect('/groups/' + req.params.id);
        })
        
    },
    show: (req, res) => {
        
        // let group = groupsModel.find(req.params.id);
        // group.category = categoriesModel.find(group.categoryId);

        group.findByPk(req.params.id, { include: ['category', 'tags'] })
        .then(group => {
            return res.render('groups/detail',  { group });
        })
        .catch(error => {
            console.log(error);
            return res.redirect('/');
        })
    },
    destroy: async (req, res) => {

        // let group = groupsModel.find(req.params.id);
        // let imagePath = path.join(__dirname, '../public/img/groups/' + group.image);
        
        // groupsModel.delete(req.params.id);

        existingGroup = await group.findByPk(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/groups/' + existingGroup.image);

        group.destroy({ where: { id: req.params.id } })
        .then(deletedGroup => {
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }

            return res.redirect('/groups');
        })


        // res.redirect('/groups')
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