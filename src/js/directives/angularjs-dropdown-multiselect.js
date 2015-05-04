// multiselect from angularjs-dropdown-multiselect
// https://github.com/dotansimha/angularjs-dropdown-multiselect
// requires that library to be included (script tag and in angular modules)
angular.module('xeditable').directive('editableMultiselect', ['editableDirectiveFactory', 
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableMultiselect',
      inputTpl: '<div ng-dropdown-multiselect="" options="" selected-model=""></div>',
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          self.scope.$apply(function() {
            self.scope.$form.$submit();
          });
          });
      }
    });
  }]);
