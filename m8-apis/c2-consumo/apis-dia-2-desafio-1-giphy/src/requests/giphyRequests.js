// Microdesafío 3
// 1. Requerir el módulo de Axios
// 2. Armar el pedido de axios
const axios = require('axios');

module.exports = {
    api_key: 'ZgCbiyCOX6HxbEcddDBtSVLZ7gFLq92p',
    get404Gif: () => {
        return axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: this.api_key,
                q: 'not found',
                limit: 25
            }
        });
    },
    search: (query) => {
        return axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: this.api_key,
                q: query,
                limit: 25
            }
        });
    },
};