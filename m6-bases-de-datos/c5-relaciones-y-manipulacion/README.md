# Sequelize

## Manipulación de datos

### Create

Crea un registro, toma un objeto literal como parámetro. El campo de **id** no es necesario.

```
movie.create({
    title: 'titulo',
    awards: 1,
    rating: 6.4
})
```

### Update

Actualiza el o los registros, toma un objeto literal como primer parámetro y una condición como segundo parámetro. Ojo de no olvidarse la condición o editaremos todos los registros de la tabla.

```
movie.update({
    title: 'titulo',
    awards: 1,
    rating: 6.4
}, { where: id: req.params.id })
```

### Destroy

Borra el o los registros, toma un objeto literal con una condición como parámetro. 

```
movie.destroy({ where: id: req.params.id })
```

**Soft deletes**

Si habilitamos la configuración adecuada (`paranoid: true`) para cada tabla o para la base de datos completa. Sequelize no borrará el registro, simplemente agregará una fecha de borrado y no mostrará el registro cuando hagamos un select.

La columna por defecto es `deletedAt` si lo queremos cambiar podemos usar la configuración: `deletedAt: 'nombreDelCampo'`

https://sequelize.org/master/manual/paranoid.html

## Relaciones

### 1 a 1

Foo.hasOne(Bar);
Bar.belongsTo(Foo);


### 1 a muchos 1:N

```
movie.update({
    title: 'titulo',
    awards: 1,
    rating: 6.4
}, { where: id: req.params.id })
```

`movie.belongsTo(genre)`
`genre.hasMany(movie)`

También podemos especificar la **foreignKey** y el **alias**

```
movie.belongsTo(genre, {
    foreignKey: 'genre_id',
    as: 'genres'
})
```

```
genre.hasMany(movie, {
    foreignKey: 'movie_id',
    as: 'movies'
})
```

De ahora en más, tendremos que incluir las relaciones que queramos traer.

```
movie.findAll({ include: 'genre' })
```

Para acceder a estos datos lo haremos de la siguiente manera

`movie.genre.name`

### 1 a muchos 1:N

```
    actor.belongsToMany(models.movie, {
      through: 'actor_movie',
      timestamps: false
    });

```

```
    movies.belongsToMany(models.actor, {
      through: 'actor_movie',
      timestamps: false
    });
```

También podemos especificar **alias**, **tabla intermedia**, **foreignKey**, **otherKey**, etc

```
actor.belongsToMany(models.movie, {
    as: 'actors',
    through: 'actor_movies',
    foreignKey: 'movie_id'
    otherKey: 'actor_id'
    timestamps: false
});
```

### Links útiles

Para la clase que viene

https://sequelize.org/master/manual/eager-loading.html

https://stackoverflow.com/questions/20460270/how-to-make-join-queries-using-sequelize-on-node-js