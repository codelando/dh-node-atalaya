## Table reference

Permite unir los resultados de una o más tablas, es igual al JOIN y por lo general vamos a preferir el JOIN

## Joins

### INNER JOIN (default)

Solo muestra la fila si hay resultado en ambas tablas

Es el join por default, si ponemos solo `JOIN` funciona igual

### LEFT JOIN

Muestra la fila aunque no haya datos en la tabla de la derecha

### RIGHT JOIN --> 

Muestra la fila aunque no haya datos en la tabla de la derecha

### OUTER JOIN

Muestra la fila aunque no haya datos en alguna de las dos tablas


## Distinct

Permite filtrar resultados repetidos

## Funciones de modificación de datos


- Concat
- Coalesce
- Now()
- Datediff
- Date_format
- Extract
- Replace(campo, texto, texto_nuevo)
- Length
- Case


CASE
    WHEN expresión 1 THEN resultado 1
    WHEN expresión 2 THEN resultado 2
END


## Group by

Nos permite agrupar los datos agregados

## Having

Nos permite filtrar los datos agrupados

## Funciones de agregación

- Count
- Min
- Max
- Avg
- Sum


## Ejemplo

```
select
	al.id,
	al.titulo,
    al.id_artista,
    ca.compositor,
	count(*) as nro_canciones,
    round(sum(ca.milisegundos / 1000 / 60)) as duracion_minutos,
    group_concat(ca.nombre SEPARATOR ', ') as listado_canciones
from 
	albumes al
	join canciones ca on al.id = ca.id_album
group by
	al.id
having
	nro_canciones > 10
```