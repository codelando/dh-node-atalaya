# Promesas

```
promesa()
    .then(resutado => {
        // El valor retornado pasa a la siguiente promesa
        return ...
    })
    .then(otroResutado => {
        
    })
    .catch(error => {

    })
```

// ¿readFile?

# Sequelize

Object Relational Mapper --> transforma la información de los pedidos a objetos

## Instalación

`npm i sequelize mysql2` --> Paquetes de Sequelize y soporte para Mysql
`npm i sequelize-cli -g` --> Herramientas de consola para Sequelize

### .sequelizerc

// Es el archivo que le dirá al comando `sequelize init` dónde queremos los archivos que genera

```
const path = require('path')

module.exports = {
  'config': path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'migrations-path': path.resolve('./database/migrations'),
  'seeders-path': path.resolve('./database/seeders')
}
```

// Ahora si, ejecutar el comando para inicializar Sequelize

`sequelize init`

### database/config/config.js

// Aquí será necesario que le agregemos `module.exports = ` al comienzo del archivo.

Luego deberemos configurar nuestros datos de acceso a la base.


## Creación de modelos

Los modelos pueden crearse utilizando Sequelize CLI

`sequelize model:generate --name movie --attributes title:string,rating:decimal,awards:integer`

Se pueden general data a través de [Mokaroo](https://www.mockaroo.com/)

## Consultas

### findAll()

```    
model.findAll()
    .then(results => {
        // Atajamos si no hay resultados
        if (results) {
            // Hay resultados
        } else {
            // No hay resultados
        }
    })
    .catch(error => {

    });
```
    
```
movie.findAll({
    where: { title: req.query.q }
})
```

¿Por qué piensan que necesitamos ésto?

https://sequelize.org/master/manual/model-querying-basics.html#operators
    
```
const { Op } = require("sequelize");

movie.findAll({
    where: { title: { [Op.like] : `%${req.query.q}%` } }
})
```

```
movie.findAll({
    attributes: ['foo', 'bar'],
    where: { title: { [Op.like] : `%${req.query.q}%` } },
    group: [ 'field' ]
    order: [ 'title' ],
    offset: 5, 
    limit: 5
})
```

### findOne()

Igual a findAll(), solo que trae un resultado

### findByPk()

Como su nombre lo indica busca por primary key (id)

### count()

Cuenta los resultados sin traer el detalle.

O mejor aún... findAndCountAll()

https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAndCountAll

### Links útiles

**Seleccionando campos específicos**

https://sequelize.org/master/manual/model-querying-basics.html#specifying-attributes-for-select-queries

**Ordenando**

https://sequelize.org/master/manual/model-querying-basics.html#ordering

**Paginando**

https://sequelize.org/master/manual/model-querying-basics.html#limits-and-pagination

