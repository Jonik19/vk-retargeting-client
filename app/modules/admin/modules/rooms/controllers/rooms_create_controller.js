import Controller from '../../../../common/controllers/controller';

/**
 * RoomsCreateController controller.
 */

export default class RoomsCreateController extends Controller {
  static $inject = ['UserResource', 'RoomResource', '$state'];

  constructor() {
    super(arguments);

    this.room = {};
  }

  /**
   * Creates room by passed data and redirects after success.
   *
   * @param room
   * @param event
   */

  create(room, event) {
    if(this.form.$invalid) {
      return event.preventDefault();
    }

    this.injections.RoomResource.save(room).$promise
      .then(this.redirectAfterCreation.bind(this))
      .catch(this.showErrors.bind(this));
  }

  /**
   * Redirects user to his room list.
   */

  redirectAfterCreation() {
    this.injections.$state.go('admin.rooms.list');
  }

  /**
   * Deete it in future !!!!
   */

  showErrors(response) {
    alert(JSON.stringify(response.data.error));
    console.log(response.data.error);

  }
}