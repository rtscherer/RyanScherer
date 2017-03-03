// SCHERER DEVELOPMENT
// RYAN SCHERER WEBSITE
// app.js

// connect to the dealerbid database
//var database = require('./common/database');
//database.connect();

// start the server
var server = require('./core/server');
server.start();

<<<<<<< HEAD
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
=======
//var authorization = require('./core/authorization');
//console.log(authorization.authorize());

//var playlists = require('./service/spotify/playlists');
//console.log(playlists.getPlaylist());
>>>>>>> origin/master
