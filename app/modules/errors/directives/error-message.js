
/**
 *
 */

export default function ErrorMessage() {
  return {
    restrict: 'E',
    template: require('../views/error-message.html'),

    scope: {
      for: '='
    },

    link: function ($scope, $el, attrs) {
    }
  };
};

ErrorMessage.$inject = [];