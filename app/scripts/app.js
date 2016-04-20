define([
  "angularAMD",
  "angular-route",
  "angular-animate",
  "angular-cookies",
  "angular-resource",
  "angular-sanitize",
  "angular-touch",
  "angular-leaflet-directive",
  "leaflet"
], function (angularAMD) {

  var app = angular.module("ourpangea", [
    "ngRoute",
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngSanitize",
    "ngTouch",
    "leaflet-directive"
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

      .when("/home", angularAMD.route({
        templateUrl   : 'views/home.html',
        controllerUrl : 'controller/home_ctrl'
      }))

      .otherwise({redirectTo: "/home"});

  }]);

  return angularAMD.bootstrap(app);

});
