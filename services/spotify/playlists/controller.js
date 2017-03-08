var config = require('../../../config');
var rp = require('request-promise');

var controller = function() {
    var get = function(req, res) {

      var options = {
        method: 'GET',
        url: config.services.spotify.baseUri + config.services.spotify.basePaths.getPlaylist,
        json: true,
        headers:
         { authorization: config.services.spotify.auth,
           accept: 'application/json' } };

      rp(options)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return {
        get: get
    };
};

module.exports = controller;
