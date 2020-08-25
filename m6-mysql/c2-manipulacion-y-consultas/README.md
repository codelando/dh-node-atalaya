## Insert, Update, Delete

Podemos especificar los campos que vamos a insertar, el resto tomarán el valor por defecto o NULL

`INSERT INTO actors (first_name, last_name, rating) VALUES ('Uno', 'Más', 5.6);`

Si no especificamos, tenemos que insertar un valor para todos los campos. En el caso de ID podemos pasar NULL

`INSERT INTO actors VALUES (NULL, DEFAULT, DEFAULT, 'Uno', 'Más', 5.6, DEFAULT);`

`UPDATE actors SET first_name = 'Jane' WHERE id = 2;`

`DELETE FROM actor_episode WHERE id > 145;`

## Select

`SELECT first_name, last_name, rating FROM actors;`

## Where y order by

`SELECT first_name, last_name, rating FROM actors WHERE first_name = 'Leonardo';`

`SELECT rating, last_name, first_name  FROM actors WHERE rating BETWEEN 5.9 AND 8 ORDER BY rating DESC, last_name;`

## Between y like


`SELECT first_name, last_name, rating FROM actors WHERE rating BETWEEN 5.1 AND 8.9;`

`SELECT first_name, last_name, rating FROM actors WHERE first_name BETWEEN 'R' AND 'T';`

`SELECT first_name, last_name, rating FROM actors WHERE first_name LIKE 'L%';`

## Limit y offset

Normalmente lo usamos para paginado o bien para limitar la cantidad de resultados que vamos a traernos.

`SELECT rating, last_name, first_name  FROM actors LIMIT 10;`

`SELECT rating, last_name, first_name  FROM actors WHERE rating BETWEEN 5.9 AND 8 ORDER BY rating DESC, last_name LIMIT 5 OFFSET 10;`

## Alias

Nos sirven en el caso de que necesitemos cambiar los nombres de los campos a la hora de recibir los resultados.

También en el caso de que creemos un campo a partir funciones, como CONCAT().

```
SELECT 
	rating, 
    CONCAT(first_name, ' ', last_name) AS nombre_completo, 
    favorite_movie_id AS pelicula_favorita
FROM 
	actors 
WHERE 
	rating BETWEEN 5.9 AND 8
    AND favorite_movie_id IS NOT NULL
ORDER BY 
	rating DESC, 
    last_name 
LIMIT 5 
OFFSET 0;
```

## El orden

Las partes de las consultas de SQL se realizan en un orden determinado, no podemos cambiarlo

```
SELECT 
	...
FROM 
	... 
WHERE 
	...
ORDER BY 
	... 
LIMIT ... 
OFFSET ...;
```