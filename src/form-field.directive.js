angular
  .module('form.field')
  .directive('formField', formFieldDirective)

function formFieldDirective() {
  return {
    restrict: 'A',
    scope: {
      field: '@formField',
    },
    template: '<span></span>',
    link: link
  };

  function link(scope, el, attrs) {
  }
}
