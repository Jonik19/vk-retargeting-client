/**
 * List of http interceptors
 */

export default function interceptors($httpProvider) {
  $httpProvider.interceptors.push('ResponseHandler');
};

interceptors.$inject = ['$httpProvider'];
