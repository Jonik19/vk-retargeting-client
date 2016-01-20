import Controller from '../../common/controllers/controller';

/**
 * SignUpController controller.
 */

export default class SignUpController extends Controller {
  constructor() {
    super(arguments);

    this.user = {};
  }

  /**
   * Creates and authenticates user if successful redirects to admin page
   * otherwise show errors.
   *
   * @param {Object} user Object with fields username and password
   */

  signUp(user) {
    this.injections.AuthenticationService.create(user)
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

SignUpController.$inject = ['$http', 'AuthenticationService', '$state'];