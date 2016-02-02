
/**
 *
 */

export default function FormError() {
  return {
    restrict: 'E',
    template: require('../views/form-error.html'),

    scope: {
      for: '='
    },

    link: function ($scope, $el, attrs) {

    }
  };
};

FormError.$inject = [];