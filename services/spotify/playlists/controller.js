var config = require('../../../config');
var base = require('../base')();
var rp = require('request-promise');
var Playlist = require('./model');

var controller = function() {
    var get = function(req, res) {

      var options = base.getRequest(config.services.spotify.basePaths.getPlaylist);

      rp(options)
        .then((data) => {
            var playlist = new Playlist({
                  name: data.name,
                  externalUrls: data.external_urls,
                  images: data.images,
                  tracks: data.tracks
                });
            res.send(playlist);
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
