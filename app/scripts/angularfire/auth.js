define(['interface'], function (__interface__) {

  __interface__

    .factory('Auth', function($firebaseAuth, Ref) {
      return $firebaseAuth(Ref);
    });

});
