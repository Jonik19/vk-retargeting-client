config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: require('../modules/home/views/index.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}