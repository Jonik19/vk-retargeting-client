import Controller from '../../../../common/controllers/controller';

/**
 * RoomsShowController controller.
 */

export default class RoomsShowController extends Controller {
  static $inject = ['RoomResource', 'UserResource', 'PurchaseResource', '$stateParams', '$q'];

  constructor() {
    super(arguments);

    // It's flag for page rendering.

    this.dataLoaded = true;

    let roomId = this.roomId = this.injections.$stateParams.id;

    // Wait for every request is resolved to render page
    this.injections.$q.all([
      this.loadRoom(roomId),
      this.loadUsers(roomId),
      this.loadPurchases(roomId),
      this.loadCredits(roomId),
      this.loadDebits(roomId)
    ])
      .then(this.onDataLoad.bind(this));
  }

  /**
   * Loads room info from api.
   *
   * @param roomId
   * @returns {*|Function}
   */

  loadDebits(roomId) {
    return this.injections.PurchaseResource.getRoomDebits({roomId: roomId}).$promise;
  }

  /**
   * Loads room info from api.
   *
   * @param roomId
   * @returns {*|Function}
   */

  loadCredits(roomId) {
    return this.injections.PurchaseResource.getRoomCredits({roomId: roomId}).$promise;
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
   * Returns 'true' if user is in the credits list.
   *
   * @param {Object} userId  User id
   * @param {Number} userId  User id
   * @returns {boolean}
   */

  isInCredits(userId) {
    return !!_.find(this.credits, {userId: userId});
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
   * Returns deviation for whole room
   *
   * @returns {*}
   */

  getRoomDeviation() {
    let roomCredit = 0;
    let roomDebit = 0;

    for(let key1 in this.credits) {
      roomCredit += this.credits[key1];
    }

    for(let key2 in this.debits) {
      roomDebit += this.debits[key2];
    }

    return (roomDebit - roomCredit).toFixed(2);
  }

  /**
   * Returns total for whole room
   *
   * @returns {*}
   */

  getRoomTotal() {
    return this.purchases.reduce(function (prev, item) {
      return prev+item.amount;
    }, 0);
  }

  /**
   * Returns total for appropriate user
   *
   * @param userId User id
   * @returns {*}
   */

  getTotalForUser(userId) {
    let credit = this.credits[userId] || 0;
    let debit = this.debits[userId] || 0;

    return (debit - credit).toFixed(2);
  }

  /**
   * Prepares data for rendering. Is called when all requests are resolved.
   *
   * @param promises Array of requests promises
   */

  onDataLoad(promises) {
    this.room = promises[0].response;
    this.purchases = promises[2].response.items;

    // Compose it in objects
    this.users = promises[1].response.items;
    this.credits = this.composeCredits(promises[3].response.items);
    this.debits = this.composeDebits(promises[4].response.items);

    // We can render page
    this.dataLoaded = true;
  }

  /**
   * Composes array in object by some property
   */

  composeInObject(array, callback) {
    let result = {};

    array.map(function (item) {
      callback(result, item);
    });

    return result;
  }

  /**
   * Composes debits
   */

  composeDebits(items) {
    return this.composeInObject(items, function (debits, item) {
      debits[item['ownerId']] = item['debit'];
    });
  }

  /**
   * Composes credits
   */

  composeCredits(items) {
    return this.composeInObject(items, function (credits, item) {
      credits[item['userId']] = item['purchase']['credit'];
    });
  }
}