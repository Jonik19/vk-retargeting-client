/**
 * List of states
 */


export default function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/rooms');

  $stateProvider

  /**
   * Authentication
   */

    .state('auth', {
      template: require('../modules/authentication/views/index.html'),
      data: {
        authenticate: false
      }
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
      controllerAs: 'vm',
      data: {
        authenticate: true
      }
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

    .state('admin.rooms.approve', {
      url: '/approve/:token',
      template: require('../modules/admin/modules/rooms/views/approve.html'),
      controller: 'RoomsApproveController',
      controllerAs: 'vm'
    })
    .state('admin.rooms.show', {
      url: '/:id',
      template: require('../modules/admin/modules/rooms/views/show.html'),
      controller: 'RoomsShowController',
      controllerAs: 'vm'
    })

  /**
   * Purchases routes
   */

    .state('admin.rooms.purchases', {
      url: '/:roomId/purchases',
      abstract: true,
      template: require('../modules/admin/modules/purchases/views/index.html')
    })
    .state('admin.rooms.purchases.create', {
      url: '/create',
      template: require('../modules/admin/modules/purchases/views/create.html'),
      controller: 'PurchasesCreateController',
      controllerAs: 'vm'
    })
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];