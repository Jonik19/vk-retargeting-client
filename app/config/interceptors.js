/**
 * List of http interceptors
 */

import AuthInterceptor from '../modules/authentication/services/interceptor';

export default function interceptors($httpProvider) {
  $httpProvider.interceptors.push(AuthInterceptor);
};

interceptors.$inject = ['$httpProvider'];