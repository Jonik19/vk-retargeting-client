import Controller from '../../common/controllers/controller';

/**
 * AdminController controller.
 */

export default class AdminController extends Controller {
  static $inject = ['SessionService', 'AuthenticationService', '$state'];

  constructor() {
    super(arguments);

    this.user =  this.injections.SessionService.getUser();
  }

  /**
   * Destroys user session and redirects from admin.
   */

  signOut() {
    this.injections.AuthenticationService.signOut()
      .then(this.redirectOnSignOut.bind(this));
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  redirectOnSignOut() {
    this.injections.$state.go('auth.sign-in');
  }
}