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

    .state('auth.sign-up', {
      url: '/sign-up',
      template: require('../modules/authentication/views/sign-up.html'),
      controller: 'SignUpController',
      controllerAs: 'signUp'
    })

  /**
   * Admin
   */

    .state('admin', {
      abstract: true,
      template: require('../modules/admin/views/index.html'),
      controller: 'AdminController',
      controllerAs: 'admin'
    })

    /**
     * Admin: Rooms
     */

    .state('admin.rooms', {
      url: '/rooms',
      template: require('../modules/admin/modules/rooms/views/index.html'),
      controller: 'RoomsIndexController',
      controllerAs: 'vm'
    })

    .state('admin.rooms.create', {
      url: '/create',
      template: require('../modules/admin/modules/rooms/views/create.html'),
      controller: 'RoomsCreateController',
      controllerAs: 'vm'
    })
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];