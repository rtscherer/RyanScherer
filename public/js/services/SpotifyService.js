// public/js/services/NerdService.js
angular.module('SpotifyService', []).factory('Spotify', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/spotify/playlist');
        }
    }

}]);
