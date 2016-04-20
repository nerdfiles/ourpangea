define([
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
      }
    ];
  }
]);
