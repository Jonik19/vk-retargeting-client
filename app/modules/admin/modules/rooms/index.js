import angular from 'angular';

/**
 * Controllers
 */

import IndexController from './controllers/index_controller';

/**
 * Services
 */



/**
 * Definition
 */

export default angular.module('app.admin.rooms', [])
  .controller('IndexController', IndexController)
  .name;