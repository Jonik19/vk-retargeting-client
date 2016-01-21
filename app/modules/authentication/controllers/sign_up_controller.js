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
   * Method which is called on successful user creation
   *
   * @param user
   */

  redirectOnSuccess(user) {
    alert('Congratulations. You are our new user!');

    this.injections.$state.go('admin.rooms');
  }

  /**
   * Method which is called on unsuccessful user creation
   *
   * @param error
   */

  showErrors(error) {
    console.log(error.errors);
  }
}

SignUpController.$inject = ['AuthenticationService', '$state'];