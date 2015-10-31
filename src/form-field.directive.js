angular
  .module('formModel')
  .directive('formModel', formModelDirective);

function formModelDirective() {
  return {
    restrict: 'A',
    scope: {
      formModel: '='
    }
  };
}
