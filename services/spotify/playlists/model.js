var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spotifyPlaylist = new Schema({
  name: String,
  externalUrls: Object,
  images: Array,
  tracks: Object
});

var SpotifyPlaylist = mongoose.model('SpotifyPlaylist', spotifyPlaylist);

// make this available to our users in our Node applications
module.exports = SpotifyPlaylist;
