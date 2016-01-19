import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './config/routes';
import interceptors from './config/interceptors';

import home from './modules/home';
import authentication from './modules/authentication';

angular.module('app', [uiRouter, home, authentication])
  .config(interceptors)
  .config(routes);