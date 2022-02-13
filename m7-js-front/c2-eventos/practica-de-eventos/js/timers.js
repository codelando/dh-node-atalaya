window.addEventListener('load', function() {
    let color1 = document.getElementById('color-picker-1');
    color1.addEventListener('change', function() {
        console.log(this.value);
    })
});