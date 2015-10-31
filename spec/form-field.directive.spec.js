'use strict';

describe('directive: form-field directive', () => {
  var scope, $compile, $rootScope;

  beforeEach(module('formModel'));

  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  describe('html', () => {
    it('the scope is isolated', () => {
      var element = getCompiled();
      var isolate = element.isolateScope();
      isolate.should.beDefined;
    });
  });


  function getCompiled() {
    scope.model = { name: 'example' };
    var html = '<form form-model="scope.model"></form>';
    var el = $compile(html)(scope);
    scope.$digest();
    return el;
  }
});
