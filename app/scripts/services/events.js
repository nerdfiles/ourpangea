define(['interface'], function (__interface__) {

  __interface__.service('events', [
    '$http',
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
  ]);
});
