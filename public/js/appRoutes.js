angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/spotify', {
            templateUrl: 'views/spotify.html',
            controller: 'SpotifyController'
        });

    $locationProvider.html5Mode(true);

}]);
