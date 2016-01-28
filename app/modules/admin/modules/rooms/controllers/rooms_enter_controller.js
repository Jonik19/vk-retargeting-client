import Controller from '../../../../common/controllers/controller';

/**
 * RoomsEnterController controller.
 */

export default class RoomsEnterController extends Controller {
  constructor() {
    super(arguments);

    this.room = {};
  }

  /**
   * Enters in passed room and redirects on success.
   *
   * @param room
   */

  enter(room) {
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

  showErrors(response) {
    alert(JSON.stringify(response.data.error));
  }
}

RoomsEnterController.$inject = ['RoomResource', '$state'];