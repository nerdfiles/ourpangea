define(['interface'], function (__interface__) {
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

  __interface__.service('photos', [
    '$http',
    photosService
  ]);
});

