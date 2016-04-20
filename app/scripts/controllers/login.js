/**
 * @ngdoc function
 * @name ourpangea.controller:LoginCtrl
 * @description
 * Login to see privileged account and features.
 */

define([], function () {

  function LoginCtrl ($scope, Auth, $location) {

    $scope.oauthLogin = function(provider) {
      $scope.err = null;
      Auth.$authWithOAuthPopup(provider, {rememberMe: true}).then(redirect, showError);
    };

    $scope.anonymousLogin = function() {
      $scope.err = null;
      Auth.$authAnonymously({rememberMe: true}).then(
        redirect,
        showError
      );
    };

    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }


  }

  return [
    '$scope',
    'Auth',
    '$location',
    LoginCtrl
  ];

});
