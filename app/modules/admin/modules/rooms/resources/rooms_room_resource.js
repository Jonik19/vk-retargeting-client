/**
 * RoomResource is service to do local user authentication.
 */

export default function RoomsRoomResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:id', { id: '@id' }, {
    enter: {method: 'post', isArray: false, url: config.api.baseUrl + '/rooms/enter'}
  });
};

RoomsRoomResource.$inject = ['$resource', 'config'];