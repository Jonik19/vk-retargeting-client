import Controller from '../../../../common/controllers/controller';

/**
 * RoomsApproveController controller.
 */

export default class RoomsApproveController extends Controller {
  static $inject = ['RoomResource', '$state', '$stateParams'];

  constructor() {
    super(arguments);

    this.approve(this.injections.$stateParams.token)
      .finally(this.markAsDone.bind(this));
  }

  /**
   * Approves user in some room by passed token.
   *
   * @param token
   */

  approve(token) {
    return this.injections.RoomResource.approve({token: token}).$promise
      .then(this.redirectAfterCreation.bind(this))
      .catch(this.showErrors.bind(this));
  }

  /**
   * Redirects to user room list.
   */

  redirectAfterCreation() {
    this.injections.$state.go('admin.rooms.list');
  }

  /**
   * Sets 'done' field on the scope to 'true'.
   * This flag is needed to show progress of approving.
   */

  markAsDone() {
    this.done = true;
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