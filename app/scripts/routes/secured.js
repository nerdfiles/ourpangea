/***
 * @ngdoc overview
 * @name ourpangea:routes.secured
 * @description
 */
define([], function () {

  return function (__interface__) {

    // @import env
    __interface__.constant('SECURED_ROUTES', {})
    __interface__.constant('FBURL', 'https://ourpangea.firebaseio.com')
    __interface__.constant('SIMPLE_LOGIN_PROVIDERS', ['facebook'])
    __interface__.constant('loginRedirectPath', '/login')

  };
});
