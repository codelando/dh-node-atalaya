window.addEventListener('load', function() {
    
    let errors = {};

    // Capturamos los elementos
    let form = document.getElementById('groupCreateForm');
    let name = document.getElementById('name');

    let validateName = function() {
        let feedback = '';
        
        // Name es obligatorio y tiene que tener
        if (validator.isEmpty(name.value, { ignore_whitespace:true })) {
            feedback = 'El nombre no puede estar vacío';
        } else if (!validator.isLength(name.value, { min: 5 })) {
            feedback = 'El nombre debe tener al menos 5 caracteres';
        }
        
        let feedbackElement = name.parentElement.nextElementSibling;

        if (feedback) {
            name.classList.add('is-danger');
            feedbackElement.classList.add('is-danger');
            errors.name = feedback;
        } else {
            name.classList.remove('is-danger');
            feedbackElement.classList.remove('is-danger');
            delete errors.name;
        }
        
        name.parentElement.nextElementSibling.innerText = feedback;
    };

    name.addEventListener('blur', validateName);

    form.addEventListener('submit', function (event) {

        validateName();

        // Si hay errores no enviamos el formulario
        // https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
        if (Object.keys(errors).length) {
            event.preventDefault();
        }
    });
});