import Controller from '../../../../common/controllers/controller';

/**
 * RoomsListController controller.
 */

export default class RoomsListController extends Controller {
  constructor() {
    super(arguments);

    this.injections.RoomsRoomResource.get().$promise
      .then(this.fillListOfRooms.bind(this));
  }

  fillListOfRooms(data) {
    this.rooms = data.response.items;
  }

}

RoomsListController.$inject = ['RoomsRoomResource'];