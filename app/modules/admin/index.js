import angular from 'angular';

/**
 * Controllers
 */

import AdminController from './controllers/admin_controller';

/**
 * Modules
 */

import rooms from './modules/rooms';
import purchases from './modules/purchases';

/**
 * Definition
 */

export default angular.module('app.admin', [rooms, purchases])

  .controller('AdminController', AdminController)
  .name;