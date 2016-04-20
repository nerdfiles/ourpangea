define(['interface'], function (__interface__) {

  __interface__

    .factory('Ref', ['$window', 'FBURL', function($window, FBURL) {
      return new $window.Firebase(FBURL);
    }]);

});
