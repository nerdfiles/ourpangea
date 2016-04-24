/**
 * @ngdoc function
 * @name ourpangea.controller:ChatCtrl
 * @description
 * Some chat module for chatters in the map.
 */

define([], function () {

  function ChatCtrl ($scope, Ref, $firebaseArray, $timeout) {
    $scope.messages = $firebaseArray(Ref.child('messages').limitToLast(10));
    $scope.messages.$loaded().catch(alert);
    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        $scope.messages.$add({text: newMessage})
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 0);
    }
  }

  return [
    '$scope',
    'Ref',
    '$firebaseArray',
    '$timeout'
  ];

});
