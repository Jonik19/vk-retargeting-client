import angular from 'angular';

/**
 * Controllers
 */

import AdminController from './controllers/admin_controller';

/**
 * Modules
 */

import rooms from './modules/rooms';

/**
 * Definition
 */

export default angular.module('app.admin', [rooms])
  .controller('AdminController', AdminController)
  .name;