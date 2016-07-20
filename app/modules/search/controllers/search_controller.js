import Controller from 'modules/common/controllers/controller';

/**
 * AdminController controller.
 */

export default class SearchController extends Controller {
  static $inject = ['$state'];

  constructor() {
    super(arguments);
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  redirectOnSignOut() {
    this.injections.$state.go('auth.sign-in');
  }
}
