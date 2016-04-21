define(['interface'], function (__interface__) {

  __interface__.service('topics', [
    '$http',
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
  ]);
});

