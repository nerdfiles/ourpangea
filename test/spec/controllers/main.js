'use strict';

describe('Controller: HomeCtrl', function () {

  beforeEach(module('ourpangea'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of streams to the scope', function () {
    expect(scope.streams.length).toBe(3);
  });
});
