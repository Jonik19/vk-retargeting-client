import angular from 'angular';

/**
 * Controllers
 */

import RoomsListController from './controllers/rooms_list_controller';
import RoomsCreateController from './controllers/rooms_create_controller';
import RoomsApproveController from './controllers/rooms_approve_controller';
import RoomsShowController from './controllers/rooms_show_controller';

/**
 * Definition
 */

export default angular.module('app.admin.rooms', [])

  .controller('RoomsListController', RoomsListController)
  .controller('RoomsCreateController', RoomsCreateController)
  .controller('RoomsApproveController', RoomsApproveController)
  .controller('RoomsShowController', RoomsShowController)
  .name;