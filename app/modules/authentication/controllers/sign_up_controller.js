import Controller from '../../common/controllers/controller';

/**
 * SignUpController controller.
 */

export default class SignUpController extends Controller {
  static $inject = ['AuthenticationService', '$state'];

  constructor() {
    super(arguments);

    this.user = {};
  }

  /**
   * Creates and authenticates user if successful redirects to admin page
   * otherwise show errors.
   *
   * @param {Object} user Object with fields username and password
   * @param {Object} event Event object of current action
   */

  signUp(user, event) {
    if(this.form.$invalid) {
      return event.preventDefault();
    }

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