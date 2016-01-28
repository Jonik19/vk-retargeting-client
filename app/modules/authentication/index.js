import angular from 'angular';

/**
 * Controllers
 */

import SignInController from './controllers/sign_in_controller';
import SignUpController from './controllers/sign_up_controller';

/**
 * Interceptors
 */

import NotAuthorizedInterceptor from './services/not_authorized_interceptor';
import TokenInterceptor from './services/token_interceptor';


/**
 * Services
 */

import AuthenticationService from './services/authentication_service';
import SessionService from './services/session_service';
import StateChangeService from './services/state_change_service';

/**
 * Definition
 */

export default angular.module('app.authentication', [])
  .controller('SignInController', SignInController)
  .controller('SignUpController', SignUpController)

  .factory('NotAuthorizedInterceptor', NotAuthorizedInterceptor)
  .factory('TokenInterceptor', TokenInterceptor)

  .service('StateChangeService', StateChangeService)
  .service('AuthenticationService', AuthenticationService)
  .service('SessionService', SessionService)
  .name;