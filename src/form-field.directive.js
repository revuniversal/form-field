angular
  .module('form.field')
  .directive('formField', formFieldDirective);

function formFieldDirective() {
  return {
    restrict: 'A',
    template: '<span></span>',
    link: link
  };

  function link(scope, el, attrs) {
    if (attrs.formField) {
      scope.formField = attrs.formField;
    }
  }
}
