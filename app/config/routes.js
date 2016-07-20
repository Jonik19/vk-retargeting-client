/**
 * List of states
 */


export default function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

    /**
     * Search: Find
     */

    .state('search', {
      url: '/',
      template: require('modules/search/views/index.html'),
      controller: 'SearchController',
      controllerAs: 'vm',
    });
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];
