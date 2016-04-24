/**
 * @ngdoc function
 * @name ourpangea.interface
 * @description
 * Basic interface for OurPangea.
 */

define([
  "angularAMD",
  "routes/setup",
  "routes/authenticate",
  "routes/initialize",
  "routes/secured",
  "angular-route",
  "angular-animate",
  "angular-cookies",
  "angular-resource",
  "angular-aria",
  "angular-messages",
  "angular-sanitize",
  "angular-touch",
  "angular-material",
  "angular-leaflet-directive",
  "leaflet",
  "directives/ngHideAuth",
  "directives/ngShowAuth",
  "directives/ngSearchAction",
  "angularfire",
  "segment"
], function (angularAMD, setup, authenticate, initialize, secured) {

  var __interface__ = angular.module("ourPangea", [
    "firebase",
    "ngRoute",
    "ngAnimate",
    'ngAria',
    "ngCookies",
    'ngMessages',
    "ngResource",
    "ngSanitize",
    "ngTouch",
    "ngMaterial",
    "leaflet-directive",
    "ngSegment"
  ]);

  secured(__interface__);

  __interface__

    .factory('Ref', ['$window', 'FBURL', function($window, FBURL) {
      return new $window.Firebase(FBURL);
    }])
    .factory('Auth', function ($firebaseAuth, Ref) {
      return $firebaseAuth(Ref);
    })

    .config([
      '$routeProvider',
      'SECURED_ROUTES',
      authenticate
    ])

    .config(['segmentProvider', 'GlobalEvents', function (segmentProvider, GlobalEvents) {
      segmentProvider.setDebug(true).setEvents(GlobalEvents);
      segmentProvider.track('test');
    }])

    .constant('GlobalEvents', {
        TEST_EVENT: 'Test Event'
    })

    .constant('segmentConfig', {
        debug  : true,
        apiKey : 'b0OJY1kzCiWoKyHayoKZDBD1KSKkf2bq'
    })

    .config([
      '$routeProvider',
      '$locationProvider',
      setup
    ])

    .run([
      '$rootScope',
      '$location',
      'Auth',
      'SECURED_ROUTES',
      'loginRedirectPath',
      '$window',
      'segment',
      initialize
    ]);

  return angularAMD.bootstrap(__interface__);

});
