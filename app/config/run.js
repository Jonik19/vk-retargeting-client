/**
 * Run
 */

export default function run(AuthenticationService, $state) {
  AuthenticationService.check()
    .then(function (user) {
      // TODO: redirect to admin page
      $state.go('admin.rooms');
    });
};

run.$inject = ['AuthenticationService', '$state'];