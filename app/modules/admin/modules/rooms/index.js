import angular from 'angular';

/**
 * Controllers
 */

import RoomsListController from './controllers/rooms_list_controller';
import RoomsCreateController from './controllers/rooms_create_controller';
import RoomsEnterController from './controllers/rooms_enter_controller';
import RoomsShowController from './controllers/rooms_show_controller';

/**
 * Definition
 */

export default angular.module('app.admin.rooms', [])

  .controller('RoomsListController', RoomsListController)
  .controller('RoomsCreateController', RoomsCreateController)
  .controller('RoomsEnterController', RoomsEnterController)
  .controller('RoomsShowController', RoomsShowController)
  .name;