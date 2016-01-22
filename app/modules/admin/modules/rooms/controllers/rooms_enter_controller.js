import Controller from '../../../../common/controllers/controller';

/**
 * RoomsEnterController controller.
 */

export default class RoomsEnterController extends Controller {
  constructor() {
    super(arguments);

    this.room = {};
  }

  enter(room) {
    this.injections.RoomsRoomResource.enter(room).$promise
      .then(this.redirectAfterCreation.bind(this))
      .catch(this.showErrors.bind(this));
  }

  redirectAfterCreation() {
    this.injections.$state.go('admin.rooms.list');
  }

  showErrors(response) {
    alert(JSON.stringify(response.data.error));
  }
}

RoomsEnterController.$inject = ['RoomsRoomResource', '$state'];