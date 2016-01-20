/**
 * Run
 */

export default function run(AuthenticationService, $state) {
  AuthenticationService.check()
    .then(function (user) {
      // TODO: redirect to admin page
      $state.go('home');
    });
};

run.$inject = ['AuthenticationService', '$state'];