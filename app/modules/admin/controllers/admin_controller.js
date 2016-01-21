import Controller from '../../common/controllers/controller';

/**
 * SignInController controller.
 */

export default class AdminController extends Controller {
  constructor() {
    super(arguments);

    this.user =  this.injections.SessionService.getUser();
  }

  signOut() {
    this.injections.AuthenticationService.signOut()
      .then(this.redirectOnSignOut.bind(this));
  }

  redirectOnSignOut() {
    this.injections.$state.go('auth.sign-in');
  }
}

AdminController.$inject = ['SessionService', 'AuthenticationService', '$state'];