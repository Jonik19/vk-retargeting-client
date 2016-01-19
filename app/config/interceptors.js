/**
 * List of http interceptors
 */

/**
 * !!!!!!!!!!!!!!!!!
 * Need to decide, require interceptor or pass name of factory.
 * !!!!!!!!!!!!!!!!!
 */

import NotAuthorizedInterceptor from '../modules/authentication/services/not_authorized_interceptor';

export default function interceptors($httpProvider) {
  $httpProvider.interceptors.push('NotAuthorizedInterceptor');
};

interceptors.$inject = ['$httpProvider'];