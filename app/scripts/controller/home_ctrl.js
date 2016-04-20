define([
  'leaflet',
  'angular-leaflet-directive',
  function (leaflet) {
    return [
      '$scope',
      'leafletData'
      //'services/topics',
      //'services/photos',
      //'services/events',
      function ($scope, leafletData) {

        $scope.message = 'OurPangea';
        $scope.loadTopics = function () {
        };
        $scope.loadPhotos = function () {
        };
        $scope.loadEvents = function () {
        };

        $scope.WebPage = {
          'page--home': true
        };

        angular.extend($scope, {
          center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
          }
        });

      }

      leafletData.getMap().then(function(map) {
          /*new L.Marker([0,0]).addTo(map);*/
      });

    ];
  }
]);
