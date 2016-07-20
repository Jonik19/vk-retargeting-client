import Controller from 'modules/common/controllers/controller';

/**
 * AdminController controller.
 */

export default class SearchFormCtrl extends Controller {
  static $inject = ['$scope'];

  constructor() {
    super(arguments);

    this.name = this.injections.$scope.name;
    this.data = this.injections.$scope.data;
    this.deletable = this.injections.$scope.deletable;
    this.onDelete = this.injections.$scope.onDelete;
  }



}
