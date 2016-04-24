/**
 * @ngdoc overview
 * @name ourpangea:routes.setup
 * @description
 * @usage
 *   resolve: {
 *     user: ['Auth', function(Auth) {
 *       return Auth.$getAuth();
 *     }]
 *   }
 */
define([], function () {

  return function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

      .when('/', {
        templateUrl   : 'scripts/modules/home/base.html',
        controllerUrl : 'modules/home/base'
      })

      .when('/chat', {
        templateUrl   : 'scripts/modules/chat/base.html',
        controllerUrl : 'modules/chat/base'
      })

      .when('/login', {
        templateUrl   : 'scripts/modules/login/base.html',
        controllerUrl : 'modules/chat/base'
      })

      .whenAuthenticated('/account', {
        templateUrl   : 'scripts/modules/account/base.html',
        controllerUrl : 'modules/account/base'
      })

      .otherwise({
        redirectTo: '/'
      });

  };

});
