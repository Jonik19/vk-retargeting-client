/**
 * Run
 */

export default function run(AuthenticationService, $state, $rootScope, config, StateChangeService) {
  $rootScope.config = config;
  $rootScope.$state = $state;

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    // Manage access to protected and only-unprotected pages.

    StateChangeService.check()
      .finally(function () {
        // manage access when user authentication state is resolved from api.

        // it can be invoked by check method, but I think this approach is more visual
        StateChangeService.onProtected(event, toState, toParams, fromState, fromParams);
        StateChangeService.onUnprotectedOnly(event, toState, toParams, fromState, fromParams);
      });
  });
};

run.$inject = ['AuthenticationService', '$state', '$rootScope', 'config', 'StateChangeService'];