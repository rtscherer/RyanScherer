// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/spotify', {
            templateUrl: 'views/spotify.html',
            controller: 'SpotifyController'
        });

    $locationProvider.html5Mode(true);

}]);
