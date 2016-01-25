/**
 * RoomResource.
 */

export default function RoomsRoomResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:action', { action: '@id' }, {
    enter: {method: 'post', isArray: false, params: {action: 'enter'}}
  });
};

RoomsRoomResource.$inject = ['$resource', 'config'];