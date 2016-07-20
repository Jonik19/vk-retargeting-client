import Controller from 'modules/common/controllers/controller';

/**
 * AdminController controller.
 */

export default class SearchController extends Controller {
  static $inject = ['$state', 'SearchResource'];

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

  /**
   * Redirects user to 'sign-in' state.
   */

  areThereForms() {
    return !!this.forms.length;
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  _getRequestResultsConfig() {
    return {
      forms: this.forms
    };
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  getResults() {
    this.injections.SearchResource.get(this._getRequestResultsConfig())
      .then(this._onSuccessResults.bind(this))
      .catch(this._onErrorResults.bind(this));
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  _onSuccessResults(response) {
    this.items = response.items;
  }

  /**
   * Redirects user to 'sign-in' state.
   */

  _onErrorResults(response) {
    debugger
  }
}
