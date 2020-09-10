console.log('Log desde script linkeado');

let mark = document.querySelector('main p mark.important');

mark.style.fontSize = "1.5rem";
mark.style.textDecoration = "underline";

let navLinks = document.querySelectorAll('header nav a');

/*
for (let link of navLinks) {
    if (link.innerText == 'Home') {
        link.style.color = "#333";
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";
    }
}
*/

for (let link of navLinks) {
    if (link.innerText == 'About') {
        link.classList.add('active');
    }
}