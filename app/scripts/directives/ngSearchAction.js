/**
 * @ngdoc function
 * @name ourpangea.directive.ngSearchAction
 * @description
 * Search Action directive.
 */

define(['interface'], function (__interface__) {

  function ngSearchAction ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, el) {
        el.addClass('ng-ready');
      }
    };
  }

  __interface__

    .directive('ngSearchAction', [
      '$timeout',
      ngSearchAction
    ]);

});
