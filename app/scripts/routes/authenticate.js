/**
 * @ngdoc overview
 * @name ourpangea:routes.authenticate
 * @description
 * Configuration of authenticated route business logic.
 */

define([], function () {
  return function($routeProvider, SECURED_ROUTES) {
    $routeProvider.whenAuthenticated = function(path, route) {
      route.resolve = route.resolve || {};
      route.resolve.user = ['Auth', function(Auth) {
        return Auth.$requireAuth();
      }];
      $routeProvider.when(path, route);
      SECURED_ROUTES[path] = true;
      return $routeProvider;
    };
  };
});
