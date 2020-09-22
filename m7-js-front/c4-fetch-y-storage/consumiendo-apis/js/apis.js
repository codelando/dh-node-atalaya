// https://restcountries.eu/rest/v2/all
// https://apis.datos.gob.ar/georef/api/provincias
// https://apis.datos.gob.ar/georef/api/municipios?provincia=

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

    let countrySelect = document.getElementById('country');

    let provinceField = document.getElementById('provinceField');
    let provinceSelect = document.getElementById('province');

    let districtField = document.getElementById('districtField');
    let districtSelect = document.getElementById('district');

    apiCall('https://restcountries.eu/rest/v2/all', data => {
        data.forEach(country => {
            countrySelect.innerHTML += `<option value="${country.alpha3Code}">${country.name}</option>`;
        });
    });

    apiCall('https://apis.datos.gob.ar/georef/api/provincias', data => {
        data.provincias.forEach(province => {
            provinceSelect.innerHTML += `<option value="${province.nombre}">${province.nombre}</option>`;
        });
    });

    countrySelect.addEventListener('change', function() {
        if (this.value == 'ARG') {
            provinceField.style.display = "block";
        } else {
            provinceField.style.display = "none";
        }
    });

    provinceSelect.addEventListener('change', function() {
        if (this.value == '') {
            districtField.style.display = "none";
            districtSelect.innerHTML = '<option value="">Seleccione un distrito</option>';
        } else {
            districtField.style.display = "block";
            apiCall(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${this.value}`, data => {
                data.municipios.forEach(district => {
                    districtSelect.innerHTML += `<option value="${district.nombre}">${district.nombre}</option>`;
                });
            });
        }
    });
});