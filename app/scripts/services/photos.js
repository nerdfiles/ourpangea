define(['interface'], function (__interface__) {
  __interface__.service('photos', [
    '$http',
    function photosService ($http) {
      var serviceInterface = {};
      serviceInterface.getPhotos = function () {
      };
      serviceInterface.addPhotos = function () {
      };
      serviceInterface.updatePhotos = function () {
      };
      serviceInterface.removePhotos = function () {
      };


      return serviceInterface;
    }
  ]);
});

