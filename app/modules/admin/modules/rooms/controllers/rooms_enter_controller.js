import Controller from '../../../../common/controllers/controller';

/**
 * RoomsEnterController controller.
 */

export default class RoomsEnterController extends Controller {
  static $inject = ['RoomResource', '$state'];

  constructor() {
    super(arguments);

    this.room = {};
  }

  /**
   * Enters in passed room and redirects on success.
   *
   * @param room
   * @param event
   */

  enter(room, event) {
    if(this.form.$invalid) {
      return event.preventDefault();
    }

    this.injections.RoomResource.enter(room).$promise
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
   * Method which is called on unsuccessful authentication
   *
   * @param response
   */

  showErrors(response) {
    this.error = response.data.error.message;
  }
}