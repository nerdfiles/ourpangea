define(['interface'], function (__interface__) {
  function searchService ($http) {
    var serviceInterface = {};
    return serviceInterface;
  }

  __interface__.service('search', [
    '$http',
    searchService
  ]);
});
