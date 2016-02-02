import Controller from '../../../../common/controllers/controller';

/**
 * RoomsListController controller.
 */

export default class RoomsListController extends Controller {
  static $inject = ['RoomResource'];

  constructor() {
    super(arguments);

    this.loadRooms()
      .then(this.fillListOfRooms.bind(this));
  }

  /**
   * Loads room list from api.
   *
   * @returns {*|Function}
   */

  loadRooms() {
    return this.injections.RoomResource.get().$promise;
  }

  /**
   * Assigns response from api to the scope.
   *
   * @param data
   */

  fillListOfRooms(data) {
    this.rooms = data.response.items;
  }

}