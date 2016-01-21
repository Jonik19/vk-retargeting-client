import angular from 'angular';

/**
 * Controllers
 */

import RoomsListController from './controllers/rooms_list_controller';
import RoomsCreateController from './controllers/rooms_create_controller';

/**
 * Services
 */

import RoomsRoomResource from './resources/rooms_room_resource';

/**
 * Definition
 */

export default angular.module('app.admin.rooms', [])
  .factory('RoomsRoomResource', RoomsRoomResource)

  .controller('RoomsListController', RoomsListController)
  .controller('RoomsCreateController', RoomsCreateController)
  .name;