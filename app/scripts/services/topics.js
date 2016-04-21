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

    /**
     * @function operator
     * @usage
     *   topic.operator('delete')('topic')('$$id')
     * @description
     */
    serviceInterface.operator = function (method) {
      var sep = '-';
      return function (type) {
        return function (name) {
          return method + sep + type + sep + name;
        };
      };
    };
    return serviceInterface;
  }

  __interface__.service('topics', [
    '$http',
    topicsService
  ]);
});

