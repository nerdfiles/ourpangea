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
  "angular-route",
  "angular-animate",
  "angular-cookies",
  "angular-resource",
  "angular-sanitize",
  "angular-touch",
  "angular-leaflet-directive",
  "leaflet",
  "directives/ngHideAuth",
  "directives/ngShowAuth",
  "directives/ngSearchAction"
], function (angularAMD, setup, authenticate, initialize) {

  var __interface__ = angular.module("ourPangea", [
    "ngRoute",
    "ngAnimate",
    'ngAria',
    "ngCookies",
    'ngMessages',
    "ngResource",
    "ngSanitize",
    "ngTouch",
    "leaflet-directive",
    'firebase',
    'firebase.ref',
    'firebase.auth'
  ]);

  __interface__.config([
    '$routeProvider',
    '$locationProvider',
    setup
  ])

  .config([
    '$routeProvider',
    'SECURED_ROUTES',
    authenticate
  ])

  .run([
    '$rootScope',
    '$location',
    'Auth',
    'SECURED_ROUTES',
    'loginRedirectPath',
    initialize
  ])

  // @TODO
  // auth
  // config
  // firebase.ref

  return angularAMD.bootstrap(__interface__);

});
