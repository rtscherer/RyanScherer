var config = require('../../../config');
var base = require('../base')();
var rp = require('request-promise');

var controller = function() {
    var get = function(req, res) {

      var options = base.getRequest(config.services.spotify.basePaths.getPlaylist);

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
