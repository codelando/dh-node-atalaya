// Repaso

/*
    - JSON y su utilidad
    - ¿Qué les resultó más difícil?
    - Arrays y Objetos Literales son los tipos de datos más comunes
    - Son más complejos y necesitamos aprender a manejarlos
*/

let num1 = 10;
num1 = num1 + 1;

console.log(num1);

num1 += 1;
num1 -= 1;

console.log(num1);

num1++;

console.log(num1);


// Objetos Literales

let otraTarea = {
    titulo: 'Refactorear con un forEach()',
    descripcion: 'Magic magic magic',
    estado: 'terminada',
    leerTitulo() { console.log(this.titulo)}
};

// Array de objetos literales
let tareas = [
    {
        titulo: 'Practicar el switch',
        descripcion: 'Entender para qué puedo usarlo',
        estado: 'pendiente'
    }, 
    {
        titulo: 'Practicar el for',
        descripcion: 'Entender cómo se usa',
        estado: 'en progreso'
    },
    {
        titulo: 'Objeto literal vs JSON',
        descripcion: '¿Qué tienen de diferente?',
        estado: 'terminada'
    },
    {
        titulo: 'Refactorear con un forEach()',
        descripcion: 'Magic magic magic',
        estado: 'terminada'
    }
];

// JSON

// Sin formato
// let stringTarea = JSON.stringify(otraTarea);

// Con formato
let stringTarea = JSON.stringify(otraTarea, null, " ");

otraTarea.leerTitulo();

console.log(typeof otraTarea);
console.log(typeof stringTarea);
console.log(stringTarea);

let objetoTareas = JSON.parse(stringTarea);

console.log(objetoTareas);

// Métodos de strings

// Arrow Functions

// Condicionales (If ternario, Switch)

if (num1 < 20) {
    console.log('< 20');
} else if (num1 >= 20 && num1 < 30) {
    console.log('> 20 y < 30');
} else {
    console.log('>= 30');
}

num1 < 20 ? console.log('< 20') : num1 >= 20 && num1 < 30 ? console.log('> 20 y < 30') : console.log('>= 30');

switch (num1) {
    case 20:
        console.log('El número es 20');
        break;
    case 21:
    case 22:
    case 22:    
        console.log('El número es 20');
}

// Ciclos I (For)
tareas.push({
    titulo: 'Aprender métodos de strings',
    descripcion: 'A ver qué se puede hacer',
    estado: 'terminada'
})

console.log();
for(let i = 0; i < tareas.length; i++) {
    console.log('♦ ' + tareas[i].titulo + ' → ' + tareas[i].estado);
}

// Ciclos (While, Do-While)
let num2 = 0;
while (num2 > 0) {
    console.log('num2 vale ahora:', num2);
    num2--;
}

let num = 100; 
console.log('Fuera de la funcion', num);

function contar (num) {
    console.log('dentro de la funcion', num);
}

contar(205);

// Práctica por su cuenta