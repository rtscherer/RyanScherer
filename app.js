// SCHERER DEVELOPMENT
// RYAN SCHERER WEBSITE
// app.js

// connect to the dealerbid database
//var database = require('./common/database');
//database.connect();

// start the server
var server = require('./core/server');
server.start();

var spotify = require('./service/spotify/authorization');
var playlists = require('./service/spotify/playlists');
spotify.authorize()
  .then(function(res) {
    playlists.getPlaylist(res)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(error){
      console.log(error);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
