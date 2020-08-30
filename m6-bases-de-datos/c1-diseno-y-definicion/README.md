# Bases de datos

- Puertos 
    - Por defecto: 3306
    - MAMP: 8888

## Estructura

- Base de datos
- Tablas
- Columas
- Registros

## Relaciones

| Código | Nombre | Claves | Flecha |
| --- | --- | --- | --- |
| 1:1 | 1 a 1 | PK FK | -\|-----\|- |
| 1:N | 1 a Muchos | PK FK | -\|-----<- | 
| N:M | Muchos a Muchos | Tabla de corte | ->-----<- |

## Diagramas

| nombre_tabla |
| --- |
| **id(PK)** |
| campo_1 |
| campo_2 |
| *otra_tabla_id(FK)* |

| otra_tabla |
| --- |
| **id(PK)** |
| campo_1 |
| campo_2 |

## Tipos de datos

- Numérico
    - Entero
    - Decimal
    - Booleano  

- Texto
    - Char
    - Varchar
    - Text

- Fechas
    - Date
    - Time
    - Datetime

- Restricciones / Constraint
    - Not Null
    - Unique
    - Default
    - Autoincrement

## ABM de tablas

CREATE TABLE tbl_name;

ALTER TABLE tbl_name

DROP TABLE tbl_name;