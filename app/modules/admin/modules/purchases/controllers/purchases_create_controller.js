import Controller from '../../../../common/controllers/controller';

/**
 * PurchasesIndexController controller.
 */

export default class PurchasesCreateController extends Controller {
  static $inject = ['UserResource', 'RoomResource', 'PurchaseResource', '$q', '$state', '$stateParams'];

  constructor() {
    super(arguments);

    let roomId = this.roomId = this.injections.$stateParams.roomId;

    // Start data for purchase
    this.purchase = {
      roomId: roomId,
      users: []
    };

    // It's flag for page rendering.
    this.dataLoaded = false;

    // load all data from api
    this.injections.$q.all([
      this.loadUsers(roomId)
    ])
      .then(this.onDataLoad.bind(this));
  }

  /**
   * Creates purchase and redirects to the room page if success
   * otherwise shows errors.
   *
   * @param {Object} purchase Purchase object to send to api
   * @param {Object} event
   */

  create(purchase, event) {
    if(this.form.$invalid) {
      return event.preventDefault();
    }

    this.injections.PurchaseResource.save(purchase).$promise
      .then(this.backToRoom.bind(this));
  }

  /**
   * Loads room users from api.
   *
   * @param roomId
   * @returns {*|Function}
   */

  loadUsers(roomId) {
    return this.injections.UserResource.getByRoom({roomId: roomId}).$promise;
  }

  /**
   * Redirects user to the current room page.
   */

  backToRoom() {
    this.injections.$state.go('admin.rooms.show', {id: this.roomId});
  }

  /**
   * Returns url to the current room page.
   */

  getCurrentRoomUrl() {
    return this.injections.$state.href('admin.rooms.show', {id: this.roomId});
  }

  /**
   * Called when all data from api is loaded.
   *
   * @param promises
   */

  onDataLoad(promises) {
    this.users = promises[0].response.items;

    this.dataLoaded = true;
  }

  /**
   * Adds user id to purchase users list and changes selected option
   * to activate in in UI.
   */

  toggleToUsersList(user) {
    let index = this.purchase.users.indexOf(user.id);

    if(index === -1) {
      this.purchase.users.push(user.id);
    } else {
      this.purchase.users.splice(index, 1);
    }

    user.selected = !user.selected;
  }
}