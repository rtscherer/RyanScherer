var app = require('./packages').app();
var port = require('./properties').port();
var config = require('../config');

module.exports = {
    start: function() {
        var server = app.listen(process.env.PORT || 8080, function () {
          var port = server.address().port;
          console.log("RUNNING: App now running on port", port);
        });
    }
};
