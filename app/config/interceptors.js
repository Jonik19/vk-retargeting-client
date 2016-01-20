/**
 * List of http interceptors
 */

export default function interceptors($httpProvider) {
  $httpProvider.interceptors.push('NotAuthorizedInterceptor');
  $httpProvider.interceptors.push('TokenInterceptor');
};

interceptors.$inject = ['$httpProvider'];