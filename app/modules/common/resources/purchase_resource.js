/**
 * PurchaseResource.
 */

export default function PurchaseResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:roomId/purchases', { roomId: '@roomId' }, {
    //getByRoom: {url: config.api.baseUrl + '/users/by_room/:roomId', method: 'get', isArray: false, params: {roomId: '@roomId'}}
  });
};

PurchaseResource.$inject = ['$resource', 'config'];