import angular from 'angular';

/**
 * Services
 */

import Api from './services/api';

/**
 * Resources
 */

import UserResource from './resources/user_resource';
import RoomResource from './resources/room_resource';
import PurchaseResource from './resources/purchase_resource';

/**
 * Definition
 */

export default angular.module('app.common', [])
  .service('Api', Api)

  .factory('UserResource', UserResource)
  .factory('RoomResource', RoomResource)
  .factory('PurchaseResource', PurchaseResource)
  .name;