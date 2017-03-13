module.exports = {
    mongoose: function() {
        return require('mongoose');
    },

    app: function() {
        var express = require('express');
        var app = express();
        var bodyParser = require('body-parser');
        var spotify = require('../services/spotify/authorization');
        /* const exphbs = require('express-handlebars')

        app.engine('.hbs', exphbs({
          defaultLayout: 'main',
          extname: '.hbs',
          layoutsDir: path.join(__dirname, 'views/layouts')
        }))
        app.set('view engine', '.hbs')
        app.set('views', path.join(__dirname, 'views')) */

        // configure bodyParser for POST
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        spotify.authorize();

        var playlistRouter = require('../services/spotify/playlists/routes');

        app.use('/spotify', playlistRouter);

        playlistRouter.use(function(req, res, next) {
            console.log('LOG: A request was made to the playlist router');
            next();
        });

        // set the static files location
        app.use(express.static('./public'));

        app.get('/', function(req, res) {
            res.sendfile('./public/views/index.html');
        });

        app.get('/angular', function(req, res) {
            res.sendfile('./public/views/angular.html');
        });

        app.get('/spotify', function(req, res) {
            res.sendfile('./public/views/spotify.html');
        });

        return app;
    }
};
