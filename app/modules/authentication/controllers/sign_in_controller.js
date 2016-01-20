import Controller from '../../common/controllers/controller';

/**
 * SignInController controller.
 */

export default class SignInController extends Controller {
  constructor() {
    super(arguments);

    this.user = {};
  }

  /**
   * Authenticates user if successful redirects to admin page
   * otherwise show errors.
   *
   * @param {Object} user Object with fields username and password
   */

  signIn(user) {
    this.injections.AuthenticationService.authenticate(user)
      .then(this.redirectOnSuccess.bind(this))
      .catch(this.showErrors.bind(this));
  }

  /**
   * Method which is called on successful authentication
   *
   * @param user
   */

  redirectOnSuccess(user) {
    this.injections.$state.go('home');
  }

  /**
   * Method which is called on unsuccessful authentication
   *
   * @param error
   */

  showErrors(error) {
    alert(JSON.stringify(error));
  }
}

SignInController.$inject = ['$http', 'AuthenticationService', '$state'];