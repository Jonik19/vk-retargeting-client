import angular from 'angular';

/**
 * Controllers
 */

import PurchasesCreateController from './controllers/purchases_create_controller';

/**
 * Definition
 */

export default angular.module('app.admin.purchases', [])

  .controller('PurchasesCreateController', PurchasesCreateController)
  .name;