var config = require('../../config')
var rp = require('request-promise');

module.exports = {
    getPlaylist: function(auth) {
      var path = '/v1/users/1210289775/playlists/13tDISxbBEpDjsIaN0k779';

      var options = {
        method: 'GET',
        url: 'https://' + config.services.spotify.baseUri + path,
        headers:
         { authorization: auth.token_type + " " + auth.access_token,
           accept: 'application/json' } };

      return rp(options);
    }
};
