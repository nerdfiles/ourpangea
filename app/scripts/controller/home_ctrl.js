define([
  'leaflet',
  'angular-leaflet-directive',
  function () {
    return [
      '$scope',
      //'services/topics',
      //'services/photos',
      //'services/events',
      function ($scope) {
        $scope.message = 'OurPangea';
        $scope.loadTopics = function () {
        };
        $scope.loadPhotos = function () {
        };
        $scope.loadEvents = function () {

        };
        angular.extend($scope, {
          center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
          }
        });

      }
    ];
  }
]);
