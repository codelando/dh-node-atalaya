// Pisamos el método onload del objeto window -- mala práctica
// window.onload = function() {
//     let heading = document.querySelector('h1');
//     heading.style.color = 'tomato';
// }

// Agregamos un "escuchador" de eventos
window.addEventListener('load', function() {
    let heading = document.querySelector('h1');
    heading.style.color = 'tomato';

    // Ejemplo 1
    let buttonE1 = document.getElementById('button-e1');
    let titleE1 = document.getElementById('title-e1');
    let titleE1OriginalText = titleE1.innerText;
    
    buttonE1.addEventListener('mouseover', function() {
        titleE1.innerText = "Otro título";
        console.log('mouseover');
    });

    buttonE1.addEventListener('mouseout', function() {
        titleE1.innerText = titleE1OriginalText;
        console.log('mouseout');
    });

    // Ejemplo 2
    let buttonE2 = document.getElementById('button-e2');

    let actionE2 = function (event) {
        // Incrementar el contador (input)
        // Actualizar el título del boton
        let inputE2 = document.getElementById('input-e2');
        inputE2.value = Number(inputE2.value) + 1;

        // this hace referencia al elemento que tiene el evento encima
        this.innerText = 'Items (' + inputE2.value + ')';
    }

    // let otherActionE2 = function (event) {
    //     console.log('Otra cosa');
    // }

    buttonE2.addEventListener('click', actionE2);
    // buttonE2.addEventListener('click', otherActionE2);

    let otherButtonE2 = document.getElementById('other-button-e2');
    otherButtonE2.addEventListener('click', function() {
        buttonE2.removeEventListener('click', actionE2);
    });
    


    // Ejemplo 3
    let buttonE3 = document.getElementById('button-e3');

    buttonE3.addEventListener('click', function() {
        setTimeout(() => {
            document.getElementById(this.dataset.target).style.color = this.dataset.color;
        }, this.dataset.miliseconds)
    });
});