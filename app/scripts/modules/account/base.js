/**
 * @ngdoc function
 * @name ourpangea.controller:AccountCtrl
 * @description
 * Account profile metadata.
 */

define([], function () {

  function AccountCtrl ($scope, user, Auth, Ref, $firebaseObject, $timeout) {
    $scope.user = user;
    $scope.logout = function() { Auth.$unauth(); };
    $scope.messages = [];
    var profile = $firebaseObject(Ref.child('users/'+user.uid));
    profile.$bindTo($scope, 'profile');
  }

  return [
    '$scope',
    'user',
    'Auth',
    'Ref',
    '$firebaseObject',
    '$timeout'
  ];

});
