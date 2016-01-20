/**
 * List of states
 */


export default function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

  /**
   * Home routes
   */

    .state('home', {
      url: '/',
      template: require('../modules/home/views/index.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })

  /**
   * Authentication
   */

    .state('auth', {
      template: require('../modules/authentication/views/index.html')
    })

    .state('auth.sign-in', {
      url: '/sign-in',
      template: require('../modules/authentication/views/sign-in.html'),
      controller: 'SignInController',
      controllerAs: 'signIn'
    })
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];