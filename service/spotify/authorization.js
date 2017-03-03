var app = require('../../core/packages').app();
var port = require('../../core/properties').port();
var config = require('../../config')
var rp = require('request-promise');

module.exports = {
    authorize: function() {
      var basicAuth = 'Basic ' + new Buffer(config.services.spotify.client_id + ":" + config.services.spotify.client_secret).toString('base64');

      var options = { method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        json: true,
        headers:
         { authorization: basicAuth,
           'content-type': 'application/x-www-form-urlencoded' },
           form: { grant_type: 'client_credentials' } };

        return rp(options);
    }
};
