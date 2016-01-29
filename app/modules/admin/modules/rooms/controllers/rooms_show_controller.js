import Controller from '../../../../common/controllers/controller';

/**
 * RoomsShowController controller.
 */

export default class RoomsShowController extends Controller {
  constructor() {
    super(arguments);

    // It's flag for page rendering.

    this.dataLoaded = true;

    let roomId = this.roomId = this.injections.$stateParams.id;

    // Wait for every request is resolved to render page
    this.injections.$q.all([
      this.loadRoom(roomId),
      this.loadUsers(roomId),
      this.loadPurchases(roomId)
    ])
      .then(this.onDataLoad.bind(this));
  }

  /**
   * Loads room info from api.
   *
   * @param roomId
   * @returns {*|Function}
   */

  loadRoom(roomId) {
    return this.injections.RoomResource.get({id: roomId}).$promise;
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
   * Loads room purchases from api.
   *
   * @param roomId
   * @returns {*|Function}
   */

  loadPurchases(roomId) {
    return this.injections.PurchaseResource.get({roomId: roomId}).$promise;
  }

  /**
   * Returns 'true' if user is in the purchase list.
   *
   * @param {Object} purchase  Purchase object
   * @param {Number} userId  User id
   * @returns {boolean}
   */

  isInPurchase(purchase, userId) {
    // this function works to many times
    return !!_.find(purchase.users, {userId: userId});
  }

  /**
   * Find user by id
   *
   * @param {Number} id User id
   * @returns {Object} User object
   */

  getUserById(id) {
    return _.find(this.users, {id: id});
  }

  /**
   * Prepares data for rendering. Is called when all requests are resolved.
   *
   * @param promises Array of requests promises
   */

  onDataLoad(promises) {
    this.room = promises[0].response;
    this.users = promises[1].response.items;
    this.purchases = promises[2].response.items;

    // We can render page
    this.dataLoaded = true;
  }
}

RoomsShowController.$inject = ['RoomResource', 'UserResource', 'PurchaseResource', '$stateParams', '$q'];