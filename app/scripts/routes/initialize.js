/**
 * @ngdoc function
 * @name ourpangea.run
 * @description
 * Init.
 */
define([], function () {
  return function($rootScope, $location, Auth, SECURED_ROUTES, loginRedirectPath, $window) {

    angular.extend($rootScope, {
      center: {
        lat: 51.505,
        lng: -0.09,
        zoom: 8
      }
    });

    $rootScope.worldViewConstruct = {
      //generatedHeight : $window.innerHeight,
      generatedWidth  : $window.innerWidth - ($window.innerWidth * .2)
    };

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
  };
});
