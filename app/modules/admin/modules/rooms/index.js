import angular from 'angular';

/**
 * Controllers
 */

import RoomsIndexController from './controllers/rooms_index_controller';
import RoomsCreateController from './controllers/rooms_create_controller';

/**
 * Services
 */



/**
 * Definition
 */

export default angular.module('app.admin.rooms', [])
  .controller('RoomsIndexController', RoomsIndexController)
  .controller('RoomsCreateController', RoomsCreateController)
  .name;