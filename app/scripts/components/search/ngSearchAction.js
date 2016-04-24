/**
 * @ngdoc function
 * @name ourpangea.directive.ngSearchAction
 * @description
 * Search Action directive.
 */

define(['angularAMD'], function (angularAMD) {

  function ngSearchAction ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, el) {
        el.addClass('ng-ready');
      }
    };
  }

  angularAMD

    .directive('ngSearchAction', [
      '$timeout',
      ngSearchAction
    ]);

});
