var exceptions = require('./exceptions');
var packages = require('./packages');
var config = require('../config');

// connect to database
module.exports = {
    connect: function() {
        try {
            packages.mongoose().connect(config.connectionString);
            console.log('LOG: connected to database.');
        }
        catch (err) {
            return exceptions.DatabaseConnectionException(err);
        }
    }
};