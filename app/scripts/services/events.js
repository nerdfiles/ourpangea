define(['interface'], function (__interface__) {

  function eventsService ($http) {

    var serviceInterface = {};

    serviceInterface.getEvents = function () {
      /// @description
    };
    serviceInterface.addEvents = function () {

      /// @description
    };
    serviceInterface.updateEvents = function () {
      /// @description
    };
    serviceInterface.removeEvents = function () {
      /// @description
    };

    return serviceInterface;

  }

  __interface__.service('events', [
    '$http',
    eventsService
  ]);
});
