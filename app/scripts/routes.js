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
define(['interface'], function (__interface__) {

  __interface__

  .config(['$routeProvider', 'SECURED_ROUTES', function($routeProvider, SECURED_ROUTES) {
    $routeProvider.whenAuthenticated = function(path, route) {
      route.resolve = route.resolve || {};
      route.resolve.user = ['Auth', function(Auth) {
        return Auth.$requireAuth();
      }];
      $routeProvider.when(path, route);
      SECURED_ROUTES[path] = true;
      return $routeProvider;
    };
  }])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

      .when('/home', {
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

      .otherwise({redirectTo: '/home'});

  }])

  .run(['$rootScope', '$location', 'Auth', 'SECURED_ROUTES', 'loginRedirectPath',
    function($rootScope, $location, Auth, SECURED_ROUTES, loginRedirectPath) {
      Auth.$onAuth(check);

      $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
        if( err === 'AUTH_REQUIRED' ) {
          $location.path(loginRedirectPath);
        }
      });

      function check(user) {
        if( !user && authRequired($location.path()) ) {
          $location.path(loginRedirectPath);
        }
      }

      function authRequired(path) {
        return SECURED_ROUTES.hasOwnProperty(path);
      }
    }
  ])

  .constant('SECURED_ROUTES', {});

});
