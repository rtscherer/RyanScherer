var app = require('../../core/packages').app();
var auth = require('../../core/authorization').authorize();
var config = require('../../config');
var request = require('request');

module.exports = {
    getPlaylist: function(auth) {
      var path = '/v1/users/1210289775/playlists/13tDISxbBEpDjsIaN0k779';
      var ryan = "";

      var options = {
        method: 'GET',
        url: 'https://' + config.services.spotify.baseUri + path,
        headers:
         { authorization: auth.token_type + auth.access_token,
           accept: 'application/json' } };

      return request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
    }
};
