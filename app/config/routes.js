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
      controllerAs: 'vm'
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
      controllerAs: 'vm'
    })

    .state('auth.sign-up', {
      url: '/sign-up',
      template: require('../modules/authentication/views/sign-up.html'),
      controller: 'SignUpController',
      controllerAs: 'vm'
    })

  /**
   * Admin
   */

    .state('admin', {
      abstract: true,
      template: require('../modules/admin/views/index.html'),
      controller: 'AdminController',
      controllerAs: 'vm'
    })

    /**
     * Admin: Rooms
     */

    .state('admin.rooms', {
      url: '/rooms',
      abstract: true,
      template: require('../modules/admin/modules/rooms/views/index.html')
    })

    .state('admin.rooms.list', {
      url: '',
      template: require('../modules/admin/modules/rooms/views/list.html'),
      controller: 'RoomsListController',
      controllerAs: 'vm'
    })

    .state('admin.rooms.create', {
      url: '/create',
      template: require('../modules/admin/modules/rooms/views/create.html'),
      controller: 'RoomsCreateController',
      controllerAs: 'vm'
    })

    .state('admin.rooms.enter', {
      url: '/enter',
      template: require('../modules/admin/modules/rooms/views/enter.html'),
      controller: 'RoomsEnterController',
      controllerAs: 'vm'
    })
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];