// https://api.giphy.com/v1/gifs/search?api_key=ZgCbiyCOX6HxbEcddDBtSVLZ7gFLq92p&q=developer&limit=25&offset=0&rating=g&lang=en


window.addEventListener('load', function() {
    function apiCall(url, callback) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(callback)
            .catch(error => {
                console.log(error);
            })
    }

    let title = document.querySelector('h1');
    let img = document.querySelector('img');

    apiCall('https://api.giphy.com/v1/gifs/random?api_key=ZgCbiyCOX6HxbEcddDBtSVLZ7gFLq92p&tag=&rating=g', (data) => {
        let gif = data.data;

        if (gif.title) {
            title.innerText = gif.title;
        } else {
            title.innerText = 'El GIF no tiene título';
        }

        img.src = gif.images.original.url;
    });

});

let gifContainer = document.getElementById('gifContainer');
gifContainer.innerHTML += `
    <article>
        <h3>${gif.title}</h3>
        <img src="${gif.images.original.url}" alt="${gif.title}">
    </article>
`;