/**
 * PurchaseResource.
 */

export default function PurchaseResource($resource, config) {
  return $resource(config.api.baseUrl + '/rooms/:roomId/purchases', { roomId: '@roomId' }, {
    getRoomCredits: {url: config.api.baseUrl + '/rooms/:roomId/purchases/credits', method: 'get', isArray: false, params: {roomId: '@roomId'}},
    getRoomDebits: {url: config.api.baseUrl + '/rooms/:roomId/purchases/debits', method: 'get', isArray: false, params: {roomId: '@roomId'}}
  });
};

PurchaseResource.$inject = ['$resource', 'config'];