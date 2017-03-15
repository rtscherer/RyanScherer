angular.module('spotifyCtrl', [])
    .controller('SpotifyController', function($scope, $http) {

      $scope.tagline = 'To the moon and back!';

      $http.get('/spotify/playlist')
          .then(function(response) {
                $scope.playlist = response;
          })
          .catch(function(response) {
                console.log('Error: ' + response);
          });
});
