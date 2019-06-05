const request = require('request')


function composeAuth(clientId, secret) {
  const client_id = `{${clientId}}`;
  const client_secret = `{${secret}}`;
  return new Buffer(client_id + ":" + client_secret).toString('base64');
}



function getAccessToken(clientId, secret, onResponse) {
  request({
    method: 'POST',
    url: 'https://oauth.brightcove.com/v4/access_token',
    headers: {
      'Authorization': 'Basic ' + composeAuth(clientId, secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  }, onResponse);
}

module.exports = getAccessToken;