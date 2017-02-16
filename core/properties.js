var config = require('../config');

module.exports = {
    port: function() {
        return process.env.PORT || config.port;
    }
};
