var config = require('../../config');
var rp = require('request-promise');

var base = function()
{
    var getRequest = function(route)
    {
        return {
            method: 'GET',
            url: config.services.spotify.baseUri + route,
            json: true,
            headers:
            {
                authorization: config.services.spotify.auth,
                accept: 'application/json'
            }
        };
    }

    return {
        getRequest: getRequest
    };
}

module.exports = base;
