/**
 * @ngdoc function
 * @name ourpangea.controller:HomeCtrl
 * @description
 * Landing page.
 */

define([
  'directives/SearchAction',
  function () {

    function HomeCtrl ($scope, leafletData) {

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

      leafletData.getMap().then(function(map) {
        /*new L.Marker([0,0]).addTo(map);*/
      });

      $scope.login = function () {

      };
    }

    return [
      '$scope',
      'leafletData'
      //'services/topics',
      //'services/photos',
      //'services/events'
      HomeCtrl
    ];
  }
]);
