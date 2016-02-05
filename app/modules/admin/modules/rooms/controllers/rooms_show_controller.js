import Controller from '../../../../common/controllers/controller';

/**
 * RoomsShowController controller.
 */

export default class RoomsShowController extends Controller {
  static $inject = ['RoomResource', 'UserResource', 'PurchaseResource', '$stateParams', '$q', '$state', 'config'];

  constructor() {
    super(arguments);

    // It's flag for table rendering.
    this.dataLoaded = true;

    let roomId = this.roomId = this.injections.$stateParams.id;

    // Wait for every request is resolved to render table
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
   * Assigns link from api to the scope
   *
   * @param data
   */

  onLinkLoad(data) {
    this.inviteLink = this.injections.config.site.baseUrl + this.injections.$state.href('admin.rooms.approve', {token: data.response});
  }

  /**
   * Returns 'true' if user is in the purchase list.
   *
   * @param {Object} purchase  Purchase object
   * @param {Number} userId  User id
   * @returns {boolean}
   */

  isInPurchase(purchase, userId) {
    return !!_.find(purchase.users, {userId: userId});
  }

  /**
   * Refreshes invite link. Loads it from api and assigns to the scope.
   */

  refreshInviteLink() {
    this.loadInviteLink(this.roomId)
      .then(this.onLinkLoad.bind(this));
  }

  /**
   * Sets invite link to scope if it's doesn't exist.
   */

  setInviteLink() {
    if(undefined === this.inviteLink) {
      this.refreshInviteLink();
    }
  }

  /**
   * Loads invite link from api.
   *
   * @param roomId Id of the room to get invite link
   * @returns {*|Function}
   */

  loadInviteLink(roomId) {
    return this.injections.RoomResource.getInviteLink({ roomId: roomId }).$promise;
  }

  /**
   * Returns deviation for whole room. We need to calculate deviation
   * because there are cases when purchase's amount divided on some count of people
   * is infinite. For example: Amount - 100, Users count - 3
   *
   * 100/3 = 33.3333...3 (infinite)
   *
   * Because of such divides happens deviation- amount that room(every user) needs to pay in common bank.
   * It's amount for whole room NOT for each user. To get amount for one user you should divide
   * that amount on users count.
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
   * Returns total amount for whole room
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

    // We can render table
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