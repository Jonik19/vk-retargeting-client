/**
 * RoomResource is service to do local user authentication.
 */

export default function RoomsRoomResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:id', { id: '@id' });
};

RoomsRoomResource.$inject = ['$resource', 'config'];