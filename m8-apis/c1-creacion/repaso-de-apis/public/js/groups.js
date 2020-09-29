window.addEventListener('load', () => {
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

    apiCall('http://localhost:3000/api/groups', (response) => {
        let groupsContainer = document.getElementById('groups-container');

        response.data.forEach(group => {
            groupsContainer.innerHTML += `
                <article class="card">
                    <div class="card-left">
                        <figure><img src="/img/groups/${ group.image ? group.image : 'default.png' }" alt=""></figure>
                        <h3>#${ group.id }</h3>
                    </div>
                    <div class="card-content">
                        <h3>${ group.name }</h3>
                        ${ group.category ? `<p>Categoría: ${ group.category.name }</p>` : '' }
                        <p><a href="${ group.repository }" target="_blank">Repositorio</a></p>
                        <div>
                            <a class="button" href="/groups/${ group.id }">Ver detalle</a>
                            <a class="button" href="/groups/${ group.id }/edit">Editar</a>
                            <form class="form is-inline" action="/groups/${ group.id }?_method=DELETE" method="POST">
                                <button class="button is-danger" type="submit">Borrar</button>
                            </form>
                        </div>
                    </div>   
                </article>
            `;
        });
    });
})