# Eventos en Javascript

## Modificando el método

Los eventos están siempre asociados a algún elemento, para trabajar con ellos debemos entonces capturar un elemento.

`let elH1 = document.querySelector('h1');`

Luego tenemos dos maneras de trabajar con eventos

### Modificando el método del evento

En este caso cada asignación pisará la anterior

`elH1.onclick = () => { console.log('Click en el h1')};`

Cuando trabajamos con eventos, podemos capturarlos para obtener información adicional

`elH1.onclick = (event) => { console.log(event)};`

El evento tendrá un target u objeto que lo disparó.

`elH1.onclick = (event) => { console.log(event); e.target.style.color = 'limegreen'};`

### Agregando y quitando un "escuchador" de eventos

En este caso para poner el nombre del evento, prescindimos de la palabra on.

elH1.addEventListener('click', function() {

});

También podemos usar funciones nombradas

`let funcionClick = function() { ... }`

`elH1.addEventListener('click', funcionClick);`

Esto luego nos permite quitar el evento si lo deseamos

`elH1.removeEventListener('click', funcionClick);`


### Trabajando con el evento

Podemos evitar el comportamiento por defecto

```
elH1.addEventListener('click', function(event) {
    event.preventDefault() // Evita que el evento original ocurra
});
```

Podemos acceder al elemento que disparó el evento con `event.target`

```
elH1.addEventListener('click', function(event) {
    console.log(evento.target)
});
```

Podemos acceder al elemento asociado al evento con  `this`

```
elH1.addEventListener('click', function(event) {
    console.log(this)
});
```

## Eventos útiles

click
dblclick
mouseover
mouseout

keydown
ketup
keypress

event.key

change

## Timers

El setTimeout acepta un callback y un tiempo en milisegundos

`setTimeout(callback, 1000);`

El setInterval funciona de la misma manera, solo que se ejecutará indefinidamente

`setInterval(callback,1000);`

En caso de que queramos parar la repetición, debemos asignar el resultado a una variable

`let intervalo = setInterval(callback,1000);`

Luego utilizaremos la función `clearInterval` para paralo.

`clearInterval(intervalo)`