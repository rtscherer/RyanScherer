angular.module('spotifyService', []).factory('Spotify', function($http) {
    return {
        get : function() {
            return $http.get('/spotify/playlist');
        }
    }
});
