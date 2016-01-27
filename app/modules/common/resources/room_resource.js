/**
 * RoomResource.
 */

export default function RoomResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:id', { id: '@id' }, {
    enter: {url: config.api.baseUrl + '/rooms/enter', method: 'post', isArray: false}
  })
};

RoomResource.$inject = ['$resource', 'config'];