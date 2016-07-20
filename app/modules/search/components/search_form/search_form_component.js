/**
 * RoomResource.
 */

export default function SearchForm($resource, config) {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      name: '@',
      onDelete: '&'
    },
    template: require('./search_form_view.html'),
    controller: 'SearchFormComponentCtrl',
    controllerAs: 'ctrl'
  };
};

SearchForm.$inject = ['$resource', 'config'];
