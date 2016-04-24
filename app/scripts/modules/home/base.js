/**
 * @ngdoc function
 * @name ourpangea.controller:HomeCtrl
 * @description
 * Landing page.
 */

define([
  'directives/SearchAction',
], function () {

  function HomeCtrl ($scope, leafletData, segment, segmentLoader) {

    segment.track('controller test');
    //segmentLoader.load(segment.config.apiKey);

    $scope.test_query = function () {
      segment.track(segment.events.TEST_EVENT, {
        search: 'query'
      });
    };

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
    'segment',
    'segmentLoader',
    HomeCtrl
  ];
});
