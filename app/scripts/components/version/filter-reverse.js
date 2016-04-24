/***
 * @ngdoc filter
 */

define(['interface'], function (__interface__) {

  __interface__

    .filter('reverse', function() {
      return function(items) {
        return angular.isArray(items)? items.slice().reverse() : [];
      };
    });

});
