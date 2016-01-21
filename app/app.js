import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './config/routes';
import interceptors from './config/interceptors';
import http from './config/http';
import run from './config/run';

import home from './modules/home';
import authentication from './modules/authentication';
import common from './modules/common';
import admin from './modules/admin';

angular.module('app', [uiRouter, home, authentication, common, admin])
  .config(interceptors)
  .config(http)
  .config(routes)
  .run(run);