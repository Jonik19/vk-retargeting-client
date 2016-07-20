import Controller from 'modules/common/controllers/controller';

/**
 * AdminController controller.
 */

export default class SearchController extends Controller {
  static $inject = ['$state'];

  constructor() {
    super(arguments);

    this.forms = [];
    this.addForm();
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  addForm() {
    this.forms.push(this._getInitialFormData());
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  _getInitialFormData() {
    return {
      name: this._generateFormName()
    };
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  deleteForm(index) {
    this.forms.splice(index, 1);
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  _generateFormName() {
    return 'Форма №:date'
      .replace(':date', new Date().toLocaleTimeString());
  }
}
