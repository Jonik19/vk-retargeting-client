/**
 * RoomResource.
 */

export default function RoomResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:id', { id: '@id' }, {
    approve: {url: config.api.baseUrl + '/rooms/approve/:token', method: 'post', isArray: false, params: {token: '@token'}},
    getInviteLink: {url: config.api.baseUrl + '/rooms/:roomId/approve', method: 'get', isArray: false, params: {roomId: '@roomId'}}
  })
};

RoomResource.$inject = ['$resource', 'config'];