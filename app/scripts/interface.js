define([
  "angularAMD",
  "routes".
  "angular-route",
  "angular-animate",
  "angular-cookies",
  "angular-resource",
  "angular-sanitize",
  "angular-touch",
  "angular-leaflet-directive",
  "leaflet"
], function (angularAMD, routes) {

  var app = angular.module("ourpangea", [
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

  app.config([
    '$routeProvider',
    '$locationProvider',
    routes
  ]);

  // @TODO
  // auth
  // config
  // firebase.ref

  return angularAMD.bootstrap(app);

});
