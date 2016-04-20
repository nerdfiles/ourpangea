define(["angularAMD","angular-route","angular-animate","angular-cookies","angular-resource","angular-sanitize","angular-touch"], function (angularAMD) {
  var app = angular.module("ourpangea", ["ngRoute","ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch"]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when("/home", angularAMD.route({
        templateUrl: 'views/home.html', controllerUrl: 'controller/home_ctrl'
      }))

      // Else
      .otherwise({redirectTo: "/home"});
  }]);

  return angularAMD.bootstrap(app);

});
