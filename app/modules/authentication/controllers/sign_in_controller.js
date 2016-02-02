import Controller from '../../common/controllers/controller';

/**
 * SignInController controller.
 */

export default class SignInController extends Controller {
  static $inject = ['AuthenticationService', '$state'];

  constructor() {
    super(arguments);

    this.user = {};
  }

  /**
   * Authenticates user if successful redirects to admin page
   * otherwise show errors.
   *
   * @param {Object} user Object with fields username and password
   * @param {Object} event Event object of current action
   */

  signIn(user, event) {

    if(this.form.$invalid) {
      return event.preventDefault();
    }

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
    this.injections.$state.go('admin.rooms.list');
  }

  /**
   * Method which is called on unsuccessful authentication
   *
   * @param response
   */

  showErrors(response) {
    this.error = response.data.error.message;
  }
}