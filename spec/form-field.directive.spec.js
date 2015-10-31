'use strict';

describe('directive: form-field directive', () => {
  var scope, $compile, $rootScope;

  beforeEach(module('form.field'));

  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = $rootScope.$new();
    scope.field = 'test Field Name';

  }));

  describe('html', () => {
    it('the element is a form', () => {
      var element = getCompiled();
      var inner = element.scope();
      inner.field.should.equal('test Field Name');
    });
  });


  function getCompiled() {
    var html = '<form form-field="{{::field}}">/form>';
    var el = $compile(html)(scope);
    scope.$digest();
    return el;
  }
});
