var app = require('./packages').app();
var port = require('./properties').port();
var config = require('../config');
var request = require('request');

module.exports = {
    authorize: function() {
      var basicAuth = 'Basic ' + new Buffer(config.services.spotify.client_id + ":" + config.services.spotify.client_secret).toString('base64');

      var options = { method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        headers:
         { authorization: basicAuth,
           'content-type': 'application/x-www-form-urlencoded' },
        form: { grant_type: 'client_credentials' } };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        return body;
        console.log(body);
      });
    }
};
