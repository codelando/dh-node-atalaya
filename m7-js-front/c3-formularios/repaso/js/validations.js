window.addEventListener('load', function() {
    
    let errors = {};

    // Capturamos los elementos
    let form = document.getElementById('groupCreateForm');
    let name = document.getElementById('name');
    let categoryId = document.getElementById('categoryId');
    let description = document.getElementById('description');

    let validateName = function() {
        let feedback = '';
        
        // Name es obligatorio y tiene que tener
        if (validator.isEmpty(name.value, { ignore_whitespace:true })) {
            feedback = 'El nombre no puede estar vacío';
        } else if (!validator.isLength(name.value, { min: 5 })) {
            feedback = 'El nombre debe tener al menos 5 caracteres';
        }

        handleFeedback(name, feedback);
    };

    let validateCategoryId = function() {
        let feedback = '';
        
        // Name es obligatorio y tiene que tener
        if (validator.isEmpty(categoryId.value, { ignore_whitespace:true })) {
            feedback = 'Debe elegir una categoría';
        }

        handleFeedback(categoryId, feedback);
    };

    let validateDescription = function() {
        let feedback = '';
        
        // Name es obligatorio y tiene que tener
        if (validator.isEmpty(description.value, { ignore_whitespace:true })) {
            feedback = 'Debes escribir una descripcion';
        } else if (!validator.isLength(name.value, { min: 50 })) {
            feedback = 'La descipción debe tener al menos 50 caracteres';
        }

        handleFeedback(description, feedback);
    };

    let handleFeedback = function (element, feedback) {
        let feedbackElement = element.parentElement.nextElementSibling;

        if (feedback) {
            element.classList.add('is-danger');
            feedbackElement.classList.add('is-danger');
            errors[element.name] = feedback;
        } else {
            element.classList.remove('is-danger');
            feedbackElement.classList.remove('is-danger');
            delete errors[element.name];
        }
        
        feedbackElement.innerText = feedback;
    }

    name.addEventListener('blur', validateName);
    categoryId.addEventListener('blur', validateCategoryId);
    description.addEventListener('blur', validateDescription);

    form.addEventListener('submit', function (event) {

        validateName();
        validateCategoryId();
        validateDescription();

        // Si hay errores no enviamos el formulario
        // https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
        if (Object.keys(errors).length) {
            event.preventDefault();
        }
    });
});