#!/usr/bin/env node

const oauth = require('./index.js');

const url = process.argv[2];
const user = process.argv[3];
const password = process.argv[4];

(async function() {
    const result = await oauth.getOauthToken(url, user, password);
    console.log(result.data.access_token);
})();
