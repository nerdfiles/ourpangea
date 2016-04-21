/**
 * @ngdoc overview
 * @name ourpangea:routes
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
        templateUrl: 'views/home.html',
        controllerUrl: 'controller/home'
      })

      .when('/chat', {
        templateUrl: 'views/chat.html',
        controllerUrl: 'controller/chat'
      })

      .when('/login', {
        templateUrl: 'views/login.html',
        controllerUrl: 'controller/login'
      })

      .whenAuthenticated('/account', {
        templateUrl: 'views/account.html',
        controllerUrl: 'controller/account'
      })

      .otherwise({redirectTo: '/'});

  };

});
