module.exports = {
    mongoose: function() {
        return require('mongoose');
    },

    app: function() {
        var express = require('express');
        var app = express();
        var bodyParser = require('body-parser');

        // configure bodyParser for POST
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        // set the static files location
        app.use(express.static('./public'));

        app.get('/', function(req, res) {
            res.sendfile('./public/views/index.html');
        });

        return app;
    }
};
