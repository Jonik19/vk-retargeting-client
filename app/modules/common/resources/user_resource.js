/**
 * UsersResource.
 */

export default function UserResource($resource, config) {
  return $resource(config.api.baseUrl + '/users/:action', { action: '@id' }, {
    getByRoom: {url: config.api.baseUrl + '/users/by_room/:roomId', method: 'get', isArray: false, params: {roomId: '@roomId'}}
  });
};

UserResource.$inject = ['$resource', 'config'];