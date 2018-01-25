# get-sugar-oauth-token

Does what it says on the tin. Has both a CLI and a Node API (promise-based).

## Usage

```js
const getOauthToken = require('@rhoggSugarcrm/get-sugar-oauth-token').getOauthToken;
await getOauthToken('http://path/to/sugar/instance', 'username', 'password');
```
