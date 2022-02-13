window.addEventListener('load', function() {

    let modals = document.querySelectorAll('.modal');
    let modalButtons = document.querySelectorAll('.modal-button');
    let modalClose = document.querySelectorAll('.modal-close, .modal-background');
    
    for (let button of modalButtons) {
        button.addEventListener('click', function() {
            let modal = document.getElementById(button.dataset.target);
            modal.classList.add('is-active');
        });
    }

    for (let button of modalClose) {
        button.addEventListener('click', function() {
            button.closest('.modal').classList.remove('is-active');
        })
    }
});
