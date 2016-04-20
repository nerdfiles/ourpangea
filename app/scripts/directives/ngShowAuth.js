/**
 * @ngdoc function
 * @name ourpangeaApp.directive:ngShowAuth
 * @description
 * The converse of the ng-hide-auth.
 */

define(['angularAMD'], function (angularAMD) {

  angularAMD

    .directive('ngShowAuth', ['Auth', '$timeout', function (Auth, $timeout) {

      return {
        restrict: 'A',
        link: function(scope, el) {
          el.addClass('ng-cloak');

          function update() {
            $timeout(function () {
              el.toggleClass('ng-cloak', !Auth.$getAuth());
            }, 0);
          }

          Auth.$onAuth(update);
          update();
        }
      };
    }]);

});
