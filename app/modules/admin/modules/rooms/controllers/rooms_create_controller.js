import Controller from '../../../../common/controllers/controller';

/**
 * SignInController controller.
 */

export default class RoomsIndexController extends Controller {
  constructor() {
    super(arguments);

    this.room = {};
  }

  create(room) {
    alert('Hello ');
  }
}

RoomsIndexController.$inject = [];