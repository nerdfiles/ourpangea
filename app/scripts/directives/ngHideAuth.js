/**
 * @ngdoc function
 * @name ourpangea.directive:ngHideAuth
 * Authentication directive.
 * @usage
 *   <div ng-hide-auth></div>
 */

define(['angularAMD'], function (angularAMD) {

  angularAMD

    .directive('ngHideAuth', ['Auth', '$timeout', function (Auth, $timeout) {

      return {
        restrict: 'A',
        link: function(scope, el) {
          el.addClass('ng-cloak');

          function update() {
            $timeout(function () {
              el.toggleClass('ng-cloak', !!Auth.$getAuth());
            }, 0);
          }

          Auth.$onAuth(update);
          update();
        }
      };
    }]);

});
