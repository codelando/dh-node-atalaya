const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const { Op } = require("sequelize");
const { movie, actor } = require('./database/models');

app.get('/movies', (req, res) => {
    movie.findAll()
        // Si todo salió bien
        .then(movies => {
            if (movies.length) {
                // Hay resultados
                res.render('movies/index', { movies });
            } else {
                // No hay resultados
            }
        })
        // Si todo salió mal
        .catch(error => {
            res.status(500).render('movies/500');
        });
});

app.get('/movies/search', (req, res) => {
    if (req.query.title) {
        let limit = Number(req.query.perPage) || 10;
        let page = Number(req.query.page) || 1;
        let offset = --page * limit;

        movie.findAndCountAll({
            attributes: ['id', 'title', 'awards'],
            where: { title: { [Op.substring]: req.query.title } },
            order: [ ['title', 'DESC'] ],
            limit,
            offset
        })
            // Si todo salió bien
            .then(movies => {
                let totalPages = Math.ceil(movies.count / limit);

                console.log(movies);
                return res.render('movies/search', { 
                    movies: movies.rows, 
                    totalPages, 
                    currentPage: ++page,
                    totalResults: movies.count,
                    searchTitle: req.query.title,
                    perPage: limit
                });
            })
            // Si todo salió mal
            .catch(error => {
                return res.status(500).render('movies/500');
            });
    } else {
        return res.render('movies/search', { movies: [], totalPages: 0 });
    }
});


app.get('/actors', (req, res) => {
    actor.findAll()
        .then(movies => {
            res.send(movies);
        });
});

app.listen(3000, () => { console.log('Servidor escuchando el puerto 3000'); })