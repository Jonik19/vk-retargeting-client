import angular from 'angular';

import SignInController from './controllers/sign_in_controller';
//import SignUpController from './controllers/sign_up_controller';

import NotAuthorizedInterceptor from './services/not_authorized_interceptor';

export default angular.module('app.authentication', [])
  .controller('SignInController', SignInController)
  //.controller('SignUpController', SignUpController)

  .factory('NotAuthorizedInterceptor', NotAuthorizedInterceptor)
  .name;