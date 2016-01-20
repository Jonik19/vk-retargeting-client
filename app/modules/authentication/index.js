import angular from 'angular';

/**
 * Controllers
 */

import SignInController from './controllers/sign_in_controller';

/**
 * Interceptors
 */

import NotAuthorizedInterceptor from './services/not_authorized_interceptor';

/**
 * Services
 */

import AuthenticationService from './services/authentication_service';

/**
 * Definition
 */

export default angular.module('app.authentication', [])
  .controller('SignInController', SignInController)

  .factory('NotAuthorizedInterceptor', NotAuthorizedInterceptor)

  .service('AuthenticationService', AuthenticationService)
  .name;