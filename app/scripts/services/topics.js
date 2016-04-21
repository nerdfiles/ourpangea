define(['interface'], function (__interface__) {

  function topicsService ($http) {
    var serviceInterface = {};
    serviceInterface.getTopics = function () {
    };
    serviceInterface.addTopics = function () {
    };
    serviceInterface.updateTopics = function () {
    };
    serviceInterface.removeTopics = function () {
    };

    return serviceInterface;
  }

  __interface__.service('topics', [
    '$http',
    topicsService
  ]);
});

