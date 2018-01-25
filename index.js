const axios = require('axios');

function getOauthToken(url, username, password) {
    return axios.post(`${url}/rest/v11/oauth2/token`, {
        username,
        password,
        grant_type: 'password',
        client_id: 'sugar',
        client_secret: '',
    });
}

exports.getOauthToken = getOauthToken;
